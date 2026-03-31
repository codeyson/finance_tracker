import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Header } from "../components/Header";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Slider } from "../components/ui/slider";

export function BudgetSetup() {
  const [budgets, setBudgets] = useState({
    "Food & Dining": 1200,
    Transportation: 800,
    Shopping: 1000,
    "Bills & Utilities": 1500,
    Entertainment: 300,
    Healthcare: 200,
  });

  const totalBudget = Object.values(budgets).reduce(
    (sum, val) => sum + val,
    0,
  );

  const handleBudgetChange = (
    category: string,
    value: number,
  ) => {
    setBudgets({ ...budgets, [category]: value });
  };

  const handleSave = () => {
    console.log("Budgets saved:", budgets);
    alert("Budget settings saved!");
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-md mx-auto p-6">
        <Header
          title="Budget Setup"
          subtitle="Set monthly limits for each category"
        />

        {/* Total Budget Display */}
        <div className="border-2 border-neutral-900 p-6 mb-6">
          <p className="text-sm text-neutral-600 mb-1">
            Total Monthly Budget
          </p>
          <p className="text-4xl font-bold">${totalBudget}</p>
        </div>

        {/* Quick Presets */}
        <div className="mb-6">
          <p className="text-sm font-medium mb-3">
            Quick Presets
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() =>
                setBudgets({
                  "Food & Dining": 800,
                  Transportation: 500,
                  Shopping: 600,
                  "Bills & Utilities": 1000,
                  Entertainment: 200,
                  Healthcare: 150,
                })
              }
              className="p-3 border-2 border-neutral-300 text-sm hover:border-neutral-900"
            >
              Conservative
              <br />
              <span className="text-xs text-neutral-600">
                $3,250/mo
              </span>
            </button>
            <button
              onClick={() =>
                setBudgets({
                  "Food & Dining": 1500,
                  Transportation: 1000,
                  Shopping: 1500,
                  "Bills & Utilities": 1500,
                  Entertainment: 500,
                  Healthcare: 300,
                })
              }
              className="p-3 border-2 border-neutral-300 text-sm hover:border-neutral-900"
            >
              Flexible
              <br />
              <span className="text-xs text-neutral-600">
                $6,300/mo
              </span>
            </button>
          </div>
        </div>

        {/* Category Budgets */}
        <div className="space-y-6 mb-6">
          {Object.entries(budgets).map(([category, amount]) => (
            <div
              key={category}
              className="border border-neutral-300 p-4"
            >
              <div className="flex justify-between items-center mb-3">
                <Label className="text-sm font-medium">
                  {category}
                </Label>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold">
                    ${amount}
                  </span>
                  <span className="text-xs text-neutral-600">
                    /month
                  </span>
                </div>
              </div>
              <Slider
                value={[amount]}
                onValueChange={([value]) =>
                  handleBudgetChange(category, value)
                }
                max={2000}
                step={50}
                className="mb-2"
              />
              <div className="flex justify-between text-xs text-neutral-500">
                <span>$0</span>
                <span>$2000</span>
              </div>
            </div>
          ))}
        </div>

        {/* Save Button */}
        <Button
          onClick={handleSave}
          className="w-full bg-neutral-900 text-white h-12 text-base hover:bg-neutral-800"
        >
          Save Budget Settings
        </Button>
      </div>
      <Navigation />
    </div>
  );
}