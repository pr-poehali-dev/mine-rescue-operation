import { Card } from "@/components/ui/card";

interface Resource {
  name: string;
  amount: number;
  icon: string;
  color: string;
}

const ResourceBar = () => {
  const resources: Resource[] = [
    { name: "Железо", amount: 124, icon: "⛏️", color: "text-gray-400" },
    { name: "Золото", amount: 23, icon: "🪙", color: "text-yellow-500" },
    { name: "Энергия", amount: 78, icon: "⚡", color: "text-blue-400" },
    { name: "Оружие", amount: 5, icon: "🔫", color: "text-red-400" },
  ];

  return (
    <Card className="p-4 bg-slate-800 border-slate-700">
      <div className="grid grid-cols-4 gap-4">
        {resources.map((resource) => (
          <div key={resource.name} className="text-center">
            <div className="text-2xl mb-1">{resource.icon}</div>
            <div className={`text-lg font-bold ${resource.color}`}>
              {resource.amount}
            </div>
            <div className="text-xs text-slate-400">{resource.name}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ResourceBar;
