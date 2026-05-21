// import React, { useState } from "react";
// import { project } from "../assets/project";
// const categories = ["Saas Animation", "UI Motion", "Short Form Content"];
// const Project = () => {
//   const [active, setActive] = useState("all");
//   const filteredProjects =
//     active === "Saas Animation"
//       ? project
//       : project.filter((p) => p.category === active);

//   return (
//     <div>
//       <div className="max-w-7xl mx-auto px-6 mt-10 flex flex-wrap gap-1 md:gap-4 justify-center">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => {
//               setActive(cat);

//               window.scrollTo({ top: 0, behavior: "smooth" });
//             }}
//             className={` text-xs sm:text-base px-3 md:px-6 py-1 md:py-2 rounded-full font-medium transition ${
//               active === cat
//                 ? "bg-orange-600 text-white"
//                 : "bg-gray-200 text-gray-600 hover:bg-gray-300"
//             }`}
//           >
//             {/* {cat === "ALL" ? "All Juices" : cat} */}
//             {categories}
//           </button>
//         ))}
//       </div>
//       <div className="transition-all duration-300">
//         <div
//           className={`max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 mt-12 `}
//         >
//           {filteredProjects.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//         <div className="flex justify-center items-center gap-3 mt-20 flex-wrap">
//           {/* Prev */}
//           <button
//             onClick={() => {
//               setCurrentPage((p) => p - 1);
//             }}
//             disabled={currentPage === 1}
//             className="px-2 py-1 md:px-4 md:py-2 bg-gray-200 rounded disabled:opacity-80"
//           >
//             {isRTL ? "→" : "←"}
//           </button>

//           {/* Page Numbers */}
//           {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//             <button
//               key={page}
//               onClick={() => {
//                 setCurrentPage(page);
//                 // window.scrollTo({ top: 0, behavior: "smooth" });
//               }}
//               className={`px-3 py-1 md:px-4 md:py-2 rounded ${
//                 currentPage === page
//                   ? "bg-orange-500 text-white"
//                   : "bg-gray-200"
//               }`}
//             >
//               {page}
//             </button>
//           ))}

//           {/* Next */}
//           <button
//             onClick={() => {
//               setCurrentPage((p) => p + 1);
//             }}
//             disabled={currentPage === totalPages}
//             className="px-2 py-1 md:px-4 md:py-2 bg-gray-200 rounded disabled:opacity-80"
//           >
//             {isRTL ? "←" : "→"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;

import React, { useState } from "react";
import { project } from "../assets/project";
import ProductCard from "../components/ProjectCard";
import { NavLink } from "react-router-dom";

const categories = ["Saas Animation", "UI Motion", "Short Form Content"];

const ITEMS_PER_PAGE = 8;

const Project = () => {
  const [active, setActive] = useState("Saas Animation");
  const [currentPage, setCurrentPage] = useState(1);

  // FILTER PROJECTS
  const filteredProjects =
    active === "Saas Animation"
      ? project.filter((p) => p.category === "Saas Animation")
      : project.filter((p) => p.category === active);

  // PAGINATION
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentProducts = filteredProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <section
      id="projects"
      className="
        min-h-screen
        bg-[#00181C]
        px-5
        py-20

        md:px-10

        lg:px-20
      "
    >
      {/* HEADING */}
      <div className="mb-14 text-center">
        <p
          className="
            mb-4
            text-xs
            uppercase
            tracking-[5px]
            text-[#FF4E75]
          "
        >
          Portfolio
        </p>

        <h2
          className="
            font-['Bebas_Neue',_sans-serif]
            text-5xl
            leading-[0.9]
            tracking-tight
            text-white

            md:text-7xl
          "
        >
          SELECTED WORK
        </h2>
      </div>

      {/* CATEGORY BUTTONS */}
      <div
        className="
          mx-auto
          mb-16
          flex
          max-w-5xl
          flex-wrap
          justify-center
          gap-3
        "
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              setCurrentPage(1);

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className={`
              rounded-full
              border
              px-5
              py-3

              text-xs
              uppercase
              tracking-[3px]

              transition-all
              duration-500

              md:px-7
              md:text-sm

              ${
                active === cat
                  ? `
                    border-[#FF4E75]
                    bg-[#FF4E75]
                    text-white
                    shadow-[0_10px_40px_rgba(255,78,117,0.35)]
                  `
                  : `
                    border-white/10
                    bg-white/[0.03]
                    text-white/60
                    hover:border-[#FF4E75]/40
                    hover:text-[#FF4E75]
                  `
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-6

          grid-cols-1

          sm:grid-cols-2

          lg:grid-cols-3

          xl:grid-cols-4
        "
      >
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* EMPTY STATE */}
      {currentProducts.length === 0 && (
        <div className="mt-20 text-center">
          <p className="text-white/50">No projects found.</p>
        </div>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div
          className="
            mt-20
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
          "
        >
          {/* PREV */}
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-full

              border
              border-white/10

              bg-white/[0.03]

              text-white/70

              transition-all
              duration-300

              hover:border-[#FF4E75]
              hover:text-[#FF4E75]

              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            ←
          </button>

          {/* PAGE NUMBERS */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`
                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-full

                text-sm

                transition-all
                duration-300

                ${
                  currentPage === page
                    ? `
                      bg-[#FF4E75]
                      text-white
                      shadow-[0_10px_40px_rgba(255,78,117,0.35)]
                    `
                    : `
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-white/60

                      hover:border-[#FF4E75]
                      hover:text-[#FF4E75]
                    `
                }
              `}
            >
              {page}
            </button>
          ))}

          {/* NEXT */}
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-full

              border
              border-white/10

              bg-white/[0.03]

              text-white/70

              transition-all
              duration-300

              hover:border-[#FF4E75]
              hover:text-[#FF4E75]

              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            →
          </button>
        </div>
      )}
      <div className="mt-10 text-center">
        <NavLink
          to={"/"}
          className="
                  group
                  relative
                  cursor-pointer
                  overflow-hidden

                  rounded-full

                  border
                  border-[#FF4E75]/30

                  bg-[#FF4E75]

                  px-7
                  py-3

                  text-sm
                  font-medium
                  uppercase
                  tracking-[3px]
                  text-white

                  shadow-[0_15px_40px_rgba(255,78,117,0.35)]

                  transition-all
                  duration-500
                  mt-5
                "
        >
          Home
        </NavLink>
      </div>
    </section>
  );
};

export default Project;
