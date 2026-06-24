"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
    Scissors,
    Sparkles,
    Flower2,
    Star,
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    MessageCircle,
    Clock,
    Users,
    Award,
    CalendarDays,
} from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
// Data 
import { WA_BASE } from '../data/credentials';
import { services, stats, testimonials, beforeAfterPairs } from '@/data/mockData';


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
            <section ref={heroRef} className="relative h-screen min-h-[600px] overflow-hidden flex items-center">
                {/* Parallax photo */}
                <motion.div className="absolute inset-0 scale-110" style={{ y: heroY }}>
                    <Image
                        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&h=900&fit=crop"
                        alt="Dealova Beauty Care Salon"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/80 via-[#1E1B4B]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E1B4B]/30 to-transparent" />

                {/* Hero content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                        className="max-w-2xl"
                    >
                        {/* Floating badge */}
                        <motion.div
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm font-medium mb-6"
                            style={{ fontFamily: "'Inter', sans-serif", animation: "float 3s ease-in-out infinite" }}
                        >
                            <span className="text-yellow-300">✦</span>
                            Open Today 08.00 – 20.00 WIB
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-5"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Temukan Kecantikan <em>Terbaik</em> <br className="hidden sm:block" />Versi Kamu
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Layanan perawatan rambut, kulit, dan tubuh dengan sentuhan profesional. Karena setiap wanita berhak tampil cantik.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
                            <Link
                                href="/layanan"
                                className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#8B7CF6] to-[#7DD3FC] text-white font-semibold text-sm hover:opacity-90 hover:shadow-xl hover:scale-105 transition-all duration-200 min-h-[52px]"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Lihat Layanan Kami
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a
                                href={`${WA_BASE}Halo%20Dealova%20Beauty%20Care%2C%20saya%20ingin%20booking.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/40 text-white font-semibold text-sm hover:bg-white/25 hover:scale-105 transition-all duration-200 min-h-[52px]"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                <MessageCircle className="w-4 h-4" />
                                Hubungi via WhatsApp
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-1.5"
                    >
                        <div className="w-1.5 h-2.5 rounded-full bg-white/70" />
                    </motion.div>
                </div>
            </section>

            {/* ─── STATS BAR ───────────────────────────────────────────── */}
            <section className="py-12 bg-[#F8F7FF] border-y border-[#EDE9FE]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[#EDE9FE]">
                        {stats.map((s) => (
                            <StatItem key={s.label} {...s} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SERVICES PREVIEW ────────────────────────────────────── */}
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
                            Our Services
                        </p>
                        <h2
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B4B]"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Layanan Unggulan Kami
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {services.map((s, i) => (
                            <motion.div
                                key={s.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.15 } } }}
                            >
                                <motion.div
                                    className={`bg-gradient-to-br ${s.color} rounded-3xl p-8 border border-[#EDE9FE] cursor-pointer h-full flex flex-col`}
                                    whileHover={{ scale: 1.03, boxShadow: `0 8px 30px rgba(139,124,246,0.2)`, borderColor: s.accent }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                                        style={{ background: s.accent + "20" }}
                                    >
                                        <s.icon className="w-7 h-7" style={{ color: s.accent }} />
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-[#1E1B4B] mb-2"
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        {s.title}
                                    </h3>
                                    <p
                                        className="text-[#6B7280] text-sm leading-relaxed flex-1 mb-5"
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                        {s.desc}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span
                                            className="text-sm font-semibold"
                                            style={{ color: s.accent, fontFamily: "'Inter', sans-serif" }}
                                        >
                                            {s.price}
                                        </span>
                                        <Link
                                            href={s.href}
                                            className="text-sm font-medium text-[#6B7280] hover:text-[#8B7CF6] flex items-center gap-1 transition-colors"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            Detail <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </motion.div>
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
                            href="/layanan"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border-2 border-[#8B7CF6] text-[#8B7CF6] font-semibold text-sm hover:bg-[#8B7CF6] hover:text-white transition-all duration-200"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Lihat Semua Layanan <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

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
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeUp}
                        className="rounded-3xl bg-gradient-to-br from-[#8B7CF6] to-[#7DD3FC] p-12 md:p-16 text-center text-white overflow-hidden relative"
                    >
                        {/* Decorative blobs */}
                        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 translate-x-24 -translate-y-24" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/10 -translate-x-16 translate-y-16" />

                        <div className="relative z-10">
                            <p
                                className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-4"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Ready to Glow?
                            </p>
                            <h2
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Siap Tampil Cantik Hari Ini?
                            </h2>
                            <p
                                className="text-white/80 text-base mb-8 max-w-lg mx-auto"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Hubungi kami via WhatsApp dan rasakan pengalaman salon premium yang memanjakan.
                            </p>
                            <a
                                href={`${WA_BASE}Halo%20Dealova%20Beauty%20Care%2C%20saya%20ingin%20booking%20sekarang.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-[#8B7CF6] font-bold text-base hover:shadow-2xl hover:scale-105 transition-all duration-200 min-h-[56px]"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                <MessageCircle className="w-5 h-5" />
                                Booking Sekarang via WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
