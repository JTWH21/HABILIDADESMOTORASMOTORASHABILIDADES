export const scrollAnimationDirective = {
    beforeMount(el) {
      const observer = new IntersectionObserver(
        ([entry], observer) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    }
  };
  