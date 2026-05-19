import { redirect } from "next/navigation";

type LegacyDesignSystemRedirectProps = {
  params: Promise<{ path?: string[] }>;
};

export default async function LegacyDesignSystemRedirect({ params }: LegacyDesignSystemRedirectProps) {
  const { path } = await params;
  const suffix = path?.length ? `/${path.join("/")}` : "";
  redirect(`/bnd/designsystem${suffix}`);
}
