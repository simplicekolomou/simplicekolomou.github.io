"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface ImageSliderProps {
    images: string[];
    alt: string;
    autoplay?: boolean;      // active/désactive l'autoplay (défaut: true)
    interval?: number;       // délai en ms (défaut: 3000)
}

export default function ImageSlider({ images, alt, autoplay = true, interval = 3000 }: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoplay);

    const goPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const goNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    // Autoplay : changement automatique à intervalle régulier
    useEffect(() => {
        if (!isPlaying || images.length <= 1) return;
        const timer = setInterval(goNext, interval);
        return () => clearInterval(timer);
    }, [isPlaying, interval, goNext, images.length]);

    if (!images || images.length === 0) return null;

    return (
        <div
            className="relative w-full h-96 mb-8 rounded-lg overflow-hidden bg-muted group"
            onMouseEnter={() => autoplay && setIsPlaying(false)}   // pause au survol
            onMouseLeave={() => autoplay && setIsPlaying(true)}    // reprise
        >
            <Image
                src={images[currentIndex]}
                alt={`${alt} - ${currentIndex + 1}`}
                fill={true}
                className="object-cover transition-opacity duration-500"
                priority={currentIndex === 0}
            />

            {/* Flèches de navigation */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={goPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Précédent"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        onClick={goNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Suivant"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Bouton play/pause (visible au survol) */}
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label={isPlaying ? "Pause" : "Lecture"}
                    >
                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </button>

                    {/* Dots indicateurs */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    idx === currentIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/80"
                                }`}
                                aria-label={`Aller à l'image ${idx + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}