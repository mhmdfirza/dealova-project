"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/mockData";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesPreview() {
    return (
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
    );
}