// Define the animation config
//animation for heart
export const heartAnimationConfig = {
  loop: {
    reverse: true,
    from: { transform: "scale(1)" },
    to: { transform: "scale(1.2)" },
  },
  config: { tension: 150, friction: 10 },
};
//animation slecting heart
export const selectHeartAnimationConfig = {
  from: { opacity: 0, transform: "translateY(-50px)" },
  enter: { opacity: 1, transform: "translateY(0px)" },
  leave: [
    { opacity: 1, transform: "translateY(0px)" },
    { opacity: 0, transform: "translateY(100px)" },
  ],
  config: { mass: 1, tension: 500, friction: 50 },
};

//sliding toggle key animation
export const slideSwitchAnimationConfig = {
  from: { opacity: 1, transform: "translateX(-100%)" },
  enter: { opacity: 1, transform: "translateX(0%)" },
  leave: [
    { opacity: 1, transform: "translateX(-100%)" },
    { opacity: 1, transform: "translateX(0%)" },
  ],
  config: { mass: 1, tension: 500, friction: 50 },
};
//share icone animation
export const shareAnimationConfig = {
  from: { scaleY: 1 },
  loop: {
    to: [{ scaleY: 1.2 }, { scaleY: 0.9 }],
  },
};
//embed code animation
export const embedAnimationConfig = {
  from: { scaleX: 1 },
  loop: {
    to: [{ scaleX: 1.2 }, { scaleX: 0.9 }],
  },
};
