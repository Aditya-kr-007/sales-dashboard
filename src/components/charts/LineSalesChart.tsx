"use client";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { MonthlySales } from "@/types/sales";
export function LineSalesChart({ data }: { data: MonthlySales[] }) { return <ResponsiveContainer width="100%" height={330}><LineChart data={data}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis tickFormatter={(v) => `₹${Math.round(v / 1000)}k`} /><Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, "Sales"]} /><Line type="monotone" dataKey="sales" stroke="#4f46e5" strokeWidth={3} dot={{ r: 4 }} /></LineChart></ResponsiveContainer>; }
