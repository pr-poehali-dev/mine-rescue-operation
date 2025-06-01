import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const DefenseSystem = () => {
  const bots = [
    { id: 1, name: "Бот-1", health: 85, status: "Патрулирует" },
    { id: 2, name: "Бот-2", health: 92, status: "В бою" },
    { id: 3, name: "Бот-3", health: 45, status: "Повреждён" },
  ];

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-blue-400 flex items-center gap-2">
          🤖 Система защиты
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {bots.map((bot) => (
            <div
              key={bot.id}
              className="bg-slate-900 p-3 rounded border border-slate-600"
            >
              <div className="flex justify-between items-center">
                <span className="text-slate-300">{bot.name}</span>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    bot.status === "В бою"
                      ? "bg-red-600 text-white"
                      : bot.status === "Повреждён"
                        ? "bg-yellow-600 text-white"
                        : "bg-green-600 text-white"
                  }`}
                >
                  {bot.status}
                </span>
              </div>
              <div className="mt-2">
                <div className="text-xs text-slate-400 mb-1">
                  Здоровье: {bot.health}%
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${bot.health > 70 ? "bg-green-500" : bot.health > 30 ? "bg-yellow-500" : "bg-red-500"}`}
                    style={{ width: `${bot.health}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-900 border border-red-700 p-3 rounded">
          <div className="text-red-400 text-sm">⚠️ Угроза зомби: СРЕДНЯЯ</div>
          <div className="text-xs text-red-300 mt-1">
            Обнаружено 12 зомби в радиусе 500м
          </div>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          🔧 Починить ботов (стоит 15 железа)
        </Button>
      </CardContent>
    </Card>
  );
};

export default DefenseSystem;
