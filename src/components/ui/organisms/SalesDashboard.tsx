"use client";
import { useMemo, useState } from "react";
import { monthlySales, yearlySales } from "@/data/sales";
import type { SalesYear } from "@/types/sales";
import { StatCard } from "@/components/ui/atoms/StatCard";
import { YearFilter } from "@/components/ui/molecules/YearFilter";
import { ThresholdFilter } from "@/components/ui/molecules/ThresholdFilter";
import { SalesChartPanel } from "@/components/ui/organisms/SalesChartPanel";

const money = (n: number) => `₹${n.toLocaleString("en-IN")}`;
export function SalesDashboard() {
  const [year, setYear] = useState<SalesYear>(2024);
  const [threshold, setThreshold] = useState(0);
  const current = useMemo(() => yearlySales.find((item) => item.year === year)?.sales ?? 0, [year]);
  const previous = yearlySales.find((item) => item.year === year - 1);
  const growth = previous ? (((current - previous.sales) / previous.sales) * 100).toFixed(1) : "—";
  return <main className="min-h-screen bg-slate-50 p-4 md:p-8"><div className="mx-auto max-w-7xl space-y-6"><header><p className="text-sm font-semibold text-indigo-600">Sales Analytics</p><h1 className="mt-1 text-3xl font-bold tracking-tight">Retail Sales Dashboard</h1><p className="mt-2 text-slate-600">Compare yearly sales and explore monthly performance.</p></header><div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200"><div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div><p className="mb-2 text-sm font-medium text-slate-700">Select year</p><YearFilter year={year} onChange={setYear} /></div><ThresholdFilter value={threshold} onChange={setThreshold} /></div></div><div className="grid gap-4 md:grid-cols-3"><StatCard label={`${year} sales`} value={money(current)} helper="Mocked Kaggle-style retail data" /><StatCard label="Year-over-year growth" value={`${growth}%`} helper={year === 2022 ? "No previous year in this dashboard" : `Compared with ${year - 1}`} /><StatCard label="Average monthly sales" value={money(Math.round(current / 12))} helper="Based on selected year" /></div><SalesChartPanel year={year} data={monthlySales[year]} threshold={threshold} /><section className="rounded-xl bg-white p-5 text-sm text-slate-600 shadow-sm ring-1 ring-slate-200"><strong className="text-slate-900">Data note:</strong> The dashboard uses mocked monthly values shaped like a retail sales dataset. A Kaggle retail-sales dataset is referenced in the README; the app is intentionally kept local so it runs without API credentials.</section></div></main>;
}
