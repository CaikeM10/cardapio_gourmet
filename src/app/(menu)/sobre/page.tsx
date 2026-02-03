import Link from "next/link";
import AccordionSection from "@/components/AccordionSection";

export default function Sobre() {
  return (
    <main className="px-4 pb-10">
      {/* Voltar ao cardápio */}
      <div className="mb-4">
        <Link
          href="/entrega"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:underline"
        >
          ← Voltar ao cardápio
        </Link>
      </div>

      {/* Opções de entrega */}
      <AccordionSection title="Opções de entrega">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border p-4 text-center">
            🚚
            <p className="mt-2 font-medium">Delivery</p>
          </div>

          <div className="rounded-xl border p-4 text-center">
            👜
            <p className="mt-2 font-medium">Retirada</p>
          </div>
        </div>
      </AccordionSection>

      {/* Horário */}
      <AccordionSection title="Horário de funcionamento">
        <div className="space-y-1 text-sm">
          <p>
            <strong>Dom:</strong> 10:00 às 14:00 • 17:00 às 23:59
          </p>
          <p>
            <strong>Seg:</strong> 10:00 às 14:00 • 17:30 às 23:59
          </p>
          <p>
            <strong>Ter:</strong> 10:00 às 14:00 • 17:30 às 23:59
          </p>
          <p>
            <strong>Qua:</strong> 10:00 às 14:00 • 17:30 às 23:59
          </p>
          <p>
            <strong>Qui:</strong> 10:00 às 14:00 • 17:30 às 23:59
          </p>
          <p>
            <strong>Sex:</strong> 10:00 às 14:00 • 17:30 às 23:59
          </p>
          <p>
            <strong>Sáb:</strong> 10:00 às 14:00 • 17:00 às 23:59
          </p>
        </div>
      </AccordionSection>

      {/* Pagamentos */}
      <AccordionSection title="Formas de pagamento">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
            Dinheiro
          </span>
          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
            Pix
          </span>
          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
            Cartão de Crédito
          </span>
          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
            Cartão de Débito
          </span>
        </div>
      </AccordionSection>

      {/* Sobre */}
      <AccordionSection title="Sobre o restaurante">
        <p className="text-sm text-gray-600">
          Restaurante Espaço Gourmet, oferecendo refeições de qualidade com foco
          em sabor, conforto e bom atendimento.
        </p>
      </AccordionSection>

      {/* Rodapé (somente aqui, como você definiu) */}
      <footer className="mt-8 border-t py-6 text-center text-sm text-gray-500">
        <p>Razão Social: Espaço Gourmet LTDA</p>
        <p>CNPJ: 00.000.000/0001-00</p>

        <p className="mt-2">
          Desenvolvido por{" "}
          <a
            href="https://caikemarinho.com"
            target="_blank"
            className="font-medium text-black underline"
          >
            Caike Marinho
          </a>{" "}
          e{" "}
          <a
            href="https://site-joaovictor.com"
            target="_blank"
            className="font-medium text-black underline"
          >
            João Victor
          </a>
        </p>
      </footer>
    </main>
  );
}
