$(document).ready(function () {
  console.log(gsap);
  gsap.registerPlugin(ScrollTrigger);

  animateFirstSection(gsap);

  gsap.to('#replace_text', {
    duration: 2,
    text: "This is the new text...",
    ease: "none",
  });
});

function animateFirstSection(gsap) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "section.first",
      start: "top top",
      end: "bottom top",
      //ease:"power2.easeOut",
      //toggleActions: "play none none reverse",
      scrub: 1,
      pin: true,
      markers: true,
    },
  });

  tl.to("#ra_logo", {
    y: "-=200",
    opacity: 0,
    ease: "power1.out",
  })
    .fromTo(
      ".cloud_img",
      {
        x: "-100%",
        y: 0,
      },
      {
        x: "100%",
        y: 0,
      },
      "<"
    )
    .to(
      ".intro_video",
      {
        backgroundColor: "transparent",
        duration: ".3",
      },
      "<"
    )
    .to(".intro_video", {
      x: "-100%",
      rotate: "-90",
    });
  /* .fromTo('.swipein_card', {
        x: '-100%',
        y: '100%',
        scale: 0
    }, {
        x: 'center',
        y: 'center',
        scale: 1
    }) */
}
