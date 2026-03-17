'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const actual = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const loop = () => {
      actual.current.x += (pos.current.x - actual.current.x) * 0.18;
      actual.current.y += (pos.current.y - actual.current.y) * 0.18;
      cursor.style.left = actual.current.x + 'px';
      cursor.style.top = actual.current.y + 'px';
      rafId.current = requestAnimationFrame(loop);
    };

    const onEnter = () => cursor.classList.add('expanded');
    const onLeave = () => cursor.classList.remove('expanded');

    document.addEventListener('mousemove', onMove);
    rafId.current = requestAnimationFrame(loop);

    const els = document.querySelectorAll('a, button, [data-cursor]');
    els.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    // Re-query on DOM changes
    const obs = new MutationObserver(() => {
      const newEls = document.querySelectorAll('a, button, [data-cursor]');
      newEls.forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    });
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId.current);
      obs.disconnect();
    };
  }, []);

  return <div id="cursor" ref={cursorRef} aria-hidden="true" />;
}
