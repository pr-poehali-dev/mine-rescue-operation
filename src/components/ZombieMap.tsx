import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ZombieMap = () => {
  const zombies = [
    { id: 1, x: 15, y: 20, threat: "high" },
    { id: 2, x: 80, y: 15, threat: "medium" },
    { id: 3, x: 25, y: 75, threat: "low" },
    { id: 4, x: 70, y: 80, threat: "high" },
    { id: 5, x: 45, y: 10, threat: "medium" },
    { id: 6, x: 90, y: 60, threat: "low" },
    { id: 7, x: 10, y: 55, threat: "medium" },
    { id: 8, x: 85, y: 35, threat: "high" },
  ];

  const bots = [
    { id: 1, x: 40, y: 30, status: "patrol" },
    { id: 2, x: 60, y: 70, status: "combat" },
    { id: 3, x: 30, y: 60, status: "damaged" },
  ];

  const getThreatColor = (threat: string) => {
    switch (threat) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getBotColor = (status: string) => {
    switch (status) {
      case "combat":
        return "bg-red-400";
      case "damaged":
        return "bg-yellow-400";
      case "patrol":
        return "bg-blue-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-green-400 flex items-center gap-2">
          🗺️ Тактическая карта
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className="relative bg-slate-900 border border-slate-600 rounded-lg"
          style={{ height: "300px" }}
        >
          {/* Сетка карты */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i}>
                <div
                  className="absolute border-slate-600 border-l"
                  style={{ left: `${i * 10}%`, height: "100%" }}
                />
                <div
                  className="absolute border-slate-600 border-t"
                  style={{ top: `${i * 10}%`, width: "100%" }}
                />
              </div>
            ))}
          </div>

          {/* База (центр) */}
          <div
            className="absolute w-6 h-6 bg-orange-500 rounded-full border-2 border-orange-300 flex items-center justify-center text-xs font-bold"
            style={{
              left: "47%",
              top: "47%",
              transform: "translate(-50%, -50%)",
            }}
          >
            🏠
          </div>

          {/* Зомби */}
          {zombies.map((zombie) => (
            <div
              key={zombie.id}
              className={`absolute w-3 h-3 ${getThreatColor(zombie.threat)} rounded-full border border-red-300 animate-pulse`}
              style={{
                left: `${zombie.x}%`,
                top: `${zombie.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              title={`Зомби (угроза: ${zombie.threat})`}
            />
          ))}

          {/* Боты-защитники */}
          {bots.map((bot) => (
            <div
              key={bot.id}
              className={`absolute w-4 h-4 ${getBotColor(bot.status)} rounded-sm border border-blue-300`}
              style={{
                left: `${bot.x}%`,
                top: `${bot.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              title={`Бот-${bot.id} (${bot.status})`}
            />
          ))}

          {/* Радиус обнаружения */}
          <div
            className="absolute border-2 border-blue-500 border-dashed rounded-full opacity-30"
            style={{
              left: "50%",
              top: "50%",
              width: "60%",
              height: "60%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        {/* Легенда */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="space-y-2">
            <div className="text-slate-400 font-semibold">Зомби:</div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-red-400">Высокая угроза</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-yellow-400">Средняя угроза</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-400">Низкая угроза</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-slate-400 font-semibold">Защита:</div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <span className="text-orange-400">База</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-400 rounded-sm"></div>
              <span className="text-blue-400">Боты</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-1 border border-blue-500 border-dashed opacity-50"></div>
              <span className="text-blue-400">Радиус</span>
            </div>
          </div>
        </div>

        <div className="bg-yellow-900 border border-yellow-700 p-3 rounded">
          <div className="text-yellow-400 text-sm">📡 Сканирование...</div>
          <div className="text-xs text-yellow-300 mt-1">
            Обнаружено: {zombies.length} зомби в радиусе 500м
          </div>
        </div>

        <Button className="w-full bg-green-600 hover:bg-green-700">
          📍 Отправить патруль в зону угрозы
        </Button>
      </CardContent>
    </Card>
  );
};

export default ZombieMap;
