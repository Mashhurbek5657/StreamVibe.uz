import React, { useState, useEffect } from "react";
import Img6 from './Vector 619 (1).png'

export default function Card3() {
    const [movies, setMovies] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        fetch("/src/movies2.json")
            .then((res) => res.json())
            .then((data) => setMovies(data.movies))
            .catch((err) => console.error("JSON yuklashda xato:", err));
    }, []);

    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {movies.map((movie, index) => (
                    <div
                        key={index}
                        onClick={() => setSelected(movie)}
                        className=" flex gap-20 mt-10 cursor-pointer">
                        <div className="cards">
                            <img
                                src={movie.image}
                                alt={movie.name}
                                className="w-full h-48 object-cover rounded-[8px]"
                            />
                            <div className=" flex justify-between items-center">
                                <br />
                                <div className='fon'>
                                    <div className="p-5">
                                        <h2 className="text-[17px]">{movie.name}</h2>
                                    </div>
                                </div>
                                <img src={Img6} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selected && (
                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
                    <div className="bg-gray-900 mt-[100px] h-[600px] rounded-xl max-w-3xl w-full overflow-hidden relative">
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-5 right-3 text-gray-400 hover:text-white text-2xl"
                        >
                            ✕
                        </button>

                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                title={selected.name}
                                src={toEmbedUrl(selected.video)}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-[500px]"
                            />
                        </div>

                        <div className="p-5">
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