"use client";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { MonthlySales } from "@/types/sales";
const COLORS = ["#4f46e5", "#7c3aed", "#0891b2", "#059669", "#ca8a04", "#ea580c", "#dc2626", "#db2777", "#2563eb", "#65a30d", "#9333ea", "#0f766e"];
export function PieSalesChart({ data }: { data: MonthlySales[] }) { return <ResponsiveContainer width="100%" height={330}><PieChart><Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, "Sales"]} /><Pie data={data} dataKey="sales" nameKey="month" cx="50%" cy="50%" outerRadius={120} label>{data.map((entry, index) => <Cell key={entry.month} fill={COLORS[index % COLORS.length]} />)}</Pie></PieChart></ResponsiveContainer>; }
