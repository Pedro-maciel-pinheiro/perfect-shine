import { Variants } from "framer-motion";


export function getTransitionProps(delay: number) {
  return {
    transition: {
      delay: delay,
      duration: 0.2, // Increase duration for a smoother transition
      type: "spring",
      stiffness: 60, // Lower stiffness for a smoother, less rigid spring
      damping: 15, // Increase damping to reduce oscillation
      mass: 0.2, // Adjust mass to control the inertia of the spring
    },
  };
}

export function slideInFromLeft(delay: number): Variants {
  return {
    hidden: {
      x: -100,
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.3,
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 0.5,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      ...getTransitionProps(delay),
    },
  };
}
export function slideInFromRight(delay: number) {
  return {
    hidden: {
      x: 100,
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.3,
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 0.5,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      ...getTransitionProps(delay),
    },
  };
}

export function slideInFromTop(delay: number) {
  return {
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.3,
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 0.5,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      ...getTransitionProps(delay),
    },
  };
}

export function slideInFromBottom(delay: number) {
  return {
    hidden: {
      y: 100,
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.1,
        type: "spring",
        stiffness: 80,
        damping: 15,
        mass: 0.5,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      ...getTransitionProps(delay),
    },
  };
}


export const fadeInSlider = {
  hidden: {
    opacity: 0,
    y: 100,
  },

  visible: (index: number ) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      type: "spring",
      stiffness: 40,
      damping: 15,
      mass: 0.5,
    },
  }),
};

export function scrollYHidden() {
  return {
    hidden: {
      y: -50,
      transition: {
        delay: 0,
        duration: 0.2,
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 0.5,
      },
    },
    visible: {
      y: 0,
      transition: {
        delay: 0,
        duration: 0.2,
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 0.5,
      },
    },
  };
}

export function fadeIn(delay: number) {
  return {
    hidden: {
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.5,
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 0.5,
      },
    },
    visible: {
      opacity: 1,
      ...getTransitionProps(delay),
    },
  };
}
