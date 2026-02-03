"use client";

import { useCart } from "@/context/CartContext";

type ProductCardProps = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export default function ProductCard({
  id,
  name,
  description,
  price,
}: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="flex gap-4 rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex-1">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{description}</p>

        <div className="mt-3 flex items-center justify-between">
          <p className="font-bold">R$ {price.toFixed(2).replace(".", ",")}</p>

          <button
            onClick={() => addItem({ id, name, price })}
            className="rounded-full bg-black px-4 py-1.5 text-sm font-semibold text-white"
          >
            + Adicionar
          </button>
        </div>
      </div>

      <img alt={name} className="h-20 w-20 rounded-lg object-cover" />
    </div>
  );
}
