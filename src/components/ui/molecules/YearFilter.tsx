"use client";
import { Button } from "@/components/ui/atoms/Button";
import type { SalesYear } from "@/types/sales";

export function YearFilter({ year, onChange }: { year: SalesYear; onChange: (year: SalesYear) => void }) {
  return <div className="flex flex-wrap gap-2">{([2022, 2023, 2024] as SalesYear[]).map((item) => <Button key={item} active={item === year} onClick={() => onChange(item)}>{item}</Button>)}</div>;
}
