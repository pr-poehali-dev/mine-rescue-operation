import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const MiningPanel = () => {
  const [mining, setMining] = useState(false);
  const [depth, setDepth] = useState(15);

  const startMining = () => {
    setMining(true);
    setTimeout(() => {
      setMining(false);
      setDepth((prev) => prev + 1);
    }, 3000);
  };

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-orange-400 flex items-center gap-2">
          ⛏️ Шахта
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-slate-300">
          <div>
            Глубина: <span className="text-yellow-400">{depth}м</span>
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Чем глубже, тем ценнее руда
          </div>
        </div>

        <div className="bg-slate-900 p-3 rounded border border-slate-600">
          <div className="text-sm text-slate-400 mb-2">Последняя находка:</div>
          <div className="text-green-400">🪙 Золотая жила найдена!</div>
        </div>

        <Button
          onClick={startMining}
          disabled={mining}
          className={`w-full ${mining ? "bg-orange-600" : "bg-orange-500 hover:bg-orange-600"}`}
        >
          {mining ? "⚡ Копаем..." : "🔨 Начать копать"}
        </Button>

        {mining && (
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div
              className="bg-orange-500 h-2 rounded-full animate-pulse"
              style={{ width: "45%" }}
            ></div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MiningPanel;
