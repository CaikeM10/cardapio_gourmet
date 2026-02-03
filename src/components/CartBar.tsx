"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import CartModal from "./CartModal";

export default function CartBar() {
  const { items } = useCart();
  const [open, setOpen] = useState(false);

  if (items.length === 0) return null;

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="fixed bottom-0 left-0 right-0 z-40 mx-auto max-w-md cursor-pointer bg-black px-4 py-3 text-white"
      >
        <div className="flex justify-between">
          <span>{items.length} item(ns)</span>
          <span>Ver sacola • R$ {total.toFixed(2)}</span>
        </div>
      </div>

      {open && <CartModal onClose={() => setOpen(false)} />}
    </>
  );
}
