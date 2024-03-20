// Define the animation config
export const heartAnimationConfig = {
  loop: {
    reverse: true,
    from: { transform: "scale(1)" },
    to: { transform: "scale(1.2)" },
  },
  config: { tension: 150, friction: 10 },
};
export const selectHeartAnimationConfig = {
  from: { opacity: 0, transform: "translateY(-50px)" },
  enter: { opacity: 1, transform: "translateY(0px)" },
  leave: [
    { opacity: 1, transform: "translateY(0px)" },
    { opacity: 0, transform: "translateY(100px)" },
  ],
  config: { mass: 1, tension: 500, friction: 50 },
};

export const slideSwitchAnimationConfig = {
  from: { opacity: 1, transform: "translateX(-100%)" },
  enter: { opacity: 1, transform: "translateX(0%)" },
  leave: [
    { opacity: 1, transform: "translateX(-100%)" },
    { opacity: 1, transform: "translateX(0%)" },
  ],
  config: { mass: 1, tension: 500, friction: 50 },
};
