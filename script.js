document.getElementById("yr").textContent = new Date().getFullYear();

      if (
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
        "IntersectionObserver" in window
      ) {
        const revealObserver = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12 },
        );

        document
          .querySelectorAll("section, .skills .card, .projects .card, footer")
          .forEach((element) => {
            element.classList.add("reveal");
            revealObserver.observe(element);
          });
      }
