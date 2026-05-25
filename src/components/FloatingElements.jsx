// import React, { useMemo } from "react";
// import { motion } from "framer-motion";
// import { FiArrowDown, FiFigma, FiCode, FiLayers } from "react-icons/fi";
// import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";

// const FloatingElements = () => {
//   const floatingItems = [
//     {
//       id: 1,
//       type: "link",
//       text: "ABOUT",
//       to: "/#about",
//     },
//     {
//       id: 2,
//       type: "link",
//       text: "PROJECTS",
//       to: "/projects",
//     },
//     {
//       id: 3,
//       type: "icon",
//       icon: <FiFigma />,
//     },
//     {
//       id: 4,
//       type: "icon",
//       icon: <FiCode />,
//     },
//     {
//       id: 5,
//       type: "icon",
//       icon: <FiLayers />,
//     },
//     {
//       id: 6,
//       type: "link",
//       text: "CONTACT",
//       to: "/#contact",
//     },
//   ];

//   // SAFE RANDOM POSITIONS
//   // useMemo prevents positions changing on every re-render
//   const positions = useMemo(() => {
//     const presetPositions = [
//       { x: 10, y: 18 },
//       { x: 68, y: 18 },
//       { x: 18, y: 42 },
//       { x: 82, y: 38 },
//       { x: 45, y: 12 },
//       { x: 55, y: 28 },
//     ];

//     // Shuffle positions randomly
//     return [...presetPositions].sort(() => Math.random() - 0.5);
//   }, []);

//   return (
//     <>
//       {floatingItems.map((item, index) => {
//         const pos = positions[index];

//         return (
//           <motion.div
//             key={item.id}
//             initial={{
//               y: -300,
//               opacity: 0,
//               scale: 0.7,
//               rotate: Math.random() * 60 - 30,
//             }}
//             animate={{
//               y: 0,
//               opacity: 1,
//               scale: 1,
//               rotate: 0,
//             }}
//             transition={{
//               duration: 1.4,
//               delay: index * 0.08,
//               ease: [0.16, 1, 0.3, 1],
//             }}
//             className="
//               absolute
//               z-20
//             "
//             style={{
//               left: `${pos.x}%`,
//               top: `${pos.y}%`,
//             }}
//           >
//             {/* LINK PILLS */}
//             {item.type === "link" && (
//               <>
//                 {item.to.includes("#") ? (
//                   <HashLink
//                     smooth
//                     to={item.to}
//                     className="
//                       group
//                       flex
//                       items-center
//                       gap-3

//                       rounded-full

//                       border
//                       border-black/15

//                       bg-white/60

//                       px-5
//                       py-3

//                       backdrop-blur-xl

//                       shadow-[0_15px_35px_rgba(0,0,0,0.08)]

//                       transition-all
//                       duration-500

//                       hover:scale-105
//                       hover:bg-black
//                       hover:text-white

//                       md:px-7
//                       md:py-4
//                     "
//                   >
//                     <span
//                       className="
//                         text-xs
//                         uppercase
//                         tracking-[3px]

//                         md:text-sm
//                       "
//                     >
//                       {item.text}
//                     </span>

//                     <FiArrowDown
//                       className="
//                         transition-transform
//                         duration-500

//                         group-hover:translate-y-1
//                       "
//                     />
//                   </HashLink>
//                 ) : (
//                   <Link
//                     to={item.to}
//                     className="
//                       group
//                       flex
//                       items-center
//                       gap-3

//                       rounded-full

//                       border
//                       border-black/15

//                       bg-white/60

//                       px-5
//                       py-3

//                       backdrop-blur-xl

//                       shadow-[0_15px_35px_rgba(0,0,0,0.08)]

//                       transition-all
//                       duration-500

//                       hover:scale-105
//                       hover:bg-black
//                       hover:text-white

//                       md:px-7
//                       md:py-4
//                     "
//                   >
//                     <span
//                       className="
//                         text-xs
//                         uppercase
//                         tracking-[3px]

//                         md:text-sm
//                       "
//                     >
//                       {item.text}
//                     </span>

//                     <FiArrowDown
//                       className="
//                         transition-transform
//                         duration-500

//                         group-hover:translate-y-1
//                       "
//                     />
//                   </Link>
//                 )}
//               </>
//             )}

//             {/* ICON CIRCLES */}
//             {item.type === "icon" && (
//               <motion.div
//                 whileHover={{
//                   scale: 1.1,
//                   rotate: 10,
//                 }}
//                 animate={{
//                   y: [0, -8, 0],
//                 }}
//                 transition={{
//                   y: {
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   },
//                 }}
//                 className="
//                   flex
//                   h-14
//                   w-14
//                   items-center
//                   justify-center

//                   rounded-full

//                   bg-black

//                   text-2xl
//                   text-white

//                   shadow-[0_20px_40px_rgba(0,0,0,0.2)]

//                   md:h-16
//                   md:w-16
//                   md:text-3xl
//                 "
//               >
//                 {item.icon}
//               </motion.div>
//             )}
//           </motion.div>
//         );
//       })}
//     </>
//   );
// };

// export default FloatingElements;
import React, { useEffect, useRef, useMemo } from "react";
import { FiArrowDown, FiFigma, FiCode, FiLayers } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

// Each element manages its own animation entirely via a ref + rAF loop.
// No shared state, no re-renders after mount.
const FloatingItem = ({ item, dropDelay, stageRef }) => {
  const elRef = useRef(null);
  const stateRef = useRef({
    dropped: false,
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    dropStartTime: null,
    dropDuration: 900 + Math.random() * 400,
    startX: 0,
    targetX: 0,
    targetY: 0,
    rafId: null,
  });

  useEffect(() => {
    const el = elRef.current;
    const stage = stageRef.current;
    if (!el || !stage) return;

    const elW = el.offsetWidth || 130;
    const elH = el.offsetHeight || 48;

    const sW = stage.clientWidth;
    const sH = stage.clientHeight;

    const s = stateRef.current;
    s.startX = Math.random() * Math.max(0, sW - elW);
    s.targetX = Math.random() * Math.max(0, sW - elW);
    s.targetY = Math.random() * Math.max(0, sH - elH);
    s.x = s.targetX;
    s.y = s.targetY;

    // Random drift velocity
    const speed = 0.4 + Math.random() * 0.5;
    const angle = Math.random() * Math.PI * 2;
    s.vx = Math.cos(angle) * speed;
    s.vy = Math.sin(angle) * speed;

    // Start invisible above the stage at startX
    el.style.opacity = "0";
    el.style.left = "0px";
    el.style.top = "0px";
    el.style.transform = `translate(${s.startX}px, -100px) scale(0.6)`;
    el.style.willChange = "transform, opacity";

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    let globalStart = null;

    const tick = (ts) => {
      if (!globalStart) globalStart = ts;
      const elapsed = ts - globalStart;

      if (elapsed < dropDelay) {
        s.rafId = requestAnimationFrame(tick);
        return;
      }

      if (!s.dropped) {
        // Drop phase
        if (!s.dropStartTime) s.dropStartTime = ts;
        const t = Math.min(1, (ts - s.dropStartTime) / s.dropDuration);
        const e = easeOut(t);

        const curX = s.startX + (s.targetX - s.startX) * e;
        const curY = -100 + (s.targetY + 100) * e;
        const scale = 0.6 + 0.4 * e;
        const opacity = Math.min(1, e * 1.8);

        el.style.opacity = String(opacity);
        el.style.transform = `translate(${curX}px, ${curY}px) scale(${scale})`;

        if (t >= 1) {
          s.dropped = true;
          s.x = s.targetX;
          s.y = s.targetY;
          el.style.opacity = "1";
        }
      } else {
        // Free drift phase
        const stageW = stage.clientWidth;
        const stageH = stage.clientHeight;
        const maxX = stageW - el.offsetWidth;
        const maxY = stageH - el.offsetHeight;

        s.x += s.vx;
        s.y += s.vy;

        if (s.x <= 0) {
          s.x = 0;
          s.vx = Math.abs(s.vx);
        }
        if (s.x >= maxX) {
          s.x = maxX;
          s.vx = -Math.abs(s.vx);
        }
        if (s.y <= 0) {
          s.y = 0;
          s.vy = Math.abs(s.vy);
        }
        if (s.y >= maxY) {
          s.y = maxY;
          s.vy = -Math.abs(s.vy);
        }

        el.style.transform = `translate(${s.x}px, ${s.y}px)`;
      }

      s.rafId = requestAnimationFrame(tick);
    };

    s.rafId = requestAnimationFrame(tick);

    return () => {
      if (s.rafId) cancelAnimationFrame(s.rafId);
    };
  }, [dropDelay, stageRef]);

  const pillClass = `
    group flex items-center gap-3
    rounded-full
    border border-black/15
    bg-white/60
    px-5 py-3
    backdrop-blur-xl
    shadow-[0_15px_35px_rgba(0,0,0,0.08)]
    transition-all duration-500
    hover:scale-105 hover:bg-black hover:text-white
    md:px-7 md:py-4
    cursor-pointer select-none
  `;

  const arrowClass = `
    transition-transform duration-500
    group-hover:translate-y-1
  `;

  return (
    <div ref={elRef} style={{ position: "absolute", zIndex: 20 }}>
      {item.type === "link" && (
        <>
          {item.to.includes("#") ? (
            <HashLink smooth to={item.to} className={pillClass}>
              <span className="text-xs uppercase tracking-[3px] md:text-sm">
                {item.text}
              </span>
              <FiArrowDown className={arrowClass} />
            </HashLink>
          ) : (
            <Link to={item.to} className={pillClass}>
              <span className="text-xs uppercase tracking-[3px] md:text-sm">
                {item.text}
              </span>
              <FiArrowDown className={arrowClass} />
            </Link>
          )}
        </>
      )}

      {item.type === "icon" && (
        <div
          className="
            flex h-14 w-14 items-center justify-center
            rounded-full
            bg-black
            text-2xl text-white
            shadow-[0_20px_40px_rgba(0,0,0,0.2)]
            md:h-16 md:w-16 md:text-3xl
            cursor-default
          "
        >
          {item.icon}
        </div>
      )}
    </div>
  );
};

const FloatingElements = () => {
  const stageRef = useRef(null);

  const floatingItems = useMemo(
    () => [
      { id: 1, type: "link", text: "ABOUT", to: "/#about" },
      { id: 2, type: "link", text: "PROJECTS", to: "/projects" },
      { id: 3, type: "icon", icon: <FiFigma /> },
      { id: 4, type: "icon", icon: <FiCode /> },
      { id: 5, type: "icon", icon: <FiLayers /> },
      { id: 6, type: "link", text: "CONTACT", to: "/#contact" },
    ],
    [],
  );

  // Staggered drop delays — each item drops slightly after the previous
  const dropDelays = useMemo(
    () => floatingItems.map((_, i) => i * 100 + Math.random() * 80),
    [floatingItems],
  );

  return (
    // Wrap this inside whatever parent container you already have.
    // stageRef must point to the element that defines the bounding box.
    <div ref={stageRef} className="relative w-full h-full overflow-hidden">
      {floatingItems.map((item, index) => (
        <FloatingItem
          key={item.id}
          item={item}
          dropDelay={dropDelays[index]}
          stageRef={stageRef}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
