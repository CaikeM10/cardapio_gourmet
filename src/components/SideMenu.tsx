"use client";

import Image from "next/image";

type Props = {
  onClose: () => void;
};

export default function SideMenu({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div className="h-full w-72 bg-white p-4">
        {/* Header do menu */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo_espaco.jpg"
              alt="Espaço Gourmet"
              width={50} // ⬅️ logo maior
              height={50}
              className="rounded-xl"
            />
            <span className="text-base font-bold">Espaço Gourmet</span>
          </div>

          <button onClick={onClose} aria-label="Fechar menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Itens do menu */}
        <nav className="space-y-2">
          <a
            href="/entrega"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium hover:bg-gray-100"
          >
            📋
            <span>Cardápio</span>
          </a>

          <a
            href="/sobre"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium hover:bg-gray-100"
          >
            ℹ️
            <span>Sobre nós</span>
          </a>
          <a
            href="/localizacao"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium hover:bg-gray-100"
          >
            📍
            <span>Localização</span>
          </a>
        </nav>

        {/* Rodapé do menu */}
        <div className="mt-10 border-t pt-4 text-center text-xs text-gray-500">
          Desenvolvido por{" "}
          <a
            href="https://www.caikemarinho.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-black underline"
          >
            Caike Marinho
          </a>{" "}
          e{" "}
          <a
            href="https://site-joaovictor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-black underline"
          >
            João Victor
          </a>
        </div>
      </div>
    </div>
  );
}
