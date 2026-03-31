import { Link, useLocation } from "react-router";
import { Home, PlusCircle, List, Settings, TrendingUp } from "lucide-react";

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Dashboard" },
    { path: "/add-expense", icon: PlusCircle, label: "Add" },
    { path: "/expenses", icon: List, label: "Expenses" },
    { path: "/budget", icon: Settings, label: "Budget" },
    { path: "/insights", icon: TrendingUp, label: "Insights" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-neutral-100 border-t border-neutral-300">
      <div className="max-w-md mx-auto flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center gap-1 px-4 py-2 ${
                isActive ? "text-black" : "text-neutral-500"
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
