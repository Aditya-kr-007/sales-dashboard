export type SalesYear = 2022 | 2023 | 2024;

export type MonthlySales = {
  month: string;
  sales: number;
};

export type YearSales = {
  year: SalesYear;
  sales: number;
};
