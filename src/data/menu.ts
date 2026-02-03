export const menuCategories = [
  { id: "pratos", label: "Pratos" },
  { id: "executivos", label: "Executivos" },
  { id: "porcoes", label: "Porções" },
  { id: "saladas", label: "Saladas" },
  { id: "bebidas", label: "Bebidas" },
  { id: "drinks", label: "Drinks" },
];

export const menuItems = [
  // ======================
  // PRATOS (DELIVERY + LOCAL)
  // ======================
  {
    id: 1,
    category: "pratos",
    name: "Burger Gourmet",
    description: "Pão artesanal, carne 180g e queijo especial",
    price: 29.9,
    availableIn: ["delivery", "local"],
  },

  {
    id: 2,
    category: "pratos",
    name: "Tilápia Grelhada",
    description: "Arroz branco, feijão, salada e fritas",
    price: 25.0,
    availableIn: ["delivery", "local"],
  },

  // ======================
  // EXECUTIVOS
  // ======================
  {
    id: 3,
    category: "executivos",
    name: "Filé de Frango à Milanesa",
    description: "Acompanha arroz, feijão e salada",
    price: 18.0,
    availableIn: ["delivery", "local"],
  },

  {
    id: 4,
    category: "executivos",
    name: "Filé de Carne à Milanesa",
    description: "Acompanha arroz, feijão e salada",
    price: 18.0,
    availableIn: ["delivery", "local"],
  },

  // ======================
  // PORÇÕES (MAIORIA LOCAL)
  // ======================
  {
    id: 5,
    category: "porcoes",
    name: "Calabresa Acebolada",
    description: "Porção para compartilhar",
    price: 30.0,
    availableIn: ["local"],
  },

  {
    id: 6,
    category: "porcoes",
    name: "Batata Frita",
    description: "Porção média",
    price: 18.0,
    availableIn: ["delivery", "local"],
  },

  // ======================
  // BEBIDAS (DELIVERY + LOCAL)
  // ======================
  {
    id: 7,
    category: "bebidas",
    name: "Coca-Cola Lata",
    description: "350ml",
    price: 5.0,
    availableIn: ["delivery", "local"],
  },

  {
    id: 8,
    category: "bebidas",
    name: "Água Tônica",
    description: "Lata",
    price: 5.0,
    availableIn: ["delivery", "local"],
  },

  // ======================
  // DRINKS (SOMENTE LOCAL)
  // ======================
  {
    id: 9,
    category: "drinks",
    name: "Caipirinha de Limão",
    description: "Bebida alcoólica",
    price: 8.0,
    availableIn: ["local"],
  },

  {
    id: 10,
    category: "drinks",
    name: "Caipivodka de Morango",
    description: "Bebida alcoólica",
    price: 12.0,
    availableIn: ["local"],
  },
];
