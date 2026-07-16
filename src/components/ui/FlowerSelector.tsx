"use client";

interface Flor {
  id: string;
  nombre: string;
  color: string;
  emoji: string;
}

interface FlowerSelectorProps {
  flores: Flor[];
  seleccion: Record<string, number>;
  onCambiar: (id: string, cantidad: number) => void;
}

export default function FlowerSelector({
  flores,
  seleccion,
  onCambiar,
}: FlowerSelectorProps) {
  return (
    <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
      {flores.map((flor) => {
        const cant = seleccion[flor.id] || 0;
        return (
          <div
            key={flor.id}
            className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
              cant > 0
                ? "bg-verde-oscuro/10 border border-verde-oscuro/20"
                : "bg-white border border-gray-100 hover:border-verde-oscuro/20"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{flor.emoji}</span>
              <span className="text-verde-noche text-sm font-medium">
                {flor.nombre}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onCambiar(flor.id, Math.max(0, cant - 1))}
                className="w-8 h-8 rounded-full bg-crema text-verde-oscuro flex items-center justify-center text-lg font-bold cursor-pointer hover:bg-verde-oscuro/20 transition-colors"
                disabled={cant === 0}
              >
                −
              </button>
              <span className="w-8 text-center text-verde-noche font-semibold text-sm">
                {cant}
              </span>
              <button
                onClick={() => onCambiar(flor.id, cant + 1)}
                className="w-8 h-8 rounded-full bg-verde-oscuro text-white flex items-center justify-center text-lg font-bold cursor-pointer hover:bg-verde-medio transition-colors"
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
