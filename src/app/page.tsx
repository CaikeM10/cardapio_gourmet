import Link from "next/link";
import Logo from "@/components/Logo";
import { DineInIcon, DeliveryIcon } from "@/components/Icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Wrapper para subir o conteúdo */}
      <div className="-mt-24 flex flex-col items-center">
        {/* Logo */}
        <Logo className="mb-6 h-28 w-28 rounded-2xl shadow-md" />

        <h1 className="text-2xl font-bold text-gray-900">Seja bem-vindo!</h1>
        <p className="mt-2 text-gray-500">
          Escolha como prefere aproveitar sua refeição.
        </p>

        {/* Cards */}
        <div className="mt-10 flex gap-6">
          {/* Comer no local */}
          <Link href="/local">
            <div className="flex h-44 w-40 flex-col items-center justify-end rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              {/* Ícone */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-black">
                <DineInIcon className="h-7 w-7 text-white" />
              </div>

              {/* Pill Button */}
              <div className="rounded-full bg-white p-[2px]">
                <div className="rounded-full bg-gradient-to-r from-yellow-600/40 to-yellow-400/40 p-[1px]">
                  <div className="rounded-full bg-white px-5 py-2">
                    <span className="whitespace-nowrap text-sm font-semibold text-gray-900">
                      Para comer aqui
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Entrega */}
          <Link href="/entrega">
            <div className="flex h-44 w-40 flex-col items-center justify-end rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              {/* Ícone */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-black">
                <DeliveryIcon className="h-7 w-7 text-white" />
              </div>

              {/* Pill Button */}
              <div className="rounded-full bg-white p-[2px]">
                <div className="rounded-full bg-gradient-to-r from-yellow-600/40 to-yellow-400/40 p-[1px]">
                  <div className="rounded-full bg-white px-5 py-2">
                    <span className="whitespace-nowrap text-sm font-semibold text-gray-900">
                      Para entrega
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
