"use client";

import { useCart } from "@/context/CartContext";
import { generateWhatsAppMessage } from "@/utils/generateWhatsAppMessage";
import { useSearch } from "@/context/SearchContext";
import { useState } from "react";

type PaymentMethod = "pix" | "cartao" | "dinheiro";

export default function Checkout() {
  const { items, observation, deliveryFee, clearCart } = useCart();

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [address, setAddress] = useState("");
  const [reference, setReference] = useState("");
  const [payment, setPayment] = useState<PaymentMethod>("pix");

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const total = subtotal + deliveryFee;

  function handleFinish() {
    if (!name || !whatsapp || !address) {
      alert("Preencha nome, WhatsApp e endereço.");
      return;
    }

    const message = generateWhatsAppMessage({
      items,
      subtotal,
      deliveryFee,
      total,
      observation,
      name,
      whatsapp,
      address,
      reference,
      payment,
    });

    const phone = "5588999172635"; // número do restaurante
    window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(
      message,
    )}`;

    clearCart();
  }

  return (
    <main className="mx-auto max-w-md px-4 pb-28 pt-6">
      <h1 className="mb-6 text-xl font-bold">Confirmar pedido</h1>

      <section className="mb-6 space-y-2 rounded-xl border bg-white p-4 text-sm">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span>{item.name}</span>
            <span>R$ {item.price.toFixed(2)}</span>
          </div>
        ))}

        <div className="mt-2 flex justify-between">
          <span>Taxa de entrega</span>
          <span>R$ {deliveryFee.toFixed(2)}</span>
        </div>

        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>R$ {total.toFixed(2)}</span>
        </div>
      </section>

      <section className="space-y-3 rounded-xl border bg-white p-4">
        <input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border px-3 py-2"
        />

        <input
          placeholder="WhatsApp"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className="w-full rounded-lg border px-3 py-2"
        />

        <input
          placeholder="Endereço"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full rounded-lg border px-3 py-2"
        />

        <input
          placeholder="Ponto de referência (opcional)"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          className="w-full rounded-lg border px-3 py-2"
        />

        <label className="flex gap-2 text-sm">
          <input
            type="radio"
            checked={payment === "pix"}
            onChange={() => setPayment("pix")}
          />
          Pix
        </label>

        <label className="flex gap-2 text-sm">
          <input
            type="radio"
            checked={payment === "cartao"}
            onChange={() => setPayment("cartao")}
          />
          Cartão na entrega
        </label>

        <label className="flex gap-2 text-sm">
          <input
            type="radio"
            checked={payment === "dinheiro"}
            onChange={() => setPayment("dinheiro")}
          />
          Dinheiro
        </label>
      </section>

      <button
        onClick={handleFinish}
        className="fixed bottom-4 left-1/2 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-xl bg-black py-3 font-semibold text-white"
      >
        Enviar pedido
      </button>
    </main>
  );
}
