export const animation = {
  enter: {
    opacity: 0,
    x: 300,
  },
  active: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0.7,
    x: -300,
    transition: {
      duration: 10,
      ease: [0.4, 0, 1, 1],
    },
  },
};
