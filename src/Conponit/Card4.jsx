import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/a11y";

import Img6 from "./Vector 619 (1).png";
import { OurSevise2 } from "../../constants/data2";

export default function MoviesSwiper() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="contenr">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {OurSevise2.map((movie, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => setSelected(movie)}
              className="bg-[#1A1A1A] border border-[#262626] rounded-lg overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={movie.image}
                alt={movie.name}
                className="w-full h-48 object-cover cursor-pointer transition-transform hover:scale-[1.03]"
              />
              <div className="p-4 flex justify-between items-center">
                <h3 className="text-lg font-bold">{movie.name}</h3>
                <img src={Img6} alt="" className="w-6 h-6" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl max-w-3xl w-full overflow-hidden relative shadow-2xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-5 text-gray-400 hover:text-white text-3xl font-bold"
            >
              ×
            </button>

            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title={selected.name}
                src={toEmbedUrl(selected.video)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[400px]"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">{selected.name}</h2>
              <p className="text-gray-300">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function toEmbedUrl(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.slice(1);
      return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
  } catch (err) {
    console.warn("URL xato:", err);
  }
  return url;
}