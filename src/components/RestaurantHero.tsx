type RestaurantHeroProps = {
  name: string;
  category: string;
  isOpen: boolean;
  rating?: number;
};

export default function RestaurantHero({
  name,
  category,
  isOpen,
  rating = 5.0,
}: RestaurantHeroProps) {
  return (
    <div className="relative -mt-16">
      {/* Imagem do restaurante */}
      <div className="h-72 w-full">
        <img
          src="/fundo.png"
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Card flutuante */}
      <div className="absolute -bottom-12 left-4 right-4 rounded-xl bg-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-sm text-gray-500">{category}</p>
          </div>

          <div className="text-sm font-semibold text-yellow-500">
            ⭐ {rating.toFixed(1)}
          </div>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
              isOpen ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {isOpen ? "Aberto agora" : "Fechado"}
          </span>

          {/* Saiba mais */}
          <a
            href="/sobre"
            className="rounded-full border px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </div>
  );
}
