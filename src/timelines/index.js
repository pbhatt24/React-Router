import { gsap, Power1 } from "gsap";

const getDefaultTimeline = (node, delay) => {
  const tl = gsap.timeline({ paused: true });
  const content = node.querySelector(".content");
  const contentInner = node.querySelector(".content--inner");

  tl.from(node, {
    duration: 0.3,
    display: "none",
    autoAlpha: 0,
    delay,
    ease: Power1.easeIn,
  })
    .from(content, {
      duration: 0.15,
      autoAlpha: 0,
      y: 25,
      ease: Power1.easeInOut,
    })
    .from(contentInner, {
      duration: 0.15,
      autoAlpha: 0,
      delay: 0.15,
      ease: Power1.easeIn,
    });

  return tl;
};

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5;
  let tl;

  // if (pathname === "/") tl = getHomeTimeline(node, delay);
  // else
  tl = getDefaultTimeline(node, delay);

  //   window.loadPromise.then(() => requestAnimationFrame(() => tl.play()));
  tl.play();
};

export const exit = (node) => {
  const tl = gsap.timeline({ paused: true });

  tl.to(node, { duration: 0.15, autoAlpha: 0, ease: Power1.easeOut });
  tl.play();
};
