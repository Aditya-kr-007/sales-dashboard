"use client";
import { Input } from "@/components/ui/atoms/Input";
export function ThresholdFilter({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return <label className="block max-w-xs"><span className="mb-2 block text-sm font-medium text-slate-700">Sales threshold</span><Input type="number" min="0" step="1000" value={value || ""} onChange={(e) => onChange(Number(e.target.value))} placeholder="e.g. 80000" /></label>;
}
