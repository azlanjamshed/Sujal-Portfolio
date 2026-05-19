// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";

// // Sample Data (Replace with your actual video paths/URLs)
// const videos = [
//   {
//     id: 1,
//     title: "Commercial Reel",
//     type: "Editing",
//     src: "https://www.w3schools.com/html/mov_bbb.mp4",
//   },
//   {
//     id: 2,
//     title: "Brand Anthem",
//     type: "Color Grade",
//     src: "https://www.w3schools.com/html/mov_bbb.mp4",
//   },
//   {
//     id: 3,
//     title: "Music Video",
//     type: "Directing",
//     src: "https://www.w3schools.com/html/mov_bbb.mp4",
//   },
//   {
//     id: 4,
//     title: "Short Film",
//     type: "VFX",
//     src: "https://www.w3schools.com/html/mov_bbb.mp4",
//   },
// ];

// // --- Individual Video Card Component ---
// // This handles the smart play/pause logic based on scroll position
// const VideoCard = ({ video, setSelectedVideo }) => {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);

//   // Triggers when 40% of the video is visible on screen
//   const isInView = useInView(containerRef, { margin: "-10% 0px", amount: 0.4 });

//   useEffect(() => {
//     if (!videoRef.current) return;

//     // Play when in view, Pause when scrolled away (saves battery/CPU)
//     if (isInView) {
//       videoRef.current
//         .play()
//         .catch((e) => console.log("Autoplay prevented:", e));
//     } else {
//       videoRef.current.pause();
//     }
//   }, [isInView]);

//   return (
//     <motion.div
//       ref={containerRef}
//       // layoutId connects this grid item to the fullscreen lightbox for a smooth morph
//       layoutId={`card-${video.id}`}
//       className="relative cursor-pointer overflow-hidden rounded-2xl bg-black shadow-xl group aspect-video"
//       onClick={() => setSelectedVideo(video)}
//       whileHover={{ scale: 0.98 }}
//       transition={{ duration: 0.4, ease: "easeOut" }}
//     >
//       <motion.video
//         ref={videoRef}
//         src={video.src}
//         muted
//         loop
//         playsInline
//         className="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
//       />

//       {/* Title Overlay */}
//       <motion.div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//         <p className="text-xs font-bold tracking-widest text-[#d96561] uppercase mb-1">
//           {video.type}
//         </p>
//         <h3 className="text-2xl font-bold text-white">{video.title}</h3>
//       </motion.div>
//     </motion.div>
//   );
// };

// // --- Main Portfolio Component ---
// const VideoPortfolio = () => {
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   return (
//     <section className="relative min-h-screen bg-[#f5f5f5] py-24 px-6 lg:px-20 font-['Inter',_sans-serif]">
//       <div className="mx-auto max-w-7xl">
//         <h2 className="mb-12 text-5xl md:text-7xl font-black tracking-tight font-['Bebas_Neue',_sans-serif] text-[#111111]">
//           MOTION WORKS
//         </h2>

//         {/* CSS Grid for the videos */}
//         <div className="grid gap-6 md:grid-cols-2">
//           {videos.map((video) => (
//             <VideoCard
//               key={video.id}
//               video={video}
//               setSelectedVideo={setSelectedVideo}
//             />
//           ))}
//         </div>
//       </div>

//       {/* --- Lightbox Overlay --- */}
//       <AnimatePresence>
//         {selectedVideo && (
//           <>
//             {/* The blurry dark background behind the lightbox */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelectedVideo(null)}
//               className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md cursor-pointer"
//             />

//             {/* The actual Expanded Video */}
//             <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 pointer-events-none">
//               <motion.div
//                 layoutId={`card-${selectedVideo.id}`}
//                 className="relative w-full max-w-6xl overflow-hidden rounded-2xl bg-black shadow-2xl pointer-events-auto aspect-video"
//               >
//                 {/* When the lightbox opens, we mount a NEW video tag.
//                   This one has controls and is NOT muted by default so the user can hear it.
//                 */}
//                 <video
//                   src={selectedVideo.src}
//                   autoPlay
//                   controls
//                   className="h-full w-full object-contain"
//                 />

//                 {/* Close Button */}
//                 <button
//                   onClick={() => setSelectedVideo(null)}
//                   className="absolute top-4 right-4 z-50 rounded-full bg-white/20 p-3 text-white backdrop-blur-md transition-colors hover:bg-white/40"
//                 >
//                   <svg
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <line x1="18" y1="6" x2="6" y2="18"></line>
//                     <line x1="6" y1="6" x2="18" y2="18"></line>
//                   </svg>
//                 </button>
//               </motion.div>
//             </div>
//           </>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default VideoPortfolio;

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Sample Data with your EXACT grid layout mapped to Tailwind classes
const videos = [
  {
    id: 1,
    title: "Joseph",
    // type: "Mobile",
    src: "https://res.cloudinary.com/dcufuk0qt/video/upload/q_auto/f_auto/v1779185835/Joseph_ui_n79gdq.mp4",
    // div 1: 1 column wide, 4 rows tall
    gridClass: "lg:col-span-2  lg:row-span-2 lg:col-start-1 lg:row-start-4",
  },

  {
    id: 2,
    title: "Saas",
    // type: "Landscape",
    src: "https://res.cloudinary.com/dcufuk0qt/video/upload/q_auto/f_auto/v1779185821/Saas_upwee2.mp4",
    // div 2: 2 columns wide, 2 rows tall
    gridClass: "lg:col-span-4  lg:row-span-3 lg:col-start-5 lg:row-start-1",
  },
  {
    id: 3,
    title: "Bart",
    // type: "Landscape",
    src: "https://res.cloudinary.com/dcufuk0qt/video/upload/q_auto/f_auto/v1779185821/bart_kkiwmi.mp4",
    // div 3: 2 columns wide, 2 rows tall
    gridClass: "lg:col-span-2  lg:row-span-2 lg:col-start-3 lg:row-start-4",
  },
  {
    id: 4,
    title: "Trading",
    // type: "Landscape",
    src: "https://res.cloudinary.com/dcufuk0qt/video/upload/q_auto/f_auto/v1779185821/trading_tij2zv.mp4",
    // div 4: 2 columns wide, 2 rows tall
    gridClass: "lg:col-span-2  lg:row-span-2 lg:col-start-5 lg:row-start-4",
  },
  {
    id: 5,
    title: "Apple",
    // type: "Landscape",
    src: "https://res.cloudinary.com/dcufuk0qt/video/upload/q_auto/f_auto/v1779185820/apple_atvm4a.mp4",
    // div 5: 2 columns wide, 2 rows tall
    gridClass: "lg:col-span-2  lg:row-span-2 lg:col-start-7 lg:row-start-4",
  },
  {
    id: 6,
    title: "Gemini",
    // type: "Mobile",
    src: "https://res.cloudinary.com/dcufuk0qt/video/upload/q_auto/f_auto/v1779185836/gemini_ad_m5bb2m.mp4",
    // div 1: 1 column wide, 4 rows tall
    gridClass: "lg:col-span-4  lg:row-span-3 lg:col-start-1 lg:row-start-1",
  },
];
// const videos = [
//   {
//     id: 1,
//     title: "Swiggy",
//     // type: "Mobile",
//     src: "https://ik.imagekit.io/azlan/Sujal/swigy.mp4",
//     // div 1: 1 column wide, 4 rows tall
//     gridClass: "lg:col-span-2  lg:row-span-4 lg:col-start-1 lg:row-start-1",
//   },

//   {
//     id: 2,
//     title: "Saas",
//     // type: "Landscape",
//     src: "https://ik.imagekit.io/azlan/Sujal/Saas.mp4",
//     // div 2: 2 columns wide, 2 rows tall
//     gridClass: "lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-1",
//   },
//   {
//     id: 3,
//     title: "Bart",
//     // type: "Landscape",
//     src: "https://ik.imagekit.io/azlan/Sujal/bart%20%20.mp4",
//     // div 3: 2 columns wide, 2 rows tall
//     gridClass: "lg:col-span-2 lg:row-span-2 lg:col-start-5 lg:row-start-1",
//   },
//   {
//     id: 4,
//     title: "Trading",
//     // type: "Landscape",
//     src: "https://ik.imagekit.io/azlan/Sujal/trading%20.mp4",
//     // div 4: 2 columns wide, 2 rows tall
//     gridClass: "lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-3",
//   },
//   {
//     id: 5,
//     title: "Apple",
//     // type: "Landscape",
//     src: "https://ik.imagekit.io/azlan/Sujal/apple.mp4",
//     // div 5: 2 columns wide, 2 rows tall
//     gridClass: "lg:col-span-2 lg:row-span-2 lg:col-start-5 lg:row-start-3",
//   },
// ];

// --- Individual Video Card ---
const VideoCard = ({ video, setSelectedVideo }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-10% 0px", amount: 0.4 });

  useEffect(() => {
    if (!videoRef.current) return;
    if (isInView) {
      videoRef.current
        .play()
        .catch((e) => console.log("Autoplay prevented:", e));
    } else {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <motion.div
      ref={containerRef}
      layoutId={`card-${video.id}`}
      onClick={() => setSelectedVideo(video)}
      whileHover={{ scale: 1.1, zIndex: 100 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      // Note: We use "h-[300px] lg:h-auto" so it stacks nicely on mobile but fills the grid on desktop
      className={`relative cursor-pointer overflow-hidden  bg-black shadow-xl group h-[300px] lg:h-auto ${video.gridClass}`}
    >
      <motion.video
        ref={videoRef}
        src={video.src}
        muted
        loop
        playsInline
        // object-cover ensures the video fills its specific grid block perfectly
        className="h-full w-full object-center opacity-80 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Title Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#d96561]">
          {video.type}
        </p>
        <h3 className="text-2xl font-bold text-[#d96561]">{video.title}</h3>
      </div>
    </motion.div>
  );
};

// --- Main Portfolio Component ---
const WorkGrid = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="relative min-h-screen bg-[#f5f5f5] py-20 px-6 lg:px-20 font-['Inter',_sans-serif]">
      {/* <div className="mx-auto max-w-7xl mb-12">
        <h2 className="text-5xl md:text-7xl font-black tracking-tight font-['Bebas_Neue',_sans-serif] text-[#111111]">
          SELECTED WORKS
        </h2> */}
      {/* <div className="text-center mb-20">
        <h2 className="text-6xl md:text-7xl font-black mb-6 font-['Bebas_Neue',_sans-serif] text-[#111111]">
          Featured Work
        </h2>
      </div> */}

      {/* Your Custom Layout Grid */}
      {/* On mobile it is 1 column. On 'lg' screens, it becomes your exact 5x4 grid */}
      {/* <div className="mx-auto grid grid-cols-1  lg:h-[800px] lg:grid-cols-6 lg:grid-rows-5">
        {videos.map((video) => (
          // <VideoCard
          //   key={video.id}
          //   video={video}
          //   setSelectedVideo={setSelectedVideo}
          // />
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src={video.src} type="video/mp4" />
          </video>
        ))}
      </div> */}
      <div className="mx-auto grid grid-cols-1  lg:h-[800px] lg:grid-cols-8 lg:grid-rows-4">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            setSelectedVideo={setSelectedVideo}
          />
        ))}
      </div>

      {/* --- Lightbox Overlay --- */}
      <AnimatePresence>
        {selectedVideo && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="fixed inset-0 z-40 cursor-pointer bg-black/90 backdrop-blur-md"
            />

            <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
              <motion.div
                layoutId={`card-${selectedVideo.id}`}
                className="pointer-events-auto relative flex h-full max-h-[90vh] w-full max-w-6xl items-center justify-center overflow-hidden rounded-2xl bg-black shadow-2xl"
              >
                <video
                  src={selectedVideo.src}
                  autoPlay
                  controls
                  // object-contain is crucial here!
                  // It ensures vertical videos stay vertical and landscape videos stay landscape.
                  className="h-full w-full object-contain"
                />

                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute right-4 top-4 z-50 rounded-full bg-white/20 p-3 text-white backdrop-blur-md transition-colors hover:bg-white/40"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkGrid;
