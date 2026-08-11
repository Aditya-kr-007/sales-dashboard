import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="max-w-xl rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
        <p className="mb-2 text-sm font-semibold text-indigo-600">Sales Analytics</p>
        <h1 className="text-3xl font-bold tracking-tight">Next.js 15 Dashboard</h1>
        <p className="mt-3 text-slate-600">A small Atomic Design dashboard for comparing sales from 2022–2024.</p>
        <Link href="/dashboard" className="mt-6 inline-flex rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-700">Open Dashboard</Link>
      </div>
    </main>
  );
}
