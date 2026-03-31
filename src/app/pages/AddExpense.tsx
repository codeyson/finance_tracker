import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Header } from "../components/Header";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useNavigate } from "react-router";


export function AddExpense() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    amount: "",
    category: "Food & Dining",
    description: "",
    date: new Date().toISOString().split("T")[0],
  });

  const categories = [
    "Food & Dining",
    "Transportation",
    "Shopping",
    "Bills & Utilities",
    "Entertainment",
    "Healthcare",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save the expense
    console.log("Expense added:", formData);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-md mx-auto p-6">
        <Header title="Add Expense" subtitle="Record a new transaction" />

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Amount Input */}
          <div className="border-2 border-neutral-900 p-6">
            <Label htmlFor="amount" className="text-sm text-neutral-600 mb-2 block">
              Amount
            </Label>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">$</span>
              <Input
                id="amount"
                type="number"
                step="0.01"
                placeholder="0.00"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="text-4xl font-bold border-0 p-0 h-auto focus-visible:ring-0"
                required
              />
            </div>
          </div>

          {/* Category Selection */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Category</Label>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFormData({ ...formData, category })}
                  className={`p-3 border-2 text-sm ${
                    formData.category === category
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-300 bg-white text-neutral-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description" className="text-sm font-medium mb-2 block">
              Description
            </Label>
            <Input
              id="description"
              placeholder="e.g., Lunch at cafe"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="border-2 border-neutral-300"
            />
          </div>

          {/* Date */}
          <div>
            <Label htmlFor="date" className="text-sm font-medium mb-2 block">
              Date
            </Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="border-2 border-neutral-300"
              required
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-neutral-900 text-white h-12 text-base hover:bg-neutral-800"
          >
            Add Expense
          </Button>
        </form>
      </div>
      <Navigation />
    </div>
  );
}
