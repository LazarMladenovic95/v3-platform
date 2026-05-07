import Image from "next/image";
import Link from "next/link";
import { PrimaryPink } from "@/components/ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col items-center justify-center px-6 py-8 text-center md:px-16 lg:px-20">
        <Image
          src="/expeerly-logo.svg"
          alt="Expeerly logo"
          width={180}
          height={48}
          priority
          className="h-[48px] w-[180px]"
        />
        <h1 className="mt-6 text-heading-1 text-navy-500">This is the new expeerly version</h1>
        <Link href="/designsystem" className="mt-6">
          <PrimaryPink>Go to Design System</PrimaryPink>
        </Link>
      </main>
    </div>
  );
}
