"use client";

import RestaurantHero from "@/components/RestaurantHero";
import MenuTabs from "@/components/MenuTabs";
import ProductCard from "@/components/ProductCard";
import CartBar from "@/components/CartBar";
import { useSearch } from "@/context/SearchContext";
import { menuCategories, menuItems } from "@/data/menu";

export default function Entrega() {
  const { search } = useSearch();

  const deliveryCategories = menuCategories.filter((cat) =>
    menuItems.some(
      (item) =>
        item.category === cat.id &&
        item.availableIn.includes("delivery") &&
        item.name.toLowerCase().includes(search.toLowerCase()),
    ),
  );

  return (
    <main className="pb-32">
      <RestaurantHero
        name="Espaço Gourmet"
        category="Restaurante"
        isOpen={true}
        rating={5}
      />

      <div className="h-16" />

      <MenuTabs categories={deliveryCategories} />

      <section className="space-y-10 px-4 pt-6">
        {deliveryCategories.map((cat) => {
          const itemsByCategory = menuItems.filter(
            (item) =>
              item.category === cat.id &&
              item.availableIn.includes("delivery") &&
              item.name.toLowerCase().includes(search.toLowerCase()),
          );

          if (itemsByCategory.length === 0) return null;

          return (
            <div key={cat.id} id={cat.id}>
              <h3 className="mb-4 text-lg font-bold">{cat.label}</h3>

              <div className="space-y-4">
                {itemsByCategory.map((item) => (
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <CartBar />
    </main>
  );
}
