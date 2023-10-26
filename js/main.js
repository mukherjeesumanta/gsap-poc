gsap.registerPlugin(DrawSVGPlugin);

gsap.defaults({ ease: "none" });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#svgg",
    scrub: 2,
    start: "top top+=60px",
    end: "bottom center",
    markers: {
      startColor: "deeppink",
      endColor: "deeppink",
      fontSize: "18px",
      fontWeight: "bold",
      indent: 20,
    },
  },
});
tl.from("#path1", { drawSVG: 0, duration: 3 })
  .from("#path2", { drawSVG: 0, duration: 3 })
  .from("#path3", { drawSVG: 0, duration: 1 });

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ra-svg",
    scrub: 2,
    //start: "top 260px",
    start: "top center+=100",
    end: "bottom center+=50px",
    markers: true,
  },
});
tl2
  .from("#ra1", { drawSVG: 0, duration: 2 })
  .from("#ra2", { drawSVG: 0, duration: 2 })
  .from("#ra3", { drawSVG: 0, duration: 2 })
  .from("#ra4", { drawSVG: 0, duration: 2 })
  .from("#ra5", { drawSVG: 0, duration: 2 })
  .from("#ra6", { drawSVG: 0, duration: 2 })
  .from("#ra7", { drawSVG: 0, duration: 2 });
