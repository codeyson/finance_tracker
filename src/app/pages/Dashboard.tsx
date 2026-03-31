import { Navigation } from "../components/Navigation";
import { Header } from "../components/Header";
import { Progress } from "../components/ui/progress";
import { ArrowUpRight } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function Dashboard() {
  const totalBudget = 5000;
  const totalExpenses = 3250;
  const remaining = totalBudget - totalExpenses;
  const percentageUsed = (totalExpenses / totalBudget) * 100;

  const categories = [
    { name: "Food & Dining", budget: 1200, spent: 850 },
    { name: "Transportation", budget: 800, spent: 650 },
    { name: "Shopping", budget: 1000, spent: 750 },
    { name: "Bills & Utilities", budget: 1500, spent: 1000 },
  ];

  const recentTransactions = [
    {
      name: "Grocery Store",
      amount: 85,
      category: "Food & Dining",
      date: "Feb 16",
    },
    {
      name: "Gas Station",
      amount: 45,
      category: "Transportation",
      date: "Feb 15",
    },
    {
      name: "Online Purchase",
      amount: 120,
      category: "Shopping",
      date: "Feb 14",
    },
  ];

  const pieData = categories.map((cat) => ({
    name: cat.name,
    value: cat.spent,
  }));

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-md mx-auto p-6">
        <Header
          title="Budget Overview"
          subtitle="February 2026"
        />

        {/* Total Budget Card */}
        <div className="border-2 border-neutral-900 p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-neutral-600 mb-1">
                Total Budget
              </p>
              <p className="text-3xl font-bold text-black">
                ${totalBudget}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-neutral-600 mb-1">
                Remaining
              </p>
              <p className="text-2xl font-bold text-neutral-800">
                ${remaining}
              </p>
            </div>
          </div>
          <Progress
            value={percentageUsed}
            className="h-3 mb-2"
          />
          <p className="text-xs text-neutral-600">
            {percentageUsed.toFixed(0)}% used • ${totalExpenses}{" "}
            spent
          </p>
        </div>

        {/* Spending by Category */}
        <div className="mb-6">
          <div className="bg-neutral-100 rounded-2xl p-5 flex items-center gap-6">
            
            {/* Donut Chart */}
            <div className="w-32 h-32 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    innerRadius={40}
                    outerRadius={55}
                    paddingAngle={3}
                  >
                    {pieData.map((entry, index) => {
                      const COLORS = ["#ef4444", "#3b82f6", "#8b5cf6", "#f59e0b"];
                      return <Cell key={index} fill={COLORS[index % COLORS.length]} />;
                    })}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
        
              {/* Center Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm font-bold">
                  {percentageUsed.toFixed(0)}%
                </p>
              </div>
            </div>
        
            {/* Legend */}
            <div className="flex-1">
              <h2 className="text-sm font-bold mb-2">Spending by Category</h2>
        
              <div className="space-y-2">
                {categories.map((cat, index) => {
                  const COLORS = ["#ef4444", "#3b82f6", "#8b5cf6", "#f59e0b"];
                  return (
                    <div key={index} className="flex justify-between items-center">
                      
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <p className="text-sm text-neutral-700">{cat.name}</p>
                      </div>
        
                      <p className="text-sm font-medium">${cat.spent}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3">
            Recent Transactions
          </h2>
          <div className="space-y-2">
            {recentTransactions.map((transaction, index) => (
              <div
                key={index}
                className="flex justify-between items-center border border-neutral-300 p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-200 flex items-center justify-center">
                    <ArrowUpRight
                      size={20}
                      className="text-neutral-700"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      {transaction.name}
                    </p>
                    <p className="text-xs text-neutral-600">
                      {transaction.category}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">
                    -${transaction.amount}
                  </p>
                  <p className="text-xs text-neutral-600">
                    {transaction.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
}