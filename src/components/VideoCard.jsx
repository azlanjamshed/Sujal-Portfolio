import { FaPlay } from "react-icons/fa";

const VideoCard = ({ image, views }) => {
  return (
    <div className="group bg-white p-4 rounded-[35px] shadow-xl border border-gray-200 hover:-translate-y-3 transition-all duration-500">
      <div className="overflow-hidden rounded-[25px] relative">
        <img
          src={image}
          alt=""
          className="h-[500px] w-full object-cover group-hover:scale-110 duration-700"
        />

        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center">
          <button className="bg-white p-5 rounded-full">
            <FaPlay />
          </button>
        </div>
      </div>

      <h2 className="text-center text-4xl font-black mt-6">{views}</h2>
    </div>
  );
};

export default VideoCard;
