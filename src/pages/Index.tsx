import ResourceBar from "@/components/ResourceBar";
import MiningPanel from "@/components/MiningPanel";
import DefenseSystem from "@/components/DefenseSystem";
import Barracks from "@/components/Barracks";
import EscapeMission from "@/components/EscapeMission";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold text-orange-400 mb-2">
            ⛏️ Операция "Рассвет"
          </h1>
          <p className="text-slate-400">Майнинг-симулятор выживания</p>
        </header>

        <div className="mb-6">
          <ResourceBar />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="space-y-6">
            <MiningPanel />
            <DefenseSystem />
          </div>

          <div className="space-y-6">
            <Barracks />
          </div>

          <div className="lg:col-span-2 xl:col-span-1">
            <EscapeMission />
          </div>
        </div>

        <footer className="text-center mt-8 text-slate-500 text-sm">
          <p>🌟 Выживи, накопи ресурсы, сбеги в безопасное место</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
