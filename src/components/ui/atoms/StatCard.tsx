type Props = { label: string; value: string; helper?: string };
export function StatCard({ label, value, helper }: Props) {
  return <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200"><p className="text-sm text-slate-500">{label}</p><p className="mt-2 text-2xl font-bold tracking-tight">{value}</p>{helper && <p className="mt-1 text-xs text-slate-500">{helper}</p>}</div>;
}
