"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { books } from "@/data/portfolio";
import styles from "./bookshelf.module.css";

const OPEN = { duration: 0.42, ease: [0.22, 1, 0.36, 1] as const };
const LIFT = { type: "spring" as const, stiffness: 340, damping: 25, mass: 0.7 };

export function Bookshelf() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const activeId = books.some((book) => book.id === selectedId) ? selectedId : null;

  useEffect(() => {
    const dismissOutside = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Element && root.current?.contains(target) && target.closest("[data-bookshelf-book]")) {
        return;
      }
      if (target instanceof Element && target.closest("header")) return;
      setSelectedId(null);
    };
    const dismissOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setSelectedId(null);
      setHoveredId(null);
    };
    document.addEventListener("pointerdown", dismissOutside);
    document.addEventListener("keydown", dismissOnEscape);
    return () => {
      document.removeEventListener("pointerdown", dismissOutside);
      document.removeEventListener("keydown", dismissOnEscape);
    };
  }, []);

  useEffect(() => {
    if (!activeId) return;
    const book = root.current?.querySelector<HTMLElement>(`[data-bookshelf-book="${CSS.escape(activeId)}"]`);
    const position = book?.parentElement;
    const railElement = rail.current;
    if (!position || !railElement) return;
    const max = railElement.scrollWidth - railElement.clientWidth;
    const centered = position.offsetLeft - (railElement.clientWidth - position.offsetWidth) / 2;
    const next = Math.max(0, Math.min(max, centered));
    if (Math.abs(next - railElement.scrollLeft) > 1) railElement.scrollLeft = next;
  }, [activeId]);

  return (
    <section id="bookshelf" className="section-block">
      <div className={styles.headingRow}>
        <h2 className="section-heading">Bookshelf</h2>
        <p className={styles.note}>
          Books I keep
          <br />
          coming back to
          <svg viewBox="0 0 72 36" fill="none" aria-hidden>
            <path
              d="M58 8 C36 10 24 18 12 30"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path d="M12 30 L20 26 M12 30 L18 22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </p>
      </div>
      <div ref={root} className={styles.shelf} role="group" aria-label="Bookshelf">
        <div ref={rail} className={styles.rail}>
          <div className={styles.stack}>
          <div className={styles.books}>
            {books.map((book) => {
              const active = activeId === book.id;
              const bookStyle = {
                "--book-height": `${book.spine.height}px`,
                "--spine-width": `${book.spine.width}px`,
                "--cover-ratio": book.cover.width / book.cover.height,
              } as CSSProperties;
              const lifted = !reduceMotion && !active && hoveredId === book.id;
              return (
                <motion.button
                  key={book.id}
                  type="button"
                  layout="position"
                  transition={reduceMotion ? { duration: 0 } : OPEN}
                  data-bookshelf-book={book.id}
                  data-open={active}
                  data-hover={lifted}
                  className={styles.book}
                  style={bookStyle}
                  aria-label={`${book.title}, by ${book.author}`}
                  aria-pressed={active}
                  onPointerEnter={(event) => {
                    if (
                      event.pointerType === "mouse" &&
                      window.matchMedia("(hover: hover) and (pointer: fine)").matches
                    ) {
                      setHoveredId(book.id);
                    }
                  }}
                  onPointerLeave={() => setHoveredId(null)}
                  onClick={() => setSelectedId((current) => (current === book.id ? null : book.id))}
                >
                  <motion.span
                    className={styles.artwork}
                    initial={false}
                    animate={{ y: lifted ? -10 : 0 }}
                    transition={reduceMotion ? { duration: 0 } : active ? OPEN : LIFT}
                  >
                    <motion.span
                      className={styles.volume}
                      initial={false}
                      animate={{ opacity: active ? 1 : 0, rotateY: active ? 0 : -28 }}
                      transition={reduceMotion ? { duration: 0 } : OPEN}
                      aria-hidden
                    >
                      <span className={styles.cover}>
                        <img
                          src={book.cover.src}
                          width={book.cover.width}
                          height={book.cover.height}
                          alt={book.cover.alt}
                          className={styles.coverImage}
                        />
                      </span>
                    </motion.span>
                    <motion.span
                      className={styles.spine}
                      initial={false}
                      animate={{ opacity: active ? 0 : 1 }}
                      transition={{ duration: reduceMotion ? 0 : 0.18 }}
                      aria-hidden
                    >
                      <img
                        src={book.spine.src}
                        alt=""
                        width={book.spine.width}
                        height={book.spine.height}
                        className={styles.spineImage}
                      />
                    </motion.span>
                  </motion.span>
                </motion.button>
              );
            })}
          </div>
          <div className={styles.baseline} aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
