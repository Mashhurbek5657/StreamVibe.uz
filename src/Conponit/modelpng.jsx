import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { OurSevise } from "../../constants/data";

export default function MovieDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = OurSevise.find((m) => m.id.toString() === id);

    if (!movie) return <div className="text-white p-6">Movie not found</div>;

    return (
        <div className="p-6 text-white bg-[#0f0f0f] min-h-screen">
            <button
                onClick={() => navigate(-1)}
                className="text-gray-400 hover:text-white text-xl mb-4"
            >
                ← Back
            </button>

            <div className="max-w-4xl mx-auto">
                <iframe
                    src={toEmbedUrl(movie.video)}
                    title={movie.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-[400px] rounded-xl mb-6"
                />
                <h2 className="text-3xl font-bold mb-3">{movie.name}</h2>
                <p className="text-gray-300">{movie.description}</p>
            </div>
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
