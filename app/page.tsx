import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-100 p-8">
      <h1 className="text-2xl font-bold text-slate-900">Expeerly Design System</h1>
      <p className="mt-3 text-slate-700">Basic Next.js starter is running.</p>
    </div>
  );
}
