"use client"

import { HTMLMotionProps, motion, Variants } from "motion/react"

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const staggerParent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
}

type RevealTag =
  "div" | "span" | "p" | "ul" | "li" | "ol" | "dl" | "h2" | "blockquote"

type RevealProps = HTMLMotionProps<"div"> & {
  as?: RevealTag
}
//parent
export function RevealGroup({ as = "div", ...props }: RevealProps) {
  const Component = motion[as] as typeof motion.div

  return (
    <Component
      initial="hidden"
      whileInView="show"
      variants={staggerParent}
      viewport={{ once: true }}
      {...props}
    />
  )
}

//child
export function Reveal({ as = "div", ...props }: RevealProps) {
  const Component = motion[as] as typeof motion.div

  return (
    <Component
      variants={revealVariants}
      {...props}
    />
  )
}
