"use client";

import { useState } from "react";
import SideMenu from "@/components/SideMenu";
import { useSearch } from "@/context/SearchContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { search, setSearch } = useSearch(); // ← ADICIONADO

  return (
    <>
      <header className="fixed top-0 z-40 flex w-full items-center justify-between bg-white px-4 py-3 shadow">
        {/* Botão menu */}
        <button onClick={() => setOpen(true)} className="text-2xl">
          ☰
        </button>

        {/* Espaço central vazio */}
        <div />

        {/* Busca */}
        <input
          value={search} // ← ADICIONADO
          onChange={(e) => setSearch(e.target.value)} // ← ADICIONADO
          placeholder="Buscar no cardápio"
          className="w-44 rounded-full bg-gray-100 px-4 py-2 text-sm outline-none"
        />
      </header>

      {open && <SideMenu onClose={() => setOpen(false)} />}
    </>
  );
}
