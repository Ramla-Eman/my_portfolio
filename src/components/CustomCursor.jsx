import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState("#38BDF8"); // Default color (Sky Blue)
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Detect hover elements with data-color attribute
      const hoveredElement = e.target.closest("[data-color]");
      if (hoveredElement) {
        setCursorColor(hoveredElement.getAttribute("data-color"));
      } else {
        setCursorColor("#38BDF8"); // Default color
      }
    };

    const handleMouseEnter = () => setScale(1.5);
    const handleMouseLeave = () => setScale(1);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full pointer-events-none mix-blend-difference"
      style={{ backgroundColor: cursorColor }}
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: scale,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    />
  );
};

export default CustomCursor;
