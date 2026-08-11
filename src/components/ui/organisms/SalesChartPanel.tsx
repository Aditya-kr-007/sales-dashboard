"use client";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/atoms/Button";
import { BarSalesChart } from "@/components/charts/BarSalesChart";
import { LineSalesChart } from "@/components/charts/LineSalesChart";
import { PieSalesChart } from "@/components/charts/PieSalesChart";
import type { MonthlySales, SalesYear } from "@/types/sales";

type ChartType = "bar" | "line" | "pie";
export function SalesChartPanel({ year, data, threshold }: { year: SalesYear; data: MonthlySales[]; threshold: number }) {
  const [chartType, setChartType] = useState<ChartType>("bar");
  const filtered = useMemo(() => threshold > 0 ? data.filter((item) => item.sales >= threshold) : data, [data, threshold]);
  return <section className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200"><div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-lg font-bold">{year} Monthly Sales</h2><p className="text-sm text-slate-500">{filtered.length} months meet the selected threshold.</p></div><div className="flex gap-2">{(["bar","line","pie"] as ChartType[]).map((type) => <Button key={type} active={chartType === type} onClick={() => setChartType(type)}>{type[0].toUpperCase() + type.slice(1)}</Button>)}</div></div>{filtered.length ? (chartType === "bar" ? <BarSalesChart data={filtered} /> : chartType === "line" ? <LineSalesChart data={filtered} /> : <PieSalesChart data={filtered} />) : <div className="flex h-[330px] items-center justify-center text-sm text-slate-500">No months match this threshold.</div>}</section>;
}
