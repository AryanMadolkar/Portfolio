"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import { FooterEarth } from "./FooterEarth";

const QUOTE =
  "The sooner we become less impressed and more involved, the sooner we get better.";
const ATTRIBUTION = "Matthew McConaughey";
const WORDS = QUOTE.split(" ");

export function Footer() {
  const reducedMotion = useReducedMotion();
  const x = useSpring(0, { stiffness: 100, damping: 22, mass: 0.8 });
  const y = useSpring(0, { stiffness: 100, damping: 22, mass: 0.8 });
  const rotate = useSpring(0, { stiffness: 100, damping: 22, mass: 0.8 });

  const resetEarth = () => {
    x.set(0);
    y.set(0);
    rotate.set(0);
  };

  return (
    <footer className="relative overflow-hidden">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 pt-20 text-center">
        <blockquote className="max-w-md text-balance font-serif text-2xl leading-snug italic text-[var(--text)] sm:max-w-lg sm:text-3xl">
          <p>
            {WORDS.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="inline-block"
                initial={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                whileInView={{ opacity: [0.2, 1], y: [6, 0], filter: ["blur(3px)", "blur(0px)"] }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
                {index < WORDS.length - 1 ? "\u00a0" : ""}
              </motion.span>
            ))}
          </p>
          <footer className="mt-4 text-[11px] tracking-[0.22em] text-[var(--text-dim)] uppercase">
            {ATTRIBUTION}
          </footer>
        </blockquote>
      </div>

      <motion.div
        aria-hidden
        className="relative mt-12 h-56 overflow-hidden select-none sm:h-72"
        onPointerMove={(event) => {
          if (reducedMotion || event.pointerType === "touch") return;
          const bounds = event.currentTarget.getBoundingClientRect();
          const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
          const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
          x.set(horizontal * 16);
          y.set(vertical * 8);
          rotate.set(horizontal * 1.2);
        }}
        onPointerLeave={resetEarth}
        onPointerCancel={resetEarth}
      >
        <div className="relative left-1/2 h-full w-[calc(100%+24px)] min-w-[45rem] -translate-x-1/2">
          <motion.div
            className="h-full origin-bottom"
            style={{
              x: reducedMotion ? 0 : x,
              y: reducedMotion ? 0 : y,
              rotate: reducedMotion ? 0 : rotate,
            }}
          >
            <FooterEarth />
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
