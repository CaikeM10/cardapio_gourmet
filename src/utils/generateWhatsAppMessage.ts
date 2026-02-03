import { PIX_CONFIG } from "@/config/pix";

type Item = {
  name: string;
  price: number;
};

type PaymentMethod = "pix" | "cartao" | "dinheiro";

type OrderData = {
  items: Item[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  observation: string;
  name: string;
  whatsapp: string;
  address: string;
  reference: string;
  payment: PaymentMethod;
};

function formatDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString("pt-BR");
  const time = now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return { date, time };
}

export function generateWhatsAppMessage(data: OrderData): string {
  const { date, time } = formatDateTime();

  const itemsText = data.items
    .map(
      (item) => `- ${item.name}  R$ ${item.price.toFixed(2).replace(".", ",")}`,
    )
    .join("\n");

  const pixSection =
    data.payment === "pix"
      ? `
PIX (copia e cola)
${PIX_CONFIG.key}

Titular: ${PIX_CONFIG.holder}

Após o pagamento, envie o comprovante.
`
      : "";

  return `
Venho de https://espacogourmet.com.br/ e gostaria de fazer um pedido!
Pedido: ${Date.now()}

Data: ${date}  Hora: ${time}

Tipo de serviço: Delivery

Nome: ${data.name}
Telefone: ${data.whatsapp}
Endereço: ${data.address}${data.reference ? ` - ${data.reference}` : ""}

PRODUTOS
${itemsText}

Observação:
${data.observation || "Nenhuma"}

Subtotal: R$ ${data.subtotal.toFixed(2).replace(".", ",")}
Delivery: R$ ${data.deliveryFee.toFixed(2).replace(".", ",")}
Total: R$ ${data.total.toFixed(2).replace(".", ",")}

Pagamento
Forma: ${data.payment.toUpperCase()}
Total a pagar: R$ ${data.total.toFixed(2).replace(".", ",")}

${pixSection}

Por favor, envie esta mensagem para confirmar o pedido.
`.trim();
}
