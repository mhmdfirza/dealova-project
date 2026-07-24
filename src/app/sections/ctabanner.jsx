"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WA_BASE } from "@/data/credentials";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CTABanner() {
    return (
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
    );
}