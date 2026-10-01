---
name: AMARENAS · Casona de Sabores
description: Carta digital de lujo — cuero verde botella, oro grabado y papel crema.
colors:
  paper: "#f7f1e1"
  paper-2: "#efe7d2"
  paper-edge: "#e7dcc2"
  ink: "#241b0c"
  ink-soft: "#6a5a33"
  leather-1: "#0c2417"
  leather-2: "#123529"
  leather-3: "#0a1d12"
  leather-glow: "#1c4b38"
  gold: "#c7a35c"
  gold-bright: "#eed9a4"
  gold-deep: "#7c5c26"
typography:
  display:
    fontFamily: "Cinzel, Times New Roman, serif"
    fontWeight: 600
    letterSpacing: "0.14em"
  body:
    fontFamily: "EB Garamond, Georgia, serif"
    fontWeight: 400
rounded:
  pill: "999px"
  control: "2px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.gold-bright}"
    rounded: "{rounded.control}"
    padding: "0.95em 1.9em"
  button-primary-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.leather-3}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
  card-feature:
    backgroundColor: "{colors.leather-2}"
    textColor: "{colors.paper}"
    padding: "clamp(22px,4.5vh,38px) clamp(20px,5vw,44px)"
---

# Design System: AMARENAS · Casona de Sabores

## Overview

**Creative North Star: "La Carta de Cuero"**

AMARENAS se presenta como el objeto que ya conoce: la carta encuadernada de un gran comedor, cerrada en cuero verde botella y abierta sobre papel crema. Toda la página es esa carta: la portada ocupa la primera pantalla como una tapa con marco doble de oro y monograma; al bajar, la carta se abre en dos capítulos (Desayuno & Merienda, luego Almuerzo & Cena) unidos por el lomo del libro. La estética es VIP por materiales y por calma — nada brilla salvo el oro grabado, que se usa solo en lo que importa: la marca, las rúbricas, los filetes de puntos y los precios tabulares. La densidad es alta porque una carta real es densa, pero el ritmo tipográfico (Cinzel grabado para mandar, EB Garamond para la mesa) y los espacios generosos la hacen respirar. Es mobile-first: en el teléfono se lee como una carta física de una sola columna con navegación de capítulos y salto rápido por sección.

**Key Characteristics:**
- Tapa/contratapa de cuero verde profundo con oro; interior de papel crema.
- Tipografía grabada (Cinzel) para marca y rúbricas; serif de lectura (EB Garamond) para platos y precios.
- Filetes de puntos clásicos entre plato y precio; precios tabulares alineados.
- Oro escaso y puntual: líneas, gemas, bordes, estados activos.
- Movimiento de "estampado": letras y palabras entran desde abajo como tinta que se estampa; nunca movimiento decorativo disperso.
- Precios en pesos argentinos, formato fiel de la carta original ("$2.000", "S/P").

## Colors

Paleta de dos caras: el cuero (verdes profundos) como marco y el papel (cremas) como hoja, unidos por un oro grabado de bajo brillo. Todo lo legible vive en tinta oscura sobre crema (contraste alto); el oro es para líneas, estados y superficies VIP, no para párrafos.

### Primary
- **Oro grabado** (`#c7a35c`): el único acento. Líneas de rúbrica, gemas de divisor, crest, marco de tapa, filetes de puntos sobre papel, nombre del panel destacado.
- **Oro claro** (`#eed9a4`): texto y marca sobre verde (contraste ~9.6:1), estados activos, etiquetas sobre cuero.
- **Oro profundo** (`#7c5c26`): texto de CTA y de precio sobre papel cuando el oro debe leerse como tinta (≥5.4:1).

### Neutral
- **Papel** (`#f7f1e1`): fondo interior, tapa abierta; body, notas.
- **Papel oscuro** (`#efe7d2`): superficies secundarias del interior, scrollbar track.
- **Borde de papel** (`#e7dcc2`): apenas definido por contraste mínimo.
- **Tinta** (`#241b0c`): texto y precios sobre papel (15:1).
- **Tinta suave** (`#6a5a33`): notas, descripciones, chips (5.9:1).
- **Cuero 1/2/3** (`#0c2417` / `#123529` / `#0a1d12`): gradiente de la tapa, del lomo y de la contratapa; resplandor cálido (`#1c4b38`) en la parte alta de las superficies verdes.

### Named Rules
**La Regla del Oro Escaso.** El oro es un metal precioso: líneas finas, pequeños rombos, estados activos y la marca. Un campo amplio de oro (rellenos, textos largos, fondos) rompe la ilusión de grabado y la página deja de ser una carta.

**La Regla de las Dos Caras.** Verde = cubierta (portada, lomo, panel destacado, reservas, pie); crema = hoja (toda la carta). Ninguna sección mezcla las dos caras en un mismo plano sin un borde de oro que actúe de canto.

## Typography

**Display Font:** Cinzel (fallback: Times New Roman, serif)
**Body Font:** EB Garamond (fallback: Georgia, serif)

**Character:** Cinzel aporta el aire grabado de una portada de bodega o de una invitación de gala —versalitas romanas con tracking amplio. EB Garamond es la letra de la mesa: serif clásica, itálica contenida para notas y descripciones, con cifras tabulares para precios. Es una pareja de imprenta: una manda, la otra sirve.

### Hierarchy
- **Display** (Cinzel 600, `clamp(1.9rem, 9.6vw, 5.1rem)`, line-height 1.05, tracking 0.16em, mayúsculas): AMARENAS en la tapa. Una sola palabra, nunca dos líneas.
- **Headline** (Cinzel 600, `clamp(1.55rem, 6vw, 2.4rem)`, tracking 0.2em, mayúsculas): títulos de capítulo/sección ("La Carta", "Desayuno & Merienda", "Reservá tu mesa").
- **Title** (Cinzel 600, `clamp(0.92rem, 3.4vw, 1.05rem)`, tracking 0.3em, mayúsculas): rúbricas de categoría dentro de la carta, con rombo dorado y filete que se desvanece.
- **Body** (EB Garamond 400/500, `1.09rem`, line-height 1.6): platos, precios, textos generales. Medida máx. 52–56ch en párrafos.
- **Label** (Cinzel 500/600, `0.62–0.82rem`, tracking 0.1–0.5em, mayúsculas): chips, pestañas de capítulo, etiquetas de contacto, microlabels. El tracking sube cuando la etiqueta es puramente decorativa ("Casona de Sabores", "Bajar").

### Named Rules
**La Regla de la Carta.** Los nombres de plato y su precio comparten línea, unidos por puntos guía (`1px dotted`, oro al 55%). El nombre nunca se separa de su precio por un salto de línea si hay espacio; si el nombre es largo, el precio queda alineado a la derecha en su propia línea tabular.

## Layout

Mobile-first, una sola columna con centro de lectura `max-width: 800px` para la carta y `1080px` para la envoltura general (`.shell`). Ritmo vertical en clamps por viewport (`clamp(48px, 9vh, 90px)` etc.): siempre más aire sobre el título que debajo.

- **Portada**: min-height `100svh` (fallback `100vh`), contenido centrado por flex, marco doble de oro inscrito a 12px/18px del borde.
- **Chips**: fila horizontal desbordable (`overflow-x: auto`) con scrollbar fino de oro de 4px; en escritorio se centran.
- **Categorías**: cada rúbrica abre una lista vertical de platos con filete inferior sutil; el "Brunch para compartir" es un panel de cuero a doble columna de inclusiones (una columna bajo 560px).
- **Lomo**: banda verde full-bleed entre capítulos, gemas y línea de oro; contrasección "La mesa sigue".
- **Reservas**: grilla de 2 columnas en móvil, 4 en escritorio, de "hojas" de contacto sobre cuero.
- **Breakpoints**: base móvil < 560px (panel a 1 columna, barra sin marca ni CTA), 760px (topbar completa, grilla de 4), y ampliaciones de densidad en escritorio.

## Elevation & Depth

Sistema casi plano, como papel real: profundidad por capas de color y por luz de gradiente, no por sombras. La única sombra es un resplandor cálido de oro bajo el botón primario en hover (`0 6px 26px rgba(199,163,92,.28)`), como si la hoja se levantara un instante. Los verdes se modelan con un radial de "resplandor de cuero" en la parte superior (iluminación de la tapa), nunca con bevels ni relieves falsos.

## Shapes

Esquinas mínimas: `2px` en controles tipo botón/pestaña para un aire de tarjeta grabada; píldoras completas (`999px`) solo en chips pequeños (la píldora es para controles diminutos). El panel destacado y las tarjetas de contacto son rectos (sin radio), con remates de esquina de oro de 18px (esquina superior-izquierda e inferior-derecha) que sugieren una hoja suelta dentro de la carta. Bordes: hairline de oro al 45% para marcos; líneas divisorias de puntos para guías de lectura.

## Components

### Buttons
- **Shape:** recto, radio 2px, tracking amplio, mayúsculas.
- **Primary:** fondo transparente, texto oro claro, borde 1px oro; hover/focus invierte: fondo oro, texto verde profundo, resplandor cálido.
- **En barra:** versión compacta "Reservar" (texto oro profundo sobre crema, hover verde).

### Chips
- **Style:** píldora, texto tinta suave, borde hairline de oro.
- **State:** hover/focus → fondo verde `leather-2`, texto oro claro, borde oro profundo.
- **Role:** salto rápido a secciones de la carta; no son filtros acumulables.

### Pestañas de capítulo (barra superior)
- **Style:** segmento con borde hairline; activo → fondo verde y texto oro claro; inactivo → tinta suave.
- **Mobile (<700px):** la barra muestra solo las dos pestañas ocupando el ancho; marca y CTA desaparecen.

### Panel destacado (Brunch para compartir)
- **Corner Style:** recto con remates de oro en dos esquinas opuestas.
- **Background:** gradiente de cuero con resplandor superior; texto papel/crema.
- **Shadow Strategy:** ninguno (ver Elevation).
- **Border:** hairline de oro.
- **Internal Padding:** `clamp(22px, 4.5vh, 38px) × clamp(20px, 5vw, 44px)`.
- **Dentro:** nombre en Cinzel oro claro + precio grande papel a la derecha; lista de inclusiones con rombos dorados, 2 columnas (1 bajo 560px).

### Tarjetas de contacto (Reservas)
- **Corner Style:** recto, sin radio.
- **Background:** verde translúcido sobre la banda de cuero; etiqueta Cinzel oro; dato en itálica oro claro.
- **Border:** hairline de oro entre celdas (grilla `1px`).
- **Contenido actual:** marcadores honestos "Próximamente" (datos por confirmar con el cliente).

### Item de carta (fila de plato)
- Nombre (EB Garamond 500) — puntos guía — precio (600, cifras tabulares). Descripción opcional en itálica suave debajo.
- Combos destacados: nombre en Cinzel con tracking menor para distinguirlos del resto.

## Do's and Don'ts

### Do:
- **Do** usar el oro como metal escaso: líneas, gemas, activos, la marca — nunca como fondo de texto largo.
- **Do** mantener precios y nombres de plato fieles a la carta real (formato "$2.000", "S/P"), con cifras tabulares alineadas.
- **Do** entrar los títulos como estampado (desde abajo, con máscara) y respetar `prefers-reduced-motion`.
- **Do** respetar la jerarquía: AMARENAS en una sola línea en la tapa, capítulos con tracking amplio, rúbricas con rombo dorado.
- **Do** dejar más aire sobre cada título que debajo de él.

### Don't:
- **Don't** inventar datos del local: dirección, horarios, teléfono e Instagram son placeholders "Próximamente" hasta que el cliente los entregue.
- **Don't** degradar "S/P" ni inventar precios donde la carta dice sin precio.
- **Don't** usar el tagline "Casona de Sabores" como kicker sobre el H1; la marca manda y el tagline sigue.
- **Don't** mezclar las dos caras (cuero/crema) en un plano sin un borde de oro que las separe.
- **Don't** duplicar el tracking de un título al animarlo letra por letra: el espaciado original debe preservarse visualmente.
