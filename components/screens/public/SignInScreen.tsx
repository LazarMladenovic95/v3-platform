"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  Ghost,
  InputField,
  PrimaryPink,
  RadioGroupField,
  Text,
} from "@/components/ui";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export type SignInScreenMode = "login" | "signup";

export interface SignInScreenProps {
  mode: SignInScreenMode;
}

type SignUpStep = "role" | "credentials" | "verify";

const authLinkClassName = cn(
  "text-body-small-bold text-primary underline-offset-2 hover:text-primary-hover hover:underline",
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

const CONFIRMATION_CODE_PATTERN = /^\d{6}$/;

function mimicSendVerificationCode() {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, 900);
  });
}

export function SignInScreen({ mode }: SignInScreenProps) {
  const router = useRouter();
  const formId = useId();
  const isSignUp = mode === "signup";

  const [signUpStep, setSignUpStep] = useState<SignUpStep>("role");
  const [role, setRole] = useState("customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [invalidCode, setInvalidCode] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const isReviewerFlow = isSignUp && role === "reviewer" && signUpStep !== "role";
  const cardTitle = (() => {
    if (!isSignUp) return t("app.auth.signIn.title");
    if (signUpStep === "verify") return t("app.auth.signUp.verify.title");
    if (signUpStep === "credentials") return t("app.auth.signUp.reviewerCredentials.title");
    return t("app.auth.signUp.title");
  })();

  const cardDescription = (() => {
    if (!isSignUp) return t("app.auth.signIn.description");
    if (signUpStep === "verify") {
      return t("app.auth.signUp.verify.description", { email });
    }
    if (signUpStep === "credentials") {
      return t("app.auth.signUp.reviewerCredentials.description");
    }
    return t("app.auth.signUp.description");
  })();

  const handleRoleContinue = () => {
    if (role === "reviewer") {
      setSignUpStep("credentials");
      return;
    }
    router.push("/company");
  };

  const handleCredentialsSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMismatch(true);
      return;
    }
    setPasswordMismatch(false);
    setIsSendingCode(true);
    await mimicSendVerificationCode();
    setIsSendingCode(false);
    setSignUpStep("verify");
    setConfirmationCode("");
    setInvalidCode(false);
  };

  const handleVerifySubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!CONFIRMATION_CODE_PATTERN.test(confirmationCode)) {
      setInvalidCode(true);
      return;
    }
    setInvalidCode(false);
    setIsVerifying(true);
    await mimicSendVerificationCode();
    setIsVerifying(false);
    router.push("/reviewer/onboarding");
  };

  const handleResendCode = async () => {
    setIsSendingCode(true);
    await mimicSendVerificationCode();
    setIsSendingCode(false);
    setConfirmationCode("");
    setInvalidCode(false);
  };

  const submitLabel = (() => {
    if (!isSignUp) return t("app.auth.signIn.submit");
    if (signUpStep === "verify") return t("app.auth.signUp.verify.submit");
    if (signUpStep === "credentials") return t("app.auth.signUp.reviewerCredentials.submit");
    return t("app.auth.signUp.submit");
  })();

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isSignUp) return;
    if (signUpStep === "role") {
      handleRoleContinue();
      return;
    }
    if (signUpStep === "credentials") {
      void handleCredentialsSubmit(event);
      return;
    }
    if (signUpStep === "verify") {
      void handleVerifySubmit(event);
    }
  };

  const showFooterToggle = !isReviewerFlow;

  return (
    <div className="flex w-full min-h-main-below-header items-center justify-center px-6 py-10 md:py-16">
      <div className="w-full max-w-lg">
        <Card padding="medium" surface="default" className="shadow-sm">
          <CardTitle>{cardTitle}</CardTitle>
          <CardDescription>{cardDescription}</CardDescription>

          <CardContent className="mt-6">
            <form id={formId} className="flex flex-col gap-5" onSubmit={handleFormSubmit}>
              {isSignUp && signUpStep === "role" ? (
                <RadioGroupField
                  label={t("app.auth.signUp.roleLabel")}
                  name="signup-role"
                  value={role}
                  onValueChange={setRole}
                  options={[
                    {
                      value: "customer",
                      label: t("app.auth.signUp.roleCustomer"),
                    },
                    {
                      value: "reviewer",
                      label: t("app.auth.signUp.roleReviewer"),
                    },
                  ]}
                />
              ) : null}

              {!isSignUp ? (
                <>
                  <InputField
                    label={t("app.auth.signIn.emailLabel")}
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder={t("app.auth.signIn.emailPlaceholder")}
                    required
                  />
                  <InputField
                    label={t("app.auth.signIn.passwordLabel")}
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    placeholder={t("app.auth.signIn.passwordPlaceholder")}
                    required
                  />
                  <div className="flex justify-end">
                    <Link href="#" className={authLinkClassName}>
                      {t("app.auth.signIn.forgotPassword")}
                    </Link>
                  </div>
                </>
              ) : null}

              {isSignUp && signUpStep === "credentials" ? (
                <>
                  <InputField
                    label={t("app.auth.signIn.emailLabel")}
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder={t("app.auth.signIn.emailPlaceholder")}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                  <InputField
                    label={t("app.auth.signUp.reviewerCredentials.passwordLabel")}
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    placeholder={t("app.auth.signUp.reviewerCredentials.passwordPlaceholder")}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    state={passwordMismatch ? "error" : "default"}
                    required
                  />
                  <InputField
                    label={t("app.auth.signUp.reviewerCredentials.confirmPasswordLabel")}
                    type="password"
                    name="confirm-password"
                    autoComplete="new-password"
                    placeholder={t("app.auth.signUp.reviewerCredentials.confirmPasswordPlaceholder")}
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    hint={passwordMismatch ? t("app.auth.signUp.reviewerCredentials.passwordMismatch") : undefined}
                    state={passwordMismatch ? "error" : "default"}
                    required
                  />
                </>
              ) : null}

              {isSignUp && signUpStep === "verify" ? (
                <>
                  <InputField
                    label={t("app.auth.signUp.verify.codeLabel")}
                    type="text"
                    name="confirmation-code"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    placeholder={t("app.auth.signUp.verify.codePlaceholder")}
                    maxLength={6}
                    value={confirmationCode}
                    onChange={(event) => {
                      const digitsOnly = event.target.value.replace(/\D/g, "").slice(0, 6);
                      setConfirmationCode(digitsOnly);
                      if (invalidCode) setInvalidCode(false);
                    }}
                    hint={invalidCode ? t("app.auth.signUp.verify.invalidCode") : undefined}
                    state={invalidCode ? "error" : "default"}
                    required
                  />
                  <div className="flex justify-center">
                    <Ghost
                      type="button"
                      size="small"
                      disabled={isSendingCode}
                      loading={isSendingCode}
                      onClick={() => void handleResendCode()}
                    >
                      {isSendingCode
                        ? t("app.auth.signUp.verify.sending")
                        : t("app.auth.signUp.verify.resend")}
                    </Ghost>
                  </div>
                </>
              ) : null}

              <PrimaryPink
                type="submit"
                size="large"
                className="w-full"
                loading={isSendingCode || isVerifying}
                disabled={isSendingCode || isVerifying}
              >
                {submitLabel}
              </PrimaryPink>

              {isSignUp && signUpStep === "verify" ? (
                <div className="text-center">
                  <Ghost
                    type="button"
                    size="small"
                    onClick={() => {
                      setSignUpStep("credentials");
                      setInvalidCode(false);
                    }}
                  >
                    {t("app.auth.signUp.verify.changeEmail")}
                  </Ghost>
                </div>
              ) : null}
            </form>
          </CardContent>

          {showFooterToggle ? (
            <div className="mt-6 border-t border-border pt-5 text-center">
              <Text variant="body-small" as="span">
                {isSignUp ? t("app.auth.signUp.haveAccount") : t("app.auth.signIn.noAccount")}{" "}
                <Link
                  href={isSignUp ? "/sign-in" : "/sign-in?sign-up"}
                  className={authLinkClassName}
                >
                  {isSignUp ? t("app.auth.signUp.logInLink") : t("app.auth.signIn.registerLink")}
                </Link>
              </Text>
            </div>
          ) : null}
        </Card>
      </div>
    </div>
  );
}
