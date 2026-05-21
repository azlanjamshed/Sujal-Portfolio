// import { useEffect, useState } from "react";

// const CustomCursor = () => {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0,
//   });

//   useEffect(() => {
//     const moveCursor = (e) => {
//       setPosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener("mousemove", moveCursor);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//     };
//   }, []);

//   return (
//     <div
//       className="
//         fixed
//         w-5
//         h-5
//         rounded-full
//         bg-[#FF4E75]
//         shadow-[0_0_20px_#FF4E75]
//         pointer-events-none
//         z-[9999]
//         hidden md:block
//       "
//       style={{
//         left: `${position.x}px`,
//         top: `${position.y}px`,
//         transform: "translate(-50%, -50%)",
//       }}
//     />
//   );
// };

// export default CustomCursor;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 10,
        y: position.y - 10,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
      className="
        fixed
        w-5
        h-5
        rounded-full
        bg-white
        shadow-[0_0_20px_#FF4E75]
        pointer-events-none
        z-[9999]
        hidden md:block
      "
    />
  );
};

export default CustomCursor;
