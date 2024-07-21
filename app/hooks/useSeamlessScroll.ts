import { useEffect, useRef, useState } from "react";

const useSeamlessScroll = (speed = 50) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const scrollAmount = useRef(0);
  const isInitialized = useRef(false); // 用于标记是否已经初始化过克隆

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    if (!isInitialized.current) {
      // 只在组件首次挂载时执行克隆
      const contentWidth = content.scrollWidth;
      const clone1 = content.cloneNode(true) as HTMLElement;
      const clone2 = content.cloneNode(true) as HTMLElement;
      container.appendChild(clone1);
      container.appendChild(clone2);
      isInitialized.current = true; // 标记初始化完成
    }

    let animationFrameId: number | null = null;

    const scroll = () => {
      if (isScrolling) {
        const contentWidth = content?.scrollWidth || 1;
        scrollAmount.current = (scrollAmount.current + speed / 60) % contentWidth;
        container.scrollLeft = scrollAmount.current;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => setIsScrolling(false);
    const handleMouseLeave = () => setIsScrolling(true);

    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [speed, isScrolling]);

  return { containerRef, contentRef };
};

export default useSeamlessScroll;
