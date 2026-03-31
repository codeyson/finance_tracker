import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Header } from "../components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function ExpensesList() {
  const expenses = [
    {
      id: 1,
      description: "Grocery Store",
      amount: 85,
      category: "Food & Dining",
      date: "2026-02-16",
    },
    {
      id: 2,
      description: "Gas Station",
      amount: 45,
      category: "Transportation",
      date: "2026-02-15",
    },
    {
      id: 3,
      description: "Online Purchase",
      amount: 120,
      category: "Shopping",
      date: "2026-02-14",
    },
    {
      id: 4,
      description: "Electric Bill",
      amount: 150,
      category: "Bills & Utilities",
      date: "2026-02-13",
    },
    {
      id: 5,
      description: "Restaurant Dinner",
      amount: 65,
      category: "Food & Dining",
      date: "2026-02-12",
    },
    {
      id: 6,
      description: "Movie Tickets",
      amount: 30,
      category: "Entertainment",
      date: "2026-02-11",
    },
    {
      id: 7,
      description: "Uber Ride",
      amount: 25,
      category: "Transportation",
      date: "2026-02-10",
    },
    {
      id: 8,
      description: "Pharmacy",
      amount: 40,
      category: "Healthcare",
      date: "2026-02-09",
    },
  ];

  const [filter, setFilter] = useState<string>("all");

  const filteredExpenses =
    filter === "all"
      ? expenses
      : expenses.filter((expense) => expense.category === filter);

  const totalExpenses = filteredExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-md mx-auto p-6">
        <Header title="All Expenses" subtitle={`${filteredExpenses.length} transactions`} />

        {/* Total */}
        <div className="border-2 border-neutral-900 p-4 mb-6">
          <p className="text-sm text-neutral-600 mb-1">
            {filter === "all" ? "Total Expenses" : `Total in ${filter}`}
          </p>
          <p className="text-3xl font-bold">${totalExpenses.toFixed(2)}</p>
        </div>

        {/* Filter Tabs */}
        <Tabs defaultValue="all" className="mb-4" onValueChange={setFilter}>
          <TabsList className="w-full bg-neutral-100 grid grid-cols-4 h-auto">
            <TabsTrigger value="all" className="text-xs py-2 data-[state=active]:bg-neutral-900 data-[state=active]:text-white">
              All
            </TabsTrigger>
            <TabsTrigger value="Food & Dining" className="text-xs py-2 data-[state=active]:bg-neutral-900 data-[state=active]:text-white">
              Food
            </TabsTrigger>
            <TabsTrigger value="Transportation" className="text-xs py-2 data-[state=active]:bg-neutral-900 data-[state=active]:text-white">
              Transit
            </TabsTrigger>
            <TabsTrigger value="Shopping" className="text-xs py-2 data-[state=active]:bg-neutral-900 data-[state=active]:text-white">
              Shop
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Expenses List */}
        <div className="space-y-2">
          {filteredExpenses.map((expense) => (
            <div
              key={expense.id}
              className="border border-neutral-300 p-4 hover:border-neutral-900 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium">{expense.description}</p>
                  <p className="text-xs text-neutral-600">{expense.category}</p>
                </div>
                <p className="text-lg font-bold">-${expense.amount}</p>
              </div>
              <p className="text-xs text-neutral-500">
                {new Date(expense.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Navigation />
    </div>
  );
}
