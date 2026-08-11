"use client";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { MonthlySales } from "@/types/sales";
export function BarSalesChart({ data }: { data: MonthlySales[] }) { return <ResponsiveContainer width="100%" height={330}><BarChart data={data}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis tickFormatter={(v) => `₹${Math.round(v / 1000)}k`} /><Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, "Sales"]} /><Bar dataKey="sales" fill="#4f46e5" radius={[6,6,0,0]} /></BarChart></ResponsiveContainer>; }
