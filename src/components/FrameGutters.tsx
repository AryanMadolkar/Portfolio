"use client";

import { useEffect, useRef } from "react";

const BAND =
  "absolute inset-y-0 w-48 [mask-image:linear-gradient(to_bottom,transparent,black_6rem,black_calc(100%_-_6rem),transparent)]";

export function FrameGutters() {
  const leftLit = useRef<HTMLDivElement>(null);
  const rightLit = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = window.matchMedia(
      "(min-width: 80rem) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );

    let boxes: { el: HTMLDivElement; left: number; top: number }[] = [];
    const measure = () => {
      boxes = [];
      for (const el of [leftLit.current, rightLit.current]) {
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        boxes.push({ el, left: rect.left, top: rect.top });
      }
    };

    let frame = 0;
    let clientX = 0;
    let clientY = 0;

    const paint = () => {
      frame = 0;
      for (const { el, left, top } of boxes) {
        el.style.setProperty("--gutter-x", `${clientX - left}px`);
        el.style.setProperty("--gutter-y", `${clientY - top}px`);
        el.style.setProperty("--gutter-lit", "1");
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      clientX = event.clientX;
      clientY = event.clientY;
      if (frame === 0) frame = requestAnimationFrame(paint);
    };

    const dim = () => {
      for (const { el } of boxes) el.style.setProperty("--gutter-lit", "0");
    };

    const stopListening = () => {
      if (frame !== 0) cancelAnimationFrame(frame);
      frame = 0;
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", measure);
      document.documentElement.removeEventListener("pointerleave", dim);
      window.removeEventListener("blur", dim);
      dim();
    };

    const updateListeners = () => {
      if (!query.matches) {
        stopListening();
        return;
      }

      measure();
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("resize", measure);
      document.documentElement.addEventListener("pointerleave", dim);
      window.addEventListener("blur", dim);
    };

    updateListeners();
    query.addEventListener("change", updateListeners);

    return () => {
      query.removeEventListener("change", updateListeners);
      stopListening();
    };
  }, []);

  return (
    <div
      aria-hidden
      data-frame-gutters=""
      className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden xl:block"
    >
      <div className="relative mx-auto h-full w-full max-w-[var(--frame-max-w)]">
        <div className={`${BAND} right-full`}>
          <div className="absolute inset-0 [mask-image:linear-gradient(to_left,black,transparent_78%)]">
            <div className="frame-gutter-dots absolute inset-0" />
            <div ref={leftLit} className="frame-gutter-dots-lit absolute inset-0" />
          </div>
        </div>
        <div className={`${BAND} left-full`}>
          <div className="absolute inset-0 [mask-image:linear-gradient(to_right,black,transparent_78%)]">
            <div className="frame-gutter-dots absolute inset-0" />
            <div ref={rightLit} className="frame-gutter-dots-lit absolute inset-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
