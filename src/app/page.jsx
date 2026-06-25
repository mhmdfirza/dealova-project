"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
// Data
import { WA_BASE } from '../data/credentials';
import { services, testimonials, beforeAfterPairs } from '@/data/mockData';
// Sections
import Hero from "./sections/hero";
import StatsBar from "./sections/statsbar"
import ServicesPreview from "./sections/servicespreview"
import CTABanner from "./sections/ctabanner"


// ─── Fade-up animation variant ──────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ─── COUNTER HOOK ────────────────────────────────────────────────────
function useCounter(end, duration = 1500) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        const numEnd = parseInt(end.replace(/\D/g, ""), 10);
        let startTime;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * numEnd));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [started, end, duration]);

    return { count, ref };
}

// ─── STAT ITEM with counter ──────────────────────────────────────────
function StatItem({ icon: Icon, value, label }) {
    const numericPart = parseInt(value.replace(/\D/g, ""), 10);
    const suffix = value.replace(/\d/g, "");
    const { count, ref } = useCounter(value);

    return (
        <div ref={ref} className="flex flex-col items-center gap-2 px-6">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-salon flex items-center justify-center mb-1">
                <Icon className="w-5 h-5 text-[#8B7CF6]" />
            </div>
            <span
                className="text-3xl font-bold text-[#1E1B4B]"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                {count}{suffix}
            </span>
            <span
                className="text-sm text-[#6B7280] text-center"
                style={{ fontFamily: "'Inter', sans-serif" }}
            >
                {label}
            </span>
        </div>
    );
}

// ─── HOME PAGE ───────────────────────────────────────────────────────
export default function HomePage() {
    const heroRef = useRef(null);
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 600], [0, 150]);

    // Testimonial carousel
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            {/* ─── HERO ─────────────────────────────────────────────────── */}
            <Hero />

            {/* ─── STATS BAR ───────────────────────────────────────────── */}
            <StatsBar />

            {/* ─── SERVICES PREVIEW ────────────────────────────────────── */}
            <ServicesPreview />

            {/* ─── BEFORE-AFTER GALLERY PREVIEW ────────────────────────── */}
            <section className="py-20 bg-[#F8F7FF]">
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
                            Transformasi
                        </p>
                        <h2
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B4B]"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Transformasi Nyata,<br />Bukan Sekadar Janji
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {beforeAfterPairs.map((pair, i) => (
                            <motion.div
                                key={pair.label}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.15 } } }}
                            >
                                <div className="space-y-3">
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
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mt-10"
                    >
                        <Link
                            href="/galeri"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border-2 border-[#8B7CF6] text-[#8B7CF6] font-semibold text-sm hover:bg-[#8B7CF6] hover:text-white transition-all duration-200"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Lihat Galeri Lengkap <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
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
                            Testimoni
                        </p>
                        <h2
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B4B]"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Kata Mereka Tentang Kami
                        </h2>
                    </motion.div>

                    {/* Carousel */}
                    <div className="relative max-w-2xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTestimonial}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ duration: 0.4 }}
                                className="bg-[#F8F7FF] rounded-3xl p-8 border border-[#EDE9FE] shadow-salon"
                            >
                                <div className="flex items-center gap-1 mb-4">
                                    {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <blockquote
                                    className="text-[#1E1B4B] text-base leading-relaxed mb-6 italic"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    "{testimonials[activeTestimonial].text}"
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonials[activeTestimonial].avatar}
                                        alt={testimonials[activeTestimonial].name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-[#EDE9FE]"
                                    />
                                    <div>
                                        <p
                                            className="font-semibold text-[#1E1B4B]"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            {testimonials[activeTestimonial].name}
                                        </p>
                                        <p
                                            className="text-xs text-[#8B7CF6]"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            {testimonials[activeTestimonial].service}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Controls */}
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <button
                                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                                className="w-10 h-10 rounded-full border border-[#EDE9FE] flex items-center justify-center text-[#8B7CF6] hover:bg-[#F8F7FF] hover:border-[#8B7CF6] transition-all"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTestimonial(i)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${i === activeTestimonial ? "bg-[#8B7CF6] w-6" : "bg-[#EDE9FE]"
                                        }`}
                                />
                            ))}
                            <button
                                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                                className="w-10 h-10 rounded-full border border-[#EDE9FE] flex items-center justify-center text-[#8B7CF6] hover:bg-[#F8F7FF] hover:border-[#8B7CF6] transition-all"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CTA BANNER ───────────────────────────────────────────── */}
            <CTABanner />
        </>
    );
}
