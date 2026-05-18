// FileUploadField molecule for click-to-select and drag-and-drop file picking.
"use client";

import * as React from "react";
import { UploadCloud } from "lucide-react";
import { cn } from "@/lib/utils";
import { HintText } from "../atoms/HintText";
import { Label } from "../atoms/Label";
import { ProgressBar } from "./ProgressBar";
import { Tag } from "../atoms/Tag";
import { OutlineNeutral } from "../atoms/button/OutlineNeutral";

export interface FileUploadFieldProps {
  label: string;
  hint?: string;
  accept?: string;
  multiple?: boolean;
  maxSizeBytes?: number;
  state?: "default" | "error" | "loading";
  error?: string;
  progress?: number;
  disabled?: boolean;
  id?: string;
  className?: string;
  onFilesChange?: (files: File[]) => void;
}

function fileListToArray(fileList: FileList | null) {
  return fileList ? Array.from(fileList) : [];
}

function formatBytes(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;

  return `${Math.round((bytes / 1024 / 1024) * 10) / 10} MB`;
}

function fileMatchesAccept(file: File, accept?: string) {
  if (!accept) return true;

  return accept.split(",").some((rawType) => {
    const type = rawType.trim().toLowerCase();
    const fileName = file.name.toLowerCase();

    if (!type) return false;
    if (type.startsWith(".")) return fileName.endsWith(type);
    if (type.endsWith("/*")) return file.type.toLowerCase().startsWith(type.replace("/*", "/"));

    return file.type.toLowerCase() === type;
  });
}

export function FileUploadField({
  label,
  hint,
  accept,
  multiple = false,
  maxSizeBytes,
  state = "default",
  error,
  progress,
  disabled = false,
  id,
  className,
  onFilesChange,
}: FileUploadFieldProps) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const [isDragging, setIsDragging] = React.useState(false);
  const [files, setFiles] = React.useState<File[]>([]);
  const [internalError, setInternalError] = React.useState<string | undefined>();
  const errorMessage = error ?? internalError;
  const messageId = errorMessage ? `${inputId}-error` : hintId;
  const isError = state === "error" || Boolean(errorMessage);
  const isLoading = state === "loading";

  function updateFiles(nextFiles: File[]) {
    const selectedFiles = multiple ? nextFiles : nextFiles.slice(0, 1);
    const invalidType = selectedFiles.find((file) => !fileMatchesAccept(file, accept));
    const oversizedFile = maxSizeBytes
      ? selectedFiles.find((file) => file.size > maxSizeBytes)
      : undefined;

    if (invalidType) {
      setInternalError(`${invalidType.name} is not an accepted file type.`);
      return;
    }

    if (oversizedFile && maxSizeBytes) {
      setInternalError(`${oversizedFile.name} is larger than ${formatBytes(maxSizeBytes)}.`);
      return;
    }

    setInternalError(undefined);
    setFiles(selectedFiles);
    onFilesChange?.(selectedFiles);
  }

  function clearFiles() {
    updateFiles([]);
  }

  function removeFile(fileName: string) {
    updateFiles(files.filter((file) => file.name !== fileName));
  }

  function handleDrop(event: React.DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setIsDragging(false);

    if (disabled) return;

    updateFiles(fileListToArray(event.dataTransfer.files));
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <Label htmlFor={inputId} className="mb-1" disabled={disabled}>
        {label}
      </Label>

      <input
        id={inputId}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled || isLoading}
        aria-invalid={isError}
        aria-describedby={messageId}
        className="sr-only"
        onChange={(event) => {
          updateFiles(fileListToArray(event.target.files));
          event.target.value = "";
        }}
      />

      <label
        htmlFor={inputId}
        className={cn(
          "flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-border bg-surface px-4 py-6 text-center transition-colors",
          "hover:border-border-focus hover:bg-surface-hover",
          "focus-within:border-border-focus focus-within:ring-2 focus-within:ring-focus focus-within:ring-offset-2 focus-within:ring-offset-surface",
          isDragging && "border-border-focus bg-surface-hover",
          isError && "border-border-error bg-destructive-subtle",
          isLoading && "cursor-not-allowed hover:bg-surface",
          disabled && "cursor-not-allowed bg-disabled opacity-60 hover:border-border",
        )}
        onDragOver={(event) => {
          event.preventDefault();
          if (!disabled) setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <span
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full",
            isError ? "bg-destructive-subtle text-destructive" : "bg-surface-active text-secondary",
          )}
        >
          <UploadCloud className="h-5 w-5" aria-hidden />
        </span>
        {isLoading ? (
          <div className="mt-3 w-full max-w-sm">
            <ProgressBar value={progress ?? 0} label="Uploading" />
          </div>
        ) : (
          <>
            <span className="mt-3 text-body-small-bold text-foreground-title">
              Tap to upload or drag and drop
            </span>
            <span className="mt-1 text-body-small text-foreground-muted">
              {[
                multiple ? "Select one or more files." : "Select one file.",
                accept ? `Accepted: ${accept}` : undefined,
                maxSizeBytes ? `Max size: ${formatBytes(maxSizeBytes)}` : undefined,
              ].filter(Boolean).join(" ")}
            </span>
          </>
        )}
      </label>

      {files.length > 0 && (
        <div className="mt-3 flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {files.map((file) => (
              <Tag
                key={`${file.name}-${file.lastModified}`}
                label={file.name}
                onRemove={() => removeFile(file.name)}
              />
            ))}
          </div>
          <OutlineNeutral type="button" size="small" className="self-start" onClick={clearFiles}>
            Clear
          </OutlineNeutral>
        </div>
      )}

      {errorMessage && (
        <HintText id={`${inputId}-error`} className="mt-2 text-destructive">
          {errorMessage}
        </HintText>
      )}

      {hint && (
        <HintText id={hintId} className="mt-2">
          {hint}
        </HintText>
      )}
    </div>
  );
}
