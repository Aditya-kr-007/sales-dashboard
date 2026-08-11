"use client";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean };

export function Button({ active = false, className = "", ...props }: Props) {
  return <button {...props} className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${active ? "bg-slate-900 text-white" : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"} ${className}`} />;
}
