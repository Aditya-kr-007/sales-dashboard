# Sales Analytics Dashboard — Next.js 15

A simple retail sales dashboard built with **Next.js 15, TypeScript, Tailwind CSS and Recharts**. It follows an **Atomic Design** component structure and compares sales for 2022, 2023 and 2024.

LIVE DEMO:- https://sales-dashboard-1aykycsvn-aditya-1cb6.vercel.app/

## Features

- Next.js 15 App Router + TypeScript
- Tailwind CSS styling
- Atomic Design structure: atoms → molecules → organisms → page
- Year selector for 2022, 2023 and 2024
- Monthly sales chart
- Bar, Line and Pie chart switching with Recharts
- Custom sales-threshold input
- Responsive dashboard layout
- Mock retail data that can later be replaced by an API

## Data source

The project is inspired by the structure of Kaggle retail-sales datasets. For example, the [Retail Sales Data dataset](https://www.kaggle.com/datasets/noir1112/retail-sales-data) contains transaction date, price, quantity and other retail fields.

The included 2022–2024 values are **mock/aggregated values**, not copied transaction rows. This keeps the demo lightweight and avoids requiring Kaggle credentials at runtime.

## Project structure

```text
src/
├── app/
│   ├── dashboard/page.tsx       # Dashboard page
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── charts/
│   │   ├── BarSalesChart.tsx
│   │   ├── LineSalesChart.tsx
│   │   └── PieSalesChart.tsx
│   └── ui/
│       ├── atoms/
│       │   ├── Button.tsx
│       │   ├── Input.tsx
│       │   └── StatCard.tsx
│       ├── molecules/
│       │   ├── ThresholdFilter.tsx
│       │   └── YearFilter.tsx
│       └── organisms/
│           ├── SalesChartPanel.tsx
│           └── SalesDashboard.tsx
├── data/sales.ts
└── types/sales.ts
```

## Atomic Design used

- **Atoms:** Button, Input and StatCard are small reusable UI building blocks.
- **Molecules:** YearFilter and ThresholdFilter combine atoms for a single purpose.
- **Organisms:** SalesDashboard and SalesChartPanel combine multiple components into complete dashboard sections.
- **Page:** `/dashboard` composes the dashboard organism.

## Future improvements

1. **API integration:** replace `src/data/sales.ts` with a server/API data source.
2. **Real Kaggle data:** download a permitted Kaggle dataset, transform transactions into yearly/monthly aggregates, and store or serve the processed data.
3. **More filters:** category, region, date range and product filters.
4. **Authentication:** protect the dashboard for internal users.
5. **Export:** add CSV/PDF export for dashboard results.
