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
    <div className="relative">
      {/* Imagem do restaurante */}
      <div className="h-52 w-full">
        <img
          src="/restaurant.jpg"
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

        <div className="mt-2">
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
              isOpen ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {isOpen ? "Aberto agora" : "Fechado"}
          </span>
        </div>
      </div>
    </div>
  );
}
