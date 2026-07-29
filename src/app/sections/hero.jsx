"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WA_BASE } from "@/data/credentials";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
    return (
        // <section ref={heroRef} className="relative h-screen min-h-[600px] overflow-hidden flex items-center">
        <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center">
            {/* Parallax photo */}
            <motion.div className="absolute inset-0 scale-110"> {/* </section>style={{ y: heroY }}> */}
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
                        Open Today 08.00 – 18.00 WIB
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
                            href={WA_LINK}
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
    );
}