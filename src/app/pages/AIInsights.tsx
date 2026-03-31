import { Navigation } from "../components/Navigation";
import { Header } from "../components/Header";
import { TrendingUp, TrendingDown, AlertCircle, Lightbulb } from "lucide-react";
import { Progress } from "../components/ui/progress";

export function AIInsights() {

  const insights = [
    {
      type: "warning",
      title: "High Dining Expenses",
      description:
        "Your food spending is 30% higher than last month. Consider meal planning to save.",
    },
    {
      type: "success",
      title: "Great Transportation Savings",
      description:
        "You've saved $150 on transportation by using public transit more often.",
    },
    {
      type: "tip",
      title: "Budget Optimization Tip",
      description:
        "Reallocating $200 from Shopping to Emergency Fund could improve financial health.",
    },
  ];

  const spendingPattern = {
    weekday: 45,
    weekend: 55,
    morning: 20,
    afternoon: 35,
    evening: 45,
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-md mx-auto p-6">
        <Header
          title="AI Insights"
          subtitle="Predictions powered by spending patterns"
        />

        

        {/* Insights & Recommendations */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3">Recommendations</h2>
          <div className="space-y-3">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="border border-neutral-300 p-4 flex gap-3"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-neutral-200 flex items-center justify-center">
                  {insight.type === "warning" && (
                    <AlertCircle size={20} className="text-neutral-700" />
                  )}
                  {insight.type === "success" && (
                    <TrendingDown size={20} className="text-neutral-700" />
                  )}
                  {insight.type === "tip" && (
                    <Lightbulb size={20} className="text-neutral-700" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium mb-1">{insight.title}</p>
                  <p className="text-xs text-neutral-600">{insight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spending Patterns */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3">Spending Patterns</h2>
          <div className="border border-neutral-300 p-4">
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Weekday Spending</span>
                  <span className="font-medium">{spendingPattern.weekday}%</span>
                </div>
                <div className="h-2 bg-neutral-200">
                  <div
                    className="h-full bg-neutral-900"
                    style={{ width: `${spendingPattern.weekday}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Weekend Spending</span>
                  <span className="font-medium">{spendingPattern.weekend}%</span>
                </div>
                <div className="h-2 bg-neutral-200">
                  <div
                    className="h-full bg-neutral-900"
                    style={{ width: `${spendingPattern.weekend}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border border-neutral-300 p-4 mt-3">
            <p className="text-sm font-medium mb-3">Time of Day Analysis</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs">Morning (6AM-12PM)</span>
                <span className="text-xs font-medium">{spendingPattern.morning}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs">Afternoon (12PM-6PM)</span>
                <span className="text-xs font-medium">{spendingPattern.afternoon}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs">Evening (6PM-12AM)</span>
                <span className="text-xs font-medium">{spendingPattern.evening}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Model Info */}
        <div className="border-2 border-neutral-300 p-4 bg-neutral-50">
          <p className="text-xs text-neutral-600 mb-2">
            <strong>About the Inference Model</strong>
          </p>
          <p className="text-xs text-neutral-600">
            Predictions are generated using historical spending patterns, seasonal
            trends, and category-specific behaviors. The model analyzes your last 3
            months of data to provide personalized insights.
          </p>
        </div>
      </div>
      <Navigation />
    </div>
  );
}
