"use client";

import { useState, useRef, useCallback, useEffect } from "react";

export default function BeforeAfterSlider({ beforeSrc, afterSrc, altText = "Before After" }) {
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const updateSlider = useCallback((clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((clientX - rect.left) / rect.width) * 100;
        setSliderPos(Math.max(2, Math.min(98, x)));
    }, []);

    const handleMouseMove = useCallback(
        (e) => {
            if (!isDragging) return;
            updateSlider(e.clientX);
        },
        [isDragging, updateSlider]
    );

    const handleTouchMove = useCallback(
        (e) => {
            if (!isDragging) return;
            updateSlider(e.touches[0].clientX);
        },
        [isDragging, updateSlider]
    );

    const stopDragging = useCallback(() => setIsDragging(false), []);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", stopDragging);
            window.addEventListener("touchmove", handleTouchMove, { passive: false });
            window.addEventListener("touchend", stopDragging);
        }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", stopDragging);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", stopDragging);
        };
    }, [isDragging, handleMouseMove, handleTouchMove, stopDragging]);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] select-none overflow-hidden rounded-2xl cursor-ew-resize shadow-salon"
            onMouseDown={(e) => { setIsDragging(true); updateSlider(e.clientX); }}
            onTouchStart={(e) => { setIsDragging(true); updateSlider(e.touches[0].clientX); }}
        >
            {/* Before image — full width */}
            <img
                src={beforeSrc}
                alt={`Before - ${altText}`}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
            />

            {/* After image — clipped */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
                <img
                    src={afterSrc}
                    alt={`After - ${altText}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                />
            </div>

            {/* Divider line */}
            <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
                style={{ left: `${sliderPos}%` }}
            />

            {/* Handle */}
            <div
                className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center cursor-ew-resize border-2 border-[#8B7CF6]"
                style={{ left: `${sliderPos}%` }}
            >
                <svg className="w-5 h-5 text-[#8B7CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
                </svg>
            </div>

            {/* Labels */}
            <span
                className="absolute bottom-3 left-3 text-xs font-semibold text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full z-10"
                style={{ fontFamily: "'Inter', sans-serif" }}
            >
                Before
            </span>
            <span
                className="absolute bottom-3 right-3 text-xs font-semibold text-white bg-[#8B7CF6]/80 backdrop-blur-sm px-2.5 py-1 rounded-full z-10"
                style={{ fontFamily: "'Inter', sans-serif" }}
            >
                After
            </span>
        </div>
    );
}
