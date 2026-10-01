# AMARENAS · Casona de Sabores — Landing de la carta

Landing mobile-first de estética VIP para la carta de **AMARENAS · Casona de
Sabores**: tapa de cuero verde botella con oro grabado que se abre en dos
capítulos (Desayuno & Merienda / Almuerzo & Cena) sobre papel crema.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Página completa (incluye el contrato de dirección visual en un comentario del `body`) |
| `css/styles.css` | Estilos y tokens (paleta cuero/crema/oro, tipografía Cinzel + EB Garamond) |
| `js/menu-data.js` | **Los datos de la carta** — editar aquí platos, precios y categorías |
| `js/main.js` | Render de la carta + animaciones GSAP (ScrollTrigger) |
| `PRODUCT.md` | Registro de producto (contexto del restaurante) |
| `DESIGN.md` | Sistema de diseño documentado (tokens + reglas) |
| `fotosmenu/` | Capturas originales del menú aportadas por el cliente (fuente del texto; no incrustadas) |

## Cómo abrirlo

Abrir `index.html` directo en el navegador, o servir la carpeta:

```bash
# desde la raíz del proyecto
python -m http.server 8777
# → http://127.0.0.1:8777
```

Requiere internet para cargar Google Fonts y GSAP desde CDN.

## Pendientes del cliente (datos reales)

Están como huecos marcados con `Próximamente` + comentarios `TODO(AMARENAS)`
en `index.html`, sección *Reservá tu mesa*:

- Dirección · Horarios · Teléfono/WhatsApp · Instagram

Sustituir por los datos reales y, si se desea, un `href="tel:…"` o enlace a
WhatsApp/Instagram en los botones.

## Para editar la carta

En `js/menu-data.js`:

- Estructura por bloques: `dia` (Desayuno & Merienda) y `noche` (Almuerzo & Cena).
- Cada sección: `slug`, `name`, `note` (opcional) y `items` con
  `{ n: nombre, p: precio, d: descripción }`.
- Precios exactos en formato carta (`"$2.000"`); `"S/P"` se muestra tal cual.
- Panel destacado del Brunch: `kind: "feature"` con `price` y lista `items`.
- Combos: `kind: "combo"` (nombres destacados en Cinzel).

## Notas de calidad

- Mobile-first; sin desbordes horizontales verificados a 320/390/1440 px.
- `prefers-reduced-motion` desactiva las animaciones; sin GSAP la carta se ve
  completa igual (render desde datos); `?static=1` fuerza estado estático.
- Contrastes verificados ≥ 4.5:1 (WCAG AA) para texto.
- Ortografía de algunos platos proviene del texto aportado por el cliente y
  puede requerir revisión (p. ej. "Capuccino", "Mafalda", "matilda").
