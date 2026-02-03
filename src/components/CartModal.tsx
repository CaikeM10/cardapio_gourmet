"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

type Props = {
  onClose: () => void;
};

export default function CartModal({ onClose }: Props) {
  const router = useRouter();
  const { items, removeItem, observation, setObservation, deliveryFee } =
    useCart();

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const total = subtotal + deliveryFee;

  return (
    <div className="fixed inset-0 z-50 flex items-end bg-black/50">
      <div className="w-full max-w-md rounded-t-2xl bg-white p-4">
        <div className="mb-4 flex justify-between">
          <h2 className="text-lg font-bold">Sua sacola</h2>
          <button onClick={onClose} className="text-sm text-gray-500">
            Fechar
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-center text-gray-500">Sua sacola está vazia</p>
        ) : (
          <>
            <div className="space-y-3">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b pb-2 text-sm"
                >
                  <span>{item.name}</span>
                  <div className="flex items-center gap-2">
                    <span>R$ {item.price.toFixed(2).replace(".", ",")}</span>
                    <button
                      onClick={() => removeItem(index)}
                      className="text-red-500"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Observação */}
            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium">
                Observação (opcional)
              </label>
              <textarea
                value={observation}
                onChange={(e) => setObservation(e.target.value)}
                placeholder="Ex: sem cebola, pouco sal..."
                className="w-full rounded-lg border px-3 py-2 text-sm"
              />
            </div>

            {/* Totais */}
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Taxa de entrega</span>
                <span>R$ {deliveryFee.toFixed(2)}</span>
              </div>

              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                router.push("/checkout");
              }}
              className="mt-4 w-full rounded-lg bg-black py-3 font-semibold text-white"
            >
              Continuar
            </button>
          </>
        )}
      </div>
    </div>
  );
}
