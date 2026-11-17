"use client";

import { motion, useReducedMotion } from "framer-motion";
import { InteractiveSticker } from "./InteractiveSticker";
import styles from "./profile-banner.module.css";

const stickers = [
  {
    id: "notebook",
    src: "/images/profile-stickers/notebook.webp",
    alt: "A paper-cut notebook and pencil with a yellow page tab",
    label: "Animate the notebook sticker",
    tilt: -7,
    order: 1,
    soundSrc: "/sounds/notebook-page-turn.mp3",
  },
  {
    id: "keyboard",
    src: "/images/profile-stickers/keyboard.webp",
    alt: "A halftone mechanical keyboard with blue keys",
    label: "Animate the keyboard sticker",
    tilt: 4,
    order: 2,
    soundSrc: "/sounds/keyboard-click.mp3",
  },
  {
    id: "plane",
    src: "/images/profile-stickers/plane.webp",
    alt: "A cobalt-blue paper plane",
    label: "Animate the paper plane sticker",
    tilt: -9,
    order: 3,
    soundSrc: "/sounds/plane-whoosh.mp3",
  },
  {
    id: "coffee",
    src: "/images/profile-stickers/coffee.webp",
    alt: "A halftone coffee cup with a yellow rim",
    label: "Animate the coffee sticker",
    tilt: 7,
    order: 4,
    soundSrc: "/sounds/coffee-cup.mp3",
  },
] as const;

export function ProfileBanner() {
  const reduceMotion = useReducedMotion();

  return (
    <div>
      <div className={styles.composition} role="group" aria-label="A few things from my desk">
        {stickers.map((sticker) => (
          <motion.div
            key={sticker.id}
            className={`${styles.sticker} ${styles[sticker.id]}`}
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.9, rotate: -sticker.tilt }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              duration: 0.6,
              bounce: 0.38,
              delay: reduceMotion ? 0 : (sticker.order - 1) * 0.1,
            }}
          >
            <InteractiveSticker
              {...sticker}
              sizes={
                sticker.id === "keyboard" ? "(max-width: 640px) 60vw, 400px" : "(max-width: 640px) 36vw, 240px"
              }
              priority={sticker.id === "keyboard"}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
