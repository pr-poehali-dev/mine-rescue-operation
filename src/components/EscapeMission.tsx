import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const EscapeMission = () => {
  const progress = 34;
  const requirements = [
    {
      task: "Накопить 500 железа",
      current: 124,
      target: 500,
      completed: false,
    },
    { task: "Построить 10 ботов", current: 3, target: 10, completed: false },
    { task: "Нанять 5 военных", current: 2, target: 5, completed: false },
    { task: "Найти карту путей", current: 0, target: 1, completed: false },
  ];

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-purple-400 flex items-center gap-2">
          🎯 Миссия: Побег в Россию
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-400">Прогресс миссии</span>
            <span className="text-purple-400">{progress}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3">
            <div
              className="bg-purple-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm text-slate-400 mb-2">
            Требования для побега:
          </div>
          {requirements.map((req, index) => (
            <div
              key={index}
              className={`p-2 rounded border ${
                req.completed
                  ? "bg-green-900 border-green-700"
                  : "bg-slate-900 border-slate-600"
              }`}
            >
              <div className="flex justify-between items-center">
                <span
                  className={
                    req.completed ? "text-green-300" : "text-slate-300"
                  }
                >
                  {req.completed ? "✅" : "⏳"} {req.task}
                </span>
                <span
                  className={
                    req.completed ? "text-green-400" : "text-yellow-400"
                  }
                >
                  {req.current}/{req.target}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-purple-900 border border-purple-700 p-3 rounded">
          <div className="text-purple-400 text-sm font-medium">
            📍 Текущее положение
          </div>
          <div className="text-xs text-purple-300 mt-1">
            Шахта №47, Минская область
          </div>
          <div className="text-xs text-slate-400 mt-1">До границы: ~180 км</div>
        </div>

        <Button disabled className="w-full bg-gray-600 cursor-not-allowed">
          🚁 Начать побег (требования не выполнены)
        </Button>
      </CardContent>
    </Card>
  );
};

export default EscapeMission;
