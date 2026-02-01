import RestaurantHero from "@/components/RestaurantHero";

export default function Entrega() {
  return (
    <main className="pb-20">
      <RestaurantHero
        name="Espaço Gourmet"
        category="Gourmet • Restaurante"
        isOpen={true}
        rating={5.0}
      />

      {/* Espaço para compensar o card flutuante */}
      <div className="h-20" />

      <section className="px-4">
        <h3 className="mb-4 text-lg font-bold">Lançamentos</h3>

        <p className="text-gray-500">Em breve os produtos aparecerão aqui.</p>
      </section>
    </main>
  );
}
