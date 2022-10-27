import { createDataFirstTable, createDataLastTable } from "../util/helper";

export const rows = [
  createDataFirstTable(0.4, 3.7, 0.53, 6.1, 17),
  createDataFirstTable(0.8, 5.6, 1.45, 4.7, 25.5),
  createDataFirstTable(1.0, 6.1, 2, 3.92, 27.2),
  createDataFirstTable(1.2, 6.24, 2.34, 3.5, 27.6),
  createDataFirstTable(1.4, 6.35, 2.76, 3.1, 27.8),
  createDataFirstTable(1.6, 6.38, 3.15, 2.8, 27.5),
  createDataFirstTable(1.8, 6.35, 3.5, 2.55, 27),
  createDataFirstTable(2.2, 6.22, 4.22, 2.03, 25.5),
  createDataFirstTable(2.4, 6.14, 4.53, 2.05, 24.7),
  createDataFirstTable(2.8, 8.87, 5.11, 2.06, 23),
  createDataFirstTable(1.5, 6.65, 3.1, 3.05, 29),
];

export const rowsSecondTable = rows.map((item) =>  createDataLastTable(item.I, item.UK, item.UC));