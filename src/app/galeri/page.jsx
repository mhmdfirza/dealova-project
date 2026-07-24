"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const filterTabs = ["Semua", "Rambut", "Wajah", "Tubuh"];

const galleryImages = [
    { src: "https://images.unsplash.com/photo-1712213396688-c6f2d536671f?w=600&h=700&&auto-format", category: "Rambut", span: "row-span-2", label: "Hair Coloring" },
    { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop", category: "Wajah", span: "", label: "Facial Treatment" },
    { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop", category: "Tubuh", span: "", label: "Body Scrub" },
    { src: "https://images.unsplash.com/photo-1700760934268-8aa0ef52ce0a?w=600&h=400&fit=crop", category: "Rambut", span: "", label: "Woman Haircut" },
    { src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=700&fit=crop", category: "Wajah", span: "row-span-2", label: "Brightening Facial" },
    { src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop", category: "Tubuh", span: "", label: "Aromatherapy Massage" },
    { src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&h=400&fit=crop", category: "Rambut", span: "", label: "Hair Highlight" },
    { src: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&h=500&fit=crop", category: "Tubuh", span: "", label: "Spa Treatment" },
    { src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop", category: "Wajah", span: "", label: "Acne Treatment" },
    { src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=500&fit=crop", category: "Tubuh", span: "", label: "Body Wrap" },
    { src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=600&fit=crop", category: "Rambut", span: "row-span-2", label: "Creambath Result" },
    { src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=400&fit=crop", category: "Wajah", span: "", label: "Skin Glow" },
];

const beforeAfterPairs = [
    {
        before: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=700&h=500&fit=crop",
        after: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=700&h=500&fit=crop",
        label: "Hair Coloring Transformation",
    },
    {
        before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&h=500&fit=crop",
        after: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&h=500&fit=crop",
        label: "Facial Brightening Transformation",
    },
    {
        before: "https://images.unsplash.com/photo-1700522924565-9fad1c05469e?w=700&h=500&fit=crop",
        after: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=700&h=500&fit=crop",
        label: "Full Body Scrub Result",
    },
    {
        before: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=700&h=500&fit=crop",
        after: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=700&h=500&fit=crop",
        label: "Smoothing & Coloring",
    },
];

export default function GaleriPage() {
    const [activeFilter, setActiveFilter] = useState("Semua");
    const [lightboxSrc, setLightboxSrc] = useState(null);
    const [lightboxLabel, setLightboxLabel] = useState("");

    const filtered =
        activeFilter === "Semua"
            ? galleryImages
            : galleryImages.filter((img) => img.category === activeFilter);

    const openLightbox = (src, label) => {
        setLightboxSrc(src);
        setLightboxLabel(label);
    };

    return (
        <>
            {/* ─── PAGE HEADER ──────────────────────────────────────────── */}
            <section className="relative pt-32 pb-16 bg-[#1E1B4B] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&h=500&fit=crop"
                        alt="Galeri Salon"
                        fill
                        className="object-cover opacity-20"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#1E1B4B]/80 to-[#1E1B4B]" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[#C4B5FD] text-sm font-semibold uppercase tracking-widest mb-3"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Gallery
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Galeri Transformasi
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-white/60 max-w-lg mx-auto"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Lihat hasil nyata perawatan kami — dari sebelum hingga sesudah treatment.
                    </motion.p>
                </div>
            </section>

            {/* ─── FILTER ──────────────────────────────────────────────── */}
            <section className="py-8 bg-white border-b border-[#EDE9FE]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-2 flex-wrap">
                    {filterTabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveFilter(tab)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === tab
                                ? "bg-gradient-to-r from-[#8B7CF6] to-[#7DD3FC] text-white shadow-md"
                                : "bg-[#F8F7FF] text-[#6B7280] border border-[#EDE9FE] hover:border-[#8B7CF6] hover:text-[#8B7CF6]"
                                }`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </section>

            {/* ─── MASONRY GALLERY ─────────────────────────────────────── */}
            <section className="py-16 bg-[#F8F7FF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFilter}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
                        >
                            {filtered.map((img, i) => (
                                <motion.div
                                    key={img.src + i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group shadow-salon"
                                    onClick={() => openLightbox(img.src.replace(/w=600/, "w=1200"), img.label)}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.label}
                                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <span
                                            className="text-white text-sm font-medium"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            {img.label}
                                        </span>
                                    </div>
                                    <span
                                        className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded-full ${img.category === "Rambut"
                                            ? "bg-violet-100 text-violet-700"
                                            : img.category === "Wajah"
                                                ? "bg-sky-100 text-sky-700"
                                                : "bg-emerald-100 text-emerald-700"
                                            }`}
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                        {img.category}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* ─── BEFORE-AFTER SLIDERS ────────────────────────────────── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeUp}
                        className="text-center mb-14"
                    >
                        <p
                            className="text-[#8B7CF6] text-sm font-semibold uppercase tracking-widest mb-3"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Before & After
                        </p>
                        <h2
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B4B]"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Lihat Perbedaannya Sendiri
                        </h2>
                        <p
                            className="mt-3 text-[#6B7280] max-w-md mx-auto text-sm"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Geser handle untuk melihat hasil sebelum dan sesudah treatment
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                        {beforeAfterPairs.map((pair, i) => (
                            <motion.div
                                key={pair.label}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.12 } } }}
                                className="space-y-3"
                            >
                                <BeforeAfterSlider
                                    beforeSrc={pair.before}
                                    afterSrc={pair.after}
                                    altText={pair.label}
                                />
                                <p
                                    className="text-center text-sm font-medium text-[#6B7280]"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    {pair.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── LIGHTBOX ────────────────────────────────────────────── */}
            <AnimatePresence>
                {lightboxSrc && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setLightboxSrc(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="relative max-w-4xl max-h-[90vh] w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={lightboxSrc}
                                alt={lightboxLabel}
                                className="w-full h-full object-contain rounded-2xl"
                            />
                            <p
                                className="text-center text-white/80 text-sm mt-3"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                {lightboxLabel}
                            </p>
                            <button
                                onClick={() => setLightboxSrc(null)}
                                className="absolute -top-4 -right-4 w-10 h-10 bg-white text-[#1E1B4B] rounded-full flex items-center justify-center shadow-xl hover:bg-[#F8F7FF] transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
