gsap.registerPlugin(DrawSVGPlugin);

gsap.defaults({ ease: "none" });

const main = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#svgg",
      scrub: 2,
      start: "top 260px",
      end: "bottom bottom",
    },
  })
  .from(".fil0", { drawSVG: 0, duration: 30 });


/* 
const text = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#svgg",
      scrub: 1,
      start: "top top",
      end: "5% center",
    },
  })
  .from(".slogan1", { opacity: 0, y: 20, duration: 0.1 });
const text2 = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#svgg",
      scrub: 1,
      start: "25% center",
      end: "30% center",
    },
  })
  .from(".slogan2", { opacity: 0, y: 20, duration: 0.1 });
const text3 = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#svgg",
      scrub: 1,
      start: "37% center",
      end: "42% center",
    },
  })
  .from(".slogan3", { opacity: 0, y: 20, duration: 0.1 });
const text4 = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#svgg",
      scrub: 1,
      start: "44% center",
      end: "49% center",
    },
  })
  .from(".slogan4", { opacity: 0, y: 20, duration: 0.1 });
const text5 = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#svgg",
      scrub: 1,
      start: "55% center",
      end: "60% center",
    },
  })
  .from(".slogan5", { opacity: 0, y: 20, duration: 0.1 });
const text6 = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#svgg",
      scrub: 1,
      start: "68% center",
      end: "73% center",
    },
  })
  .from(".slogan6", { opacity: 0, y: 20, duration: 0.1 });
const text7 = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#svgg",
      scrub: 1,
      start: "80% center",
      end: "85% center",
    },
  })
  .from(".slogan7", { opacity: 0, y: 20, duration: 0.1 });
 */