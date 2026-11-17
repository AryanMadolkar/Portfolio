"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { books } from "@/data/portfolio";
import styles from "./bookshelf.module.css";

export function Bookshelf() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);
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
      <h2 className="section-heading">Bookshelf</h2>
      <div ref={root} className={styles.shelf} role="group" aria-label="Bookshelf">
        <div ref={rail} className={styles.rail}>
          <div className={styles.books}>
            {books.map((book) => {
              const active = activeId === book.id;
              const bookStyle = {
                "--book-height": `${book.spine.height}px`,
                "--spine-width": `${book.spine.width}px`,
                "--cover-ratio": book.cover.width / book.cover.height,
              } as CSSProperties;
              return (
                <button
                  key={book.id}
                  type="button"
                  data-bookshelf-book={book.id}
                  data-open={active}
                  data-hover={!active && hoveredId === book.id}
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
                  <span className={styles.artwork}>
                    <span className={styles.volume} aria-hidden>
                      <span className={styles.cover}>
                        <img
                          src={book.cover.src}
                          width={book.cover.width}
                          height={book.cover.height}
                          alt={book.cover.alt}
                          className={styles.coverImage}
                        />
                      </span>
                    </span>
                    <span className={styles.spine} aria-hidden>
                      <img
                        src={book.spine.src}
                        alt=""
                        width={book.spine.width}
                        height={book.spine.height}
                        className={styles.spineImage}
                      />
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <div className={styles.baseline} aria-hidden />
      </div>
    </section>
  );
}
