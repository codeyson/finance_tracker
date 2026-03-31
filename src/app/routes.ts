import { createBrowserRouter } from "react-router";
import { Dashboard } from "./pages/Dashboard";
import { AddExpense } from "./pages/AddExpense";
import { ExpensesList } from "./pages/ExpensesList";
import { BudgetSetup } from "./pages/BudgetSetup";
import { AIInsights } from "./pages/AIInsights";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
  },
  {
    path: "/add-expense",
    Component: AddExpense,
  },
  {
    path: "/expenses",
    Component: ExpensesList,
  },
  {
    path: "/budget",
    Component: BudgetSetup,
  },
  {
    path: "/insights",
    Component: AIInsights,
  },
]);