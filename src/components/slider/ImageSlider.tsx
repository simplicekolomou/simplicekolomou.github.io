"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageSliderProps {
    images: string[];
    alt: string;
    autoplay?: boolean;
    interval?: number;
}

export default function ImageSlider({
                                        images,
                                        alt,
                                        autoplay = true,
                                        interval = 3000,
                                    }: ImageSliderProps) {

    const plugin = React.useRef(
        Autoplay({ delay: interval, playOnInit: autoplay, stopOnInteraction: true })
    )

    const handleMouseEnter = () => {
        if (autoplay && plugin.current && plugin.current.stop) {
            plugin.current.stop();
        }
    };

    const handleMouseLeave = () => {
        if (autoplay && plugin.current && plugin.current.play) {
            plugin.current.play();
        }
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="relative w-full mb-8">
            <Carousel
                plugins={[plugin.current]}
                opts={{
                    loop: true,
                    align: "start",
                }}
                className="w-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <CarouselContent>
                    {images.map((src, index) => (
                        <CarouselItem key={index}>
                            <div className="relative w-full h-96 overflow-hidden rounded-lg bg-muted">
                                <Image
                                    src={src}
                                    alt={`${alt} - ${index + 1}`}
                                    fill
                                    className="object-contain transition-opacity duration-500"
                                    priority={index === 0}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {images.length > 1 && (
                    <>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                    </>
                )}
            </Carousel>
        </div>
    );
}