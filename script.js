      // Reveal on scroll
      const io = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

      // Depoimentos - navegação por setas
      (function () {
        const carousel = document.querySelector(".depo-carousel");
        const track = document.querySelector(".depo-track");
        const prevBtn = document.querySelector(".depo-arrow.prev");
        const nextBtn = document.querySelector(".depo-arrow.next");
        if (!carousel || !track || !prevBtn || !nextBtn) return;

        function cardStep() {
          const card = track.querySelector(".depo-card");
          if (!card) return 380;
          const style = window.getComputedStyle(track);
          const gap = parseFloat(style.columnGap || style.gap) || 24;
          return card.getBoundingClientRect().width + gap;
        }

        function updateArrows() {
          const maxScroll = track.scrollWidth - track.clientWidth - 2;
          const canPrev = track.scrollLeft > 0;
          const canNext = track.scrollLeft < maxScroll;
          prevBtn.disabled = !canPrev;
          nextBtn.disabled = !canNext;
          carousel.classList.toggle("can-prev", canPrev);
          carousel.classList.toggle("can-next", canNext);
        }

        prevBtn.addEventListener("click", () => {
          track.scrollBy({ left: -cardStep(), behavior: "smooth" });
        });
        nextBtn.addEventListener("click", () => {
          track.scrollBy({ left: cardStep(), behavior: "smooth" });
        });
        track.addEventListener("scroll", updateArrows);
        window.addEventListener("resize", updateArrows);
        updateArrows();
      })();

      // Courses list
      const COURSES = [
        ["Administração", "online", "4 anos"],
        ["Agronegócios", "online", "3 anos"],
        ["Agronomia", "semi", "5 anos"],
        ["Análise e Desenvolvimento de Sistemas", "online", "2,5 anos"],
        ["Arquitetura de Dados", "online", "2,5 anos"],
        ["Biomedicina", "semi", "4 anos"],
        ["Cibersegurança", "online", "2,5 anos"],
        ["Ciência de Dados", "online", "2,5 anos"],
        ["Ciências Contábeis", "online", "4 anos"],
        ["Ciências Econômicas", "online", "4 anos"],
        ["Coaching e Desenvolvimento", "online", "2 anos"],
        ["Comércio Exterior", "online", "2 anos"],
        ["Computação em Nuvem", "online", "2,5 anos"],
        ["DevOps", "online", "2 anos"],
        ["Desenvolvimento Back-End", "online", "2 anos"],
        ["Desenvolvimento Mobile", "online", "2 anos"],
        ["Desenvolvimento Web", "online", "2 anos"],
        ["Design de Interiores", "online", "2 anos"],
        ["Design de Moda", "online", "2 anos"],
        ["Design Gráfico", "online", "2 anos"],
        ["Empreendedorismo", "online", "2 anos"],
        ["Engenharia de Software", "online", "4 anos"],
        ["Educação Física — Bacharelado", "semi", "4 anos"],
        ["Educação Física — Licenciatura", "semi", "4 anos"],
        ["Fisioterapia", "semi", "5 anos"],
        ["Fonoaudiologia", "semi", "4 anos"],
        ["Gastronomia", "online", "2 anos"],
        ["Gestão Comercial", "online", "3 anos"],
        ["Gestão da Inovação", "online", "2 anos"],
        ["Gestão da Qualidade", "online", "2 anos"],
        ["Gestão da Tecnologia da Informação", "online", "2 anos"],
        ["Gestão de Cooperativas", "online", "2 anos"],
        ["Gestão de Produto", "online", "2 anos"],
        ["Gestão de Recursos Humanos", "online", "2 anos"],
        ["Segurança Privada", "online", "2 anos"],
        ["Gestão Financeira", "online", "2 anos"],
        ["Gestão Portuária", "online", "3 anos"],
        ["Gestão de Saúde Pública", "online", "2 anos"],
        ["Gestão Pública", "online", "2 anos"],
        ["Inteligência de Mercado e Análise de Dados", "online", "2,5 anos"],
        ["Investigação e Perícia Criminal", "online", "2 anos"],
        ["Jogos Digitais", "online", "2 anos"],
        ["Jornalismo", "online", "4 anos"],
        ["Logística", "online", "2 anos"],
        ["Marketing", "online", "2 anos"],
        ["Marketing Digital", "online", "2 anos"],
        ["Negócios Imobiliários", "online", "2 anos"],
        ["Nutrição", "semi", "4 anos"],
        ["Pedagogia", "semi", "4 anos"],
        ["Processos Gerenciais", "online", "2 anos"],
        ["Publicidade e Propaganda", "online", "4 anos"],
        ["Relações Internacionais", "online", "4 anos"],
        ["Sistemas para Internet", "online", "2 anos"],
        ["Segurança Pública", "online", "2 anos"],
        ["Secretariado", "online", "2 anos"],
        ["Serviço Social", "semi", "4 anos"],
        ["Serviços Jurídicos, Cartorários e Notariais", "online", "2 anos"],
        ["Teologia", "online", "4 anos"],
      ];
      const modLabel = (m) =>
        m === "online"
          ? "100% Online"
          : m === "semi"
            ? "Semipresencial"
            : "Online + Semi";
      const listEl = document.getElementById("cursos-list");
      function render(list) {
        listEl.innerHTML = list
          .map(([name, mod, dur]) => {
            const msg = encodeURIComponent(
              `Olá! Quero informações sobre o curso de ${name} no polo Unopar Pelotas.`,
            );
            return `<a class="course" data-mod="${mod}" data-name="${name.toLowerCase()}" href="https://wa.me/555330283591?text=${msg}" target="_blank">
      <div class="c-top"><h5>${name}</h5><span class="c-arrow">↗</span></div>
      <div class="c-bottom"><span class="c-mod">${modLabel(mod)}</span><span class="c-dur">${dur}</span></div>
    </a>`;
          })
          .join("");
      }
      render(COURSES);

      // Filters
      let curFilter = "all",
        curQuery = "";
      function applyFilters() {
        document.querySelectorAll(".course").forEach((c) => {
          const mod = c.dataset.mod;
          const name = c.dataset.name;
          const modOk =
            curFilter === "all" ||
            (curFilter === "online" &&
              (mod === "online" || mod === "online+semi")) ||
            (curFilter === "semi" && (mod === "semi" || mod === "online+semi"));
          const qOk = !curQuery || name.includes(curQuery);
          c.classList.toggle("hidden", !(modOk && qOk));
        });
      }
      document.querySelectorAll("#chips .chip").forEach((btn) => {
        btn.addEventListener("click", () => {
          document
            .querySelectorAll("#chips .chip")
            .forEach((b) => b.classList.remove("on"));
          btn.classList.add("on");
          curFilter = btn.dataset.f;
          applyFilters();
        });
      });
      document.getElementById("q").addEventListener("input", (e) => {
        curQuery = e.target.value.trim().toLowerCase();
        applyFilters();
      });

      // Countdown to end of month
      function tick() {
        const now = new Date();
        const end = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0);
        let s = Math.max(0, Math.floor((end - now) / 1000));
        const d = Math.floor(s / 86400);
        s %= 86400;
        const h = Math.floor(s / 3600);
        s %= 3600;
        const m = Math.floor(s / 60);
        s %= 60;
        const pad = (n) => String(n).padStart(2, "0");
        const set = (id, v) => {
          const el = document.getElementById(id);
          if (el) el.textContent = pad(v);
        };
        set("cd-d", d);
        set("cd-h", h);
        set("cd-m", m);
        set("cd-s", s);
      }
      tick();
      setInterval(tick, 1000);
    
