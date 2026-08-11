import type { MonthlySales, YearSales } from "@/types/sales";

export const yearlySales: YearSales[] = [
  { year: 2022, sales: 842500 },
  { year: 2023, sales: 976300 },
  { year: 2024, sales: 1148200 }
];

export const monthlySales: Record<number, MonthlySales[]> = {
  2022: [
    { month: "Jan", sales: 52000 }, { month: "Feb", sales: 56000 }, { month: "Mar", sales: 61000 },
    { month: "Apr", sales: 59000 }, { month: "May", sales: 65000 }, { month: "Jun", sales: 67000 },
    { month: "Jul", sales: 71000 }, { month: "Aug", sales: 68000 }, { month: "Sep", sales: 70000 },
    { month: "Oct", sales: 76000 }, { month: "Nov", sales: 82000 }, { month: "Dec", sales: 85000 }
  ],
  2023: [
    { month: "Jan", sales: 61000 }, { month: "Feb", sales: 63000 }, { month: "Mar", sales: 70000 },
    { month: "Apr", sales: 68000 }, { month: "May", sales: 74000 }, { month: "Jun", sales: 76000 },
    { month: "Jul", sales: 79000 }, { month: "Aug", sales: 81000 }, { month: "Sep", sales: 77000 },
    { month: "Oct", sales: 85000 }, { month: "Nov", sales: 92000 }, { month: "Dec", sales: 100300 }
  ],
  2024: [
    { month: "Jan", sales: 72000 }, { month: "Feb", sales: 75000 }, { month: "Mar", sales: 79000 },
    { month: "Apr", sales: 82000 }, { month: "May", sales: 86000 }, { month: "Jun", sales: 90000 },
    { month: "Jul", sales: 93000 }, { month: "Aug", sales: 95000 }, { month: "Sep", sales: 97000 },
    { month: "Oct", sales: 101000 }, { month: "Nov", sales: 108000 }, { month: "Dec", sales: 110200 }
  ]
};
