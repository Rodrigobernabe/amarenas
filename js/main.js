/* =====================================================================
   AMARENAS · Casona de Sabores — Comportamiento y movimiento
   - Renderiza la carta desde js/menu-data.js
   - Anima con GSAP + ScrollTrigger si están disponibles
   - Sin GSAP / movimiento reducido: contenido 100% visible, sin ocultar
   ===================================================================== */
(function () {
  "use strict";

  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var HAS_GSAP = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
  var STATIC = /[?&]static\b/.test(window.location.search);

  /* deja de depender del CSS "no-js" */
  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  /* =================================================================
     RENDER DE LA CARTA
     ================================================================= */
  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function renderChips(container, sections, block) {
    sections.forEach(function (s) {
      var a = el("a", "chip", s.name);
      a.href = "#" + block + "-" + s.slug;
      container.appendChild(a);
    });
  }

  function renderItem(li, it, isCombo) {
    var row = el("div", "item__row");
    if (isCombo) row.classList.add("item__row--combo");
    row.appendChild(el("span", "item__name", it.n));

    var dots = el("span", "item__dots");
    dots.setAttribute("aria-hidden", "true");
    row.appendChild(dots);

    var price = el("span", "item__price", it.p);
    if (it.p === "S/P") price.classList.add("is-sin");
    row.appendChild(price);
    li.appendChild(row);

    if (it.d) {
      li.appendChild(el("p", "item__desc", it.d));
    }
  }

  function renderCats(container, sections, block) {
    sections.forEach(function (s) {
      var section = el("section", "cat");
      section.id = block + "-" + s.slug;

      if (s.kind === "feature") {
        /* panel destacado: brunch para compartir */
        var feature = el("div", "feature");
        feature.id = block + "-" + s.slug;
        var head = el("div", "feature__head");
        head.appendChild(el("h4", "feature__name", s.name));
        head.appendChild(el("p", "feature__price", s.price));
        feature.appendChild(head);
        feature.appendChild(el("p", "feature__for", "Para compartir"));
        var ul = el("ul", "feature__list");
        (s.items || []).forEach(function (inc) {
          ul.appendChild(el("li", null, inc));
        });
        feature.appendChild(ul);
        container.appendChild(feature);
        return;
      }

      section.appendChild(el("h4", "cat__name", s.name));
      if (s.note) {
        section.appendChild(el("p", "cat__note", s.note));
      }

      var isCombo = s.kind === "combo";
      var ul = el("ul", "cat__list");
      (s.items || []).forEach(function (it) {
        var li = el("li", "item");
        renderItem(li, it, isCombo);
        ul.appendChild(li);
      });
      section.appendChild(ul);
      container.appendChild(section);
    });
  }

  function build() {
    if (!window.MENU) return;
    ["dia", "noche"].forEach(function (block) {
      var sections = window.MENU[block] || [];
      renderChips(document.getElementById("chips-" + block), sections, block);
      renderCats(document.getElementById("cats-" + block), sections, block);
    });
  }

  build();

  /* =================================================================
     BARRA DE CAPÍTULOS (funciona aunque no haya GSAP)
     ================================================================= */
  var topbar = document.getElementById("topbar");
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      var past = window.scrollY > Math.min(window.innerHeight * 0.5, 420);
      if (topbar) topbar.classList.toggle("is-on", past);
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* =================================================================
     MOVIMIENTO (solo con GSAP y sin "reduce motion")
     ================================================================= */
  if (!HAS_GSAP || REDUCED || STATIC) return;

  gsap.registerPlugin(ScrollTrigger);

  /* ----- estampado de títulos: cada palabra entra desde abajo ----- */
  function splitChars(heading) {
    if (heading.getAttribute("data-split-char") === "done") return;
    var original = heading.textContent.trim();
    heading.setAttribute("aria-label", original);
    /* el tracking pasa de letter-spacing a márgenes entre cajas */
    var cs = window.getComputedStyle(heading);
    var ls = parseFloat(cs.letterSpacing) || 0;
    var chars = original.split("");
    heading.textContent = "";
    heading.style.letterSpacing = "0em";
    heading.style.textIndent = "0em";
    chars.forEach(function (c) {
      var wrap = el("span", "c");
      wrap.setAttribute("aria-hidden", "true");
      if (ls > 0) wrap.style.margin = "0 " + ls / 2 + "px";
      var inner = el("span", "c__in", c);
      wrap.appendChild(inner);
      heading.appendChild(wrap);
    });
    heading.setAttribute("data-split-char", "done");
  }

  function stampWords(root) {
    var targets = root.querySelectorAll("[data-split]");
    targets.forEach(function (heading) {
      if (heading.getAttribute("data-split") === "done") return;
      var original = heading.textContent.trim();
      heading.setAttribute("aria-label", original);
      /* agrupar "&" con la palabra siguiente para no partirla */
      var tokens = original.split(/\s+/);
      var groups = [];
      tokens.forEach(function (t) {
        if (t === "&" && groups.length) {
          groups[groups.length - 1] = groups[groups.length - 1] + " &";
        } else {
          groups.push(t);
        }
      });
      heading.textContent = "";
      groups.forEach(function (w) {
        var wrap = el("span", "w");
        wrap.setAttribute("aria-hidden", "true");
        var inner = el("span", "w__in", w);
        wrap.appendChild(inner);
        heading.appendChild(wrap);
      });
      heading.setAttribute("data-split", "done");
    });
  }

  /* ----- animación de entrada de la tapa ----- */
  function coverIntro() {
    var wrap = document.querySelector(".cover");
    var pre = wrap.querySelector(".cover__pre");
    var title = wrap.querySelector(".cover__title");
    var rule = wrap.querySelector(".cover__rule");
    var lede = wrap.querySelector(".cover__lede");
    var btn = wrap.querySelector(".btn");
    var scroll = wrap.querySelector(".cover__scroll");

    splitChars(title);

    var words = title.querySelectorAll(".c__in");
    var ruleLine = rule.querySelectorAll(".cover__rule-line");
    var gem = rule.querySelector(".cover__rule-gem");

    var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(wrap.querySelector(".crest"), { y: 22, autoAlpha: 0, duration: 1 }, 0.1)
      .from(words, { yPercent: 120, stagger: 0.07, duration: 0.9 }, 0.35)
      .from(pre, { y: 14, autoAlpha: 0, duration: 0.8 }, 0.6)
      .fromTo(ruleLine, {
        scaleX: 0,
        transformOrigin: function (i) { return i === 0 ? "100% 50%" : "0 50%"; }
      }, { scaleX: 1, duration: 0.7, ease: "power2.inOut" }, 0.95)
      .from(gem, { scale: 0, rotation: 90, duration: 0.6, ease: "back.out(2)" }, 1.0)
      .from(lede, { y: 18, autoAlpha: 0, duration: 0.8 }, 1.05)
      .from(btn, { y: 16, autoAlpha: 0, duration: 0.7 }, 1.2)
      .from(scroll, { autoAlpha: 0, duration: 0.6 }, 1.4);
  }

  /* ----- barra de progreso de lectura ----- */
  function readingProgress() {
    var bar = document.querySelector(".progress__bar");
    if (!bar) return;
    gsap.to(bar, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.4
      }
    });
  }

  /* ----- revelado por scroll de secciones y platos ----- */
  function scrollReveals() {
    var intro = document.querySelector(".carta__intro");
    if (intro) {
      stampWords(intro);
      gsap.from(intro.querySelectorAll(".w__in"), {
        yPercent: 90,
        autoAlpha: 0,
        stagger: 0.05,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: intro, start: "top 85%" }
      });
    }

    document.querySelectorAll("[data-blockhead]").forEach(function (head) {
      stampWords(head);
      gsap.from(head.querySelectorAll(".w__in"), {
        yPercent: 95,
        autoAlpha: 0,
        stagger: 0.06,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: { trigger: head, start: "top 80%" }
      });
    });

    /* cada categoría: nombre + platos en cascada */
    document.querySelectorAll(".cat, .feature").forEach(function (group) {
      var name = group.querySelector(".cat__name");
      var items = group.querySelectorAll(".item, .feature__list li");

      if (name) {
        gsap.from(name, {
          x: -18, autoAlpha: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: group, start: "top 82%" }
        });
      }
      if (items.length) {
        gsap.from(items, {
          y: 16, autoAlpha: 0, stagger: 0.028, duration: 0.65,
          ease: "power2.out",
          scrollTrigger: { trigger: group, start: "top 82%" }
        });
      }

      if (group.classList.contains("feature")) {
        gsap.from(group.querySelector(".feature__head"), {
          y: 18, autoAlpha: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: group, start: "top 80%" }
        });
      }
    });

    /* lomo del libro: gemas y título */
    var divider = document.querySelector(".divider");
    if (divider) {
      gsap.from(divider.querySelector(".divider__line"), {
        scaleX: 0, stagger: 0.15, duration: 0.9, transformOrigin: "0 50%",
        ease: "power2.inOut",
        scrollTrigger: { trigger: divider, start: "top 78%" }
      });
      gsap.from(divider.querySelector(".divider__gem"), {
        scale: 0, rotation: 45, duration: 0.9, ease: "back.out(2.4)",
        scrollTrigger: { trigger: divider, start: "top 78%" }
      });
      gsap.from(divider.querySelector(".divider__word"), {
        autoAlpha: 0, y: 10, duration: 0.8,
        scrollTrigger: { trigger: divider, start: "top 72%" }
      });
    }

    /* reservas: la contratapa */
    var reservas = document.querySelector(".reservas");
    if (reservas) {
      stampWords(reservas);
      gsap.from(reservas.querySelectorAll(".reservas__title .w__in"), {
        yPercent: 95, autoAlpha: 0, stagger: 0.06, duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: reservas, start: "top 78%" }
      });
      gsap.from(reservas.querySelectorAll(".card-info, .reservas__fine"), {
        y: 20, autoAlpha: 0, stagger: 0.08, duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: reservas, start: "top 72%" }
      });
    }

    /* pie */
    var footer = document.querySelector(".footer");
    if (footer) {
      gsap.from(footer.children, {
        y: 12, autoAlpha: 0, stagger: 0.06, duration: 0.6,
        scrollTrigger: { trigger: footer, start: "top 92%" }
      });
    }
  }

  /* ----- resaltar el capítulo activo en la barra ----- */
  function chapterSpy() {
    var tabs = document.querySelectorAll(".topbar__tabs .tab");
    [["dia", "#dia"], ["noche", "#noche"]].forEach(function (pair) {
      var key = pair[0];
      var target = document.querySelector(pair[1]);
      if (!target) return;
      ScrollTrigger.create({
        trigger: target,
        start: "top center",
        end: "bottom center",
        onToggle: function (self) {
          tabs.forEach(function (t) {
            t.classList.toggle("is-active", self.isActive && t.dataset.scrollto === key);
          });
        }
      });
    });
  }

  /* ----- popout modal de reseñas ----- */
  function initReviewModal() {
    var openBtn = document.getElementById("btn-open-review");
    var modal = document.getElementById("modal-review");
    var closeBtn = document.getElementById("btn-close-review");
    if (!openBtn || !modal) return;

    function openModal() {
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (openBtn) openBtn.focus();
    }

    openBtn.addEventListener("click", openModal);
    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }

    /* cerrar al hacer clic en el backdrop exterior */
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    /* cerrar al presionar Escape */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("is-open")) {
        closeModal();
      }
    });
  }

  function init() {
    initReviewModal();
    coverIntro();
    readingProgress();
    scrollReveals();
    chapterSpy();
    ScrollTrigger.refresh();
    /* recalcular tras cargar las fuentes (cambian las alturas) */
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        ScrollTrigger.refresh();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
