import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Barracks = () => {
  const soldiers = [
    { name: "Снайпер", cost: "50 железа + 20 оружия", strength: 95 },
    { name: "Гренадёр", cost: "40 железа + 25 оружия", strength: 88 },
    { name: "Медик", cost: "30 железа + 10 оружия", strength: 70 },
  ];

  const currentForces = [
    { name: "Капитан Волков", rank: "Командир", strength: 98 },
    { name: "Сержант Медведев", rank: "Снайпер", strength: 92 },
  ];

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-green-400 flex items-center gap-2">
          🏰 Казарма
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="text-sm text-slate-400 mb-2">Действующие силы:</div>
          {currentForces.map((soldier, index) => (
            <div
              key={index}
              className="bg-green-900 border border-green-700 p-2 rounded mb-2"
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-green-300 font-medium">
                    {soldier.name}
                  </div>
                  <div className="text-xs text-green-400">{soldier.rank}</div>
                </div>
                <div className="text-green-300">💪 {soldier.strength}%</div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="text-sm text-slate-400 mb-2">Доступен найм:</div>
          {soldiers.map((soldier, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-600 p-3 rounded mb-2"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-300 font-medium">
                  {soldier.name}
                </span>
                <span className="text-yellow-400">💪 {soldier.strength}%</span>
              </div>
              <div className="text-xs text-slate-400 mb-2">{soldier.cost}</div>
              <Button
                size="sm"
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Нанять
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Barracks;
