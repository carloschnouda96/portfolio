//* Framer Variants
export const variants = {
    // * Scale Animation 
    scale: {
        initial: {
            scale: 0.5,
            opacity: 0
        },
        animate: {
            scale: 1,
            opacity: 1
        }
    },

    // * Move Up Animation 
    moveUp: {
        initial: {
            y: 20,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        }
    },

    // * Move Down Animation 
    moveDown: {
        initial: {
            y: -20,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        }
    },

    // * Move Left Animation 
    moveLeft: {
        initial: {
            x: 860,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1
        }
    },

    // * Move Right Animation 
    moveRight: {
        initial: {
            x: -20,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1
        }
    },

    // * Rise Animation
    rise: {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    }
}

//* Framer Transition
export const transition = {
    scale: { duration: 0.9 },
    moveUp: { duration: 0.9, delay: 1 },
    moveDown: { duration: 0.9, delay: 1 },
    moveLeft: { duration: 0.9 },
    moveRight: { duration: 0.9 },
    rise: { duration: 2 }
}