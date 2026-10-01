/* =====================================================================
   AMARENAS · Casona de Sabores — Datos de la carta
   ---------------------------------------------------------------------
   Para editar: cambiá los nombres, precios o listas de este archivo.
   Precios con formato exacto de la carta original: "$2.000".
   "S/P" = sin precio (se muestra tal cual). Estructura por bloques:
   dia  -> capítulo "Desayuno & Merienda"
   noche-> capítulo "Almuerzo & Cena"
   ===================================================================== */
window.MENU = {
  dia: [
    {
      slug: "brunch",
      name: "Brunch para compartir",
      price: "$50.000",
      kind: "feature",
      items: [
        "Infusiones", "Medialuna", "Sándwich de pollo o carne",
        "Tostón de campo (huevo, palta, queso tybo)", "Alfajor de chocolate",
        "Huevo revuelto", "Porción de torta del día", "Danesa",
        "Ensalada de frutas", "Masitas", "Jugo", "Bowl de frutas con yogurt"
      ]
    },
    {
      slug: "cafeteria",
      name: "Cafetería",
      items: [
        { n: "Espresso", p: "$2.000" },
        { n: "Americano", p: "$2.700" },
        { n: "Café", p: "$3.000" },
        { n: "Lágrima", p: "$3.000" },
        { n: "Capuccino", p: "$3.000" },
        { n: "Moka", p: "$4.500" },
        { n: "Submarino", p: "$4.000" },
        { n: "Té / Mate cocido", p: "$2.500" }
      ]
    },
    {
      slug: "frios",
      name: "Fríos & Frapés",
      items: [
        { n: "Limonada", p: "$4.500" },
        { n: "Licuado / Batidos", p: "$6.000" },
        { n: "Frapuccino", p: "$4.800" },
        { n: "Café frío", p: "$5.000" },
        { n: "Té helado", p: "$6.000" },
        { n: "Jugos detox", p: "$6.500" }
      ]
    },
    {
      slug: "tentaciones",
      name: "Tentaciones",
      note: "Opciones varias, dulces y saladas.",
      items: [
        { n: "Porción de torta (cheesecake, matilda, red, chocotorta)", p: "$9.500" },
        { n: "Porción de torta (stock disponible)", p: "$7.500" },
        { n: "Mafalda", p: "$3.800" },
        { n: "Croissant de jamón y queso", p: "$7.500" },
        { n: "Croissant relleno", p: "$6.000" },
        { n: "Croissant", p: "$3.000" },
        { n: "Hot cakes", p: "$9.000" },
        { n: "Waffles dulces", p: "$13.000" },
        { n: "Cookie con topping", p: "$5.000" },
        { n: "Cookie simple", p: "$4.500" },
        { n: "Cuadrado de brownie", p: "$3.000" },
        { n: "Alfajor", p: "$5.000" },
        { n: "Omelette simple", p: "$6.000" },
        { n: "Omelette de jamón y queso", p: "$8.500" },
        { n: "Bowl de frutas con yogurt y granola", p: "$9.500" },
        { n: "Tabla de jamón y queso", p: "$8.500" },
        { n: "Tostados", p: "$7.800" },
        { n: "Medialunas", p: "$2.000" },
        { n: "Bizcochitos", p: "$800" },
        { n: "Chipá", p: "$1.200" },
        { n: "Tostadas francesas", p: "$9.000" },
        { n: "Tostadas", p: "$2.500" }
      ]
    },
    {
      slug: "sandwiches-dia",
      name: "Sándwiches",
      items: [
        { n: "Mediterráneo", p: "$14.000", d: "Baguette con jamón crudo, rúcula, queso tybo y tomate." },
        { n: "Tostón de campo", p: "$13.000", d: "Tostón con palta, huevo y tomate." },
        { n: "Pebete", p: "$7.000", d: "Pan pebete relleno de jamón y queso." },
        { n: "Focaccia", p: "$13.500", d: "Focaccia rellena con jamón crudo, queso tybo gratinado, rúcula y aderezos." }
      ]
    },
    {
      slug: "combos",
      name: "Combos especiales",
      kind: "combo",
      items: [
        { n: "CAMPO", p: "$7.500", d: "Tostadas con queso crema, mermelada, manteca y dulce de leche · infusión + jugo · bizcochitos." },
        { n: "AMARENAS", p: "$19.000", d: "Porción de torta · cuadrado de brownie · chipá · ensalada de frutas · sándwich o croissant · 2 infusiones + jugo." },
        { n: "NUTRITIVO", p: "$13.000", d: "Infusión con bowl de frutas de estación con yogurt y granola · tostadas de pan integral con palta, huevo, tomate y semillas." }
      ]
    },
    {
      slug: "para2",
      name: "Para 2 personas",
      items: [
        { n: "Infusión + 4 medialunas", p: "$8.500" },
        { n: "Infusión + tostados grandes", p: "$10.000" },
        { n: "Infusión + porción de torta y sándwich", p: "$17.000" }
      ]
    }
  ],

  noche: [
    {
      slug: "entradas",
      name: "Entradas",
      items: [
        { n: "Empanadas", p: "$1.000" },
        { n: "Tortilla de papas", p: "$4.500" },
        { n: "Papas fritas", p: "$7.000" },
        { n: "Tabla de fiambres con salsa y snacks", p: "$35.000" },
        { n: "Tabla de frituras", p: "$20.000" },
        { n: "Porción de rabas", p: "$20.000" },
        { n: "Aros de cebolla", p: "$20.000" },
        { n: "Bastones de muzza", p: "$20.000" }
      ]
    },
    {
      slug: "ensaladas",
      name: "Ensaladas",
      items: [
        { n: "Caesar", p: "$11.500" },
        { n: "Mediterránea", p: "$11.500" },
        { n: "Ensalada 3 gustos", p: "$9.000" },
        { n: "Ensalada 5 gustos", p: "$11.500" }
      ]
    },
    {
      slug: "guarniciones",
      name: "Guarniciones",
      items: [
        { n: "Puré de papas", p: "$4.500" },
        { n: "Puré de calabaza", p: "$3.500" },
        { n: "Puré mixto", p: "$3.500" },
        { n: "Papas fritas", p: "$6.000" },
        { n: "Ensalada de lechuga y tomate", p: "$4.000" },
        { n: "Ensalada mixta", p: "$4.000" },
        { n: "Fideos con manteca o crema", p: "$3.500" }
      ]
    },
    {
      slug: "principales",
      name: "Principales",
      items: [
        { n: "Milanesa de carne o pollo simple", p: "$11.500" },
        { n: "Milanesa de carne o pollo a la napolitana", p: "$16.000" },
        { n: "Pechuga de pollo grillada", p: "$10.000" },
        { n: "Vacío al horno con vegetales", p: "$21.000" },
        { n: "Bife de chorizo", p: "$26.000" },
        { n: "Entraña", p: "$26.000" },
        { n: "Costeletas a la criolla", p: "$13.000" }
      ]
    },
    {
      slug: "kids",
      name: "Menú kids",
      items: [
        { n: "Mini hamburguesa con papas", p: "$15.000" },
        { n: "Nuggets con papas fritas o puré", p: "$15.000" },
        { n: "Tabla de mila con fritas, puré o fideos", p: "$10.000" }
      ]
    },
    {
      slug: "pizzas",
      name: "Pizzas",
      items: [
        { n: "Muzza", p: "$9.000" },
        { n: "Especial", p: "$18.000" },
        { n: "Fugazzetta", p: "$10.000" }
      ]
    },
    {
      slug: "pastas",
      name: "Pastas",
      items: [
        { n: "Tallarines", p: "$9.000" },
        { n: "Ravioles", p: "$14.400" },
        { n: "Sorrentinos", p: "$14.400" },
        { n: "Ñoquis", p: "$12.000" }
      ]
    },
    {
      slug: "salsas",
      name: "Salsas",
      items: [
        { n: "Boloñesa", p: "$3.000" },
        { n: "Fileto", p: "$3.000" },
        { n: "Mixta", p: "$3.000" },
        { n: "Crema de champiñón", p: "$5.000" }
      ]
    },
    {
      slug: "hamburguesas",
      name: "Hamburguesas",
      note: "Incluyen porción de papas fritas.",
      items: [
        { n: "Clásica", p: "$12.000", d: "Medallón de carne de 180 g, lechuga, tomate, jamón, queso, huevo y salsa de la casa." },
        { n: "Americana", p: "$14.000", d: "Medallón de carne de 180 g, lechuga, tomate, cebolla, cheddar y bacon." },
        { n: "Yankee", p: "$14.000", d: "Doble medallón de 100 g, bacon, doble cheddar, cebolla caramelizada, tomate, pepinillos y huevo frito." }
      ]
    },
    {
      slug: "sandwiches-noche",
      name: "Sándwiches",
      note: "Incluyen porción de papas fritas.",
      items: [
        { n: "Milanesa completo", p: "$12.000", d: "Carne o pollo, lechuga, tomate, huevo, jamón, queso y salsa de la casa." },
        { n: "Lomo completo", p: "$14.000", d: "Jamón, queso, huevo, lechuga y tomate." },
        { n: "Sándwich de pan francés", p: "$12.000", d: "Relleno de carne braseada con vegetales." },
        { n: "Sándwich veggie con pan ciabatta", p: "$13.000" },
        { n: "Wrap de pollo y vegetales", p: "$9.000" },
        { n: "Wrap de vegetales y atún en lomo", p: "$10.000" },
        { n: "Club", p: "$12.000", d: "Pan francés con pollo grillado, queso, tomate y lechuga." }
      ]
    },
    {
      slug: "bebidas",
      name: "Bebidas",
      note: "S/P: sin precio, consultar en mesa.",
      items: [
        { n: "Vino cabernet", p: "$20.000" },
        { n: "Vino malbec", p: "$20.000" },
        { n: "Fernet", p: "S/P" },
        { n: "Gancia", p: "S/P" },
        { n: "Campari", p: "S/P" },
        { n: "Vino blanco", p: "$16.000" },
        { n: "Cerveza", p: "$3.500" },
        { n: "Gaseosas", p: "$5.000" },
        { n: "Agua saborizada", p: "$5.000" },
        { n: "Agua con gas", p: "$2.800" },
        { n: "Agua mineral", p: "$2.800" },
        { n: "Jugo exprimido", p: "$5.000" },
        { n: "Jarra de limonada", p: "$7.000" }
      ]
    },
    {
      slug: "postres",
      name: "Postres",
      items: [
        { n: "Flan con crema y dulce de leche", p: "$5.000" },
        { n: "Panqueques con dulce de leche o manzana", p: "$9.000" },
        { n: "Frutillas con crema", p: "$12.000" },
        { n: "Ensalada de frutas", p: "$7.000" },
        { n: "Brownie con helado de amarenas", p: "$8.500" }
      ]
    }
  ]
};
