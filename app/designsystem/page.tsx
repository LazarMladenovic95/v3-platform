import Image from "next/image";

export default function DesignSystemOverviewPage() {
  return (
    <div className="flex min-h-[calc(100vh-70px-4rem)] flex-col items-center justify-center py-16">
      <Image
        src="/expeerly-logo.svg"
        alt="Expeerly"
        width={240}
        height={64}
        priority
        className="h-16 w-auto max-w-[90vw]"
      />
    </div>
  );
}
