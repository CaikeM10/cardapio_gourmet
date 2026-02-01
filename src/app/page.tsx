import Link from "next/link";
import HomeOptionCard from "@/components/HomeOptionCard";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-4 text-center">
      {/* Logo */}
      <div className="mb-6">
        <Logo />
      </div>

      {/* Título */}
      <h1 className="mb-2 text-2xl font-bold">Seja bem-vindo!</h1>

      {/* Subtítulo */}
      <p className="mb-10 text-gray-500">
        Escolha como prefere aproveitar sua refeição.
      </p>

      {/* Cards */}
      <div className="grid w-full grid-cols-2 gap-4">
        <Link href="/local">
          <HomeOptionCard title="Para comer aqui" image="/eat-here.png" />
        </Link>

        <Link href="/entrega">
          <HomeOptionCard title="Para levar" image="/take-away.png" />
        </Link>
      </div>
    </main>
  );
}
