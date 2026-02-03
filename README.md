# 🍽️ Cardápio Gourmet

Cardápio digital moderno, inspirado em apps como **McDonald’s / iFood**, desenvolvido com foco em **experiência do usuário**, **organização visual** e **vendas via WhatsApp**.

O projeto resolve um problema comum de pequenos e médios restaurantes:  
a falta de uma **vitrine digital profissional**, intuitiva e otimizada para conversão.

---

## 🎯 Objetivo do Projeto

Criar um **cardápio digital responsivo**, simples e intuitivo, que permita ao cliente:

- Escolher como deseja consumir (Entrega ou Comer no local)
- Visualizar produtos organizados por categorias
- Pesquisar itens em tempo real
- Navegar como em um aplicativo de delivery
- Montar uma sacola de pedidos
- Evoluir facilmente para finalização via WhatsApp

---

## 🧰 Tecnologias Utilizadas

- **Next.js 14 (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Context API**
  - Estado global da sacola
  - Estado global da busca
- Arquitetura **mobile-first**
- Estrutura moderna com **Route Groups (`(menu)`)**

---

## 🗂️ Estrutura Atual do Projeto

- **Tela inicial**
  - Escolha entre _Para entrega_ ou _Para comer no local_
- **Rotas organizadas por grupo**
  - `(menu)/entrega`
  - `(menu)/local`
  - `(menu)/sobre`
  - `(menu)/localizacao`
- **Layout compartilhado**
  - Header fixo apenas nas páginas de cardápio
- **Menu lateral (SideMenu)**
  - Cardápio
  - Sobre nós
  - Localização
- **Página de Localização**
  - Google Maps integrado
  - Endereço completo
  - Botão “Abrir no Google Maps”

---

## ⚙️ Funcionalidades Implementadas

✔ Layout inspirado em apps de delivery  
✔ Tela inicial com escolha de fluxo (Entrega / Local)  
✔ Menu lateral (SideMenu) com navegação clara  
✔ Página de cardápio com:

- Hero do restaurante
- Status de funcionamento
- Avaliação
- Botão **“Saiba mais”**
  ✔ Tabs horizontais de categorias  
  ✔ Listagem de produtos por categoria  
  ✔ Pesquisa global funcionando via **SearchContext**  
  ✔ Card de produto com botão **“Adicionar”**  
  ✔ Sacola fixa inferior com:
- Quantidade de itens
- Valor total do pedido  
  ✔ Página **Sobre nós** com:
- Opções de entrega
- Horários
- Formas de pagamento
- Informações institucionais
  ✔ Página **Localização** com Google Maps integrado

---

## 🧠 Conceitos Aplicados

- UX inspirado em grandes apps de delivery
- Separação clara de responsabilidades (layout, páginas, componentes)
- Código escalável para:
  - Múltiplos restaurantes
  - Checkout futuro
  - Integrações externas (WhatsApp / Pagamentos)
- Componentização reutilizável

---

## 🚀 Próximos Passos (em desenvolvimento)

- Modal completo da sacola (ver / remover itens)
- Controle de quantidade (+ / −)
- Tela de checkout
- Integração completa com WhatsApp
- Diferenciação de fluxo:
  - Delivery
  - Comer no local (pedido por mesa)
- Integração com pagamentos (PIX, cartão)
- Transformar em solução **multi-restaurante (SaaS)**

---

## 📌 Status do Projeto

🚧 **Em desenvolvimento ativo**  
Este repositório representa uma **base sólida, funcional e escalável** para cardápios digitais profissionais.

---

## 👨‍💻 Autores

Desenvolvido por  
**Caike Marinho** – https://www.caikemarinho.com  
**João Victor**

Projeto focado em **soluções digitais modernas para restaurantes e negócios locais**.
