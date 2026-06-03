"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Sparkles, Star, Heart } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const values = [
    {
        icon: Shield,
        title: "Kepercayaan",
        desc: "Kami menjaga kepercayaan setiap klien dengan memberikan layanan transparan, jujur, dan hasil yang konsisten.",
    },
    {
        icon: Sparkles,
        title: "Kebersihan",
        desc: "Standar kebersihan tinggi diterapkan di setiap sesi — alat steril, ruangan bersih, dan produk aman bersertifikat.",
    },
    {
        icon: Star,
        title: "Keprofesionalan",
        desc: "Tim kami terlatih secara profesional dan terus mengikuti perkembangan tren kecantikan terkini.",
    },
    {
        icon: Heart,
        title: "Kehangatan",
        desc: "Setiap klien diperlakukan seperti keluarga — hangat, ramah, dan penuh perhatian dari awal hingga akhir.",
    },
];

const team = [
    {
        name: "Dewi Rahayu",
        role: "Hair Specialist",
        specialty: "Coloring & Smoothing Expert",
        experience: "7 tahun pengalaman",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&crop=face",
    },
    {
        name: "Sinta Amelia",
        role: "Skincare Therapist",
        specialty: "Facial & Acne Specialist",
        experience: "5 tahun pengalaman",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop&crop=face",
    },
    {
        name: "Rani Kusuma",
        role: "Spa & Body Therapist",
        specialty: "Massage & Body Treatment",
        experience: "6 tahun pengalaman",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop&crop=face",
    },
];

export default function TentangPage() {
    return (
        <>
            {/* ─── PAGE HEADER ──────────────────────────────────────────── */}
            <section className="relative pt-32 pb-16 bg-[#1E1B4B] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1600&h=500&fit=crop"
                        alt="Tentang Kami"
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
                        About Us
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Tentang Kami
                    </motion.h1>
                </div>
            </section>

            {/* ─── STORY ───────────────────────────────────────────────── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={fadeUp}
                        >
                            <p
                                className="text-[#8B7CF6] text-sm font-semibold uppercase tracking-widest mb-3"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Our Story
                            </p>
                            <h2
                                className="text-3xl sm:text-4xl font-bold text-[#1E1B4B] mb-5 leading-tight"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Didirikan dengan Cinta untuk Kecantikan Wanita
                            </h2>
                            <div className="space-y-4 text-[#6B7280]" style={{ fontFamily: "'Inter', sans-serif" }}>
                                <p className="leading-relaxed">
                                    Dealova Beauty Care Salon lahir dari mimpi sederhana — menjadi tempat di mana setiap wanita bisa merasa cantik, nyaman, dan percaya diri tanpa harus merogoh kocek dalam. Didirikan pada tahun 2019 di Kediri, kami memulai perjalanan kami dari sebuah studio kecil dengan visi besar.
                                </p>
                                <p className="leading-relaxed">
                                    Kini, dengan lebih dari 500 pelanggan setia dan tim yang berpengalaman, kami terus tumbuh menjadi salon kepercayaan wanita Kediri. Kami percaya bahwa kecantikan sejati lahir dari perawatan yang tulus, dan itulah yang selalu kami berikan kepada setiap klien kami.
                                </p>
                                <p className="leading-relaxed">
                                    <em className="font-medium text-[#1E1B4B]">"Every Woman Deserve To Be Beautiful"</em> — bukan sekadar tagline, ini adalah janji kami untuk terus hadir menemani perjalanan kecantikan Anda.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.2 } } }}
                            className="relative"
                        >
                            <div className="relative h-[400px] lg:h-[480px] rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop"
                                    alt="Dealova Beauty Care Salon Interior"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Floating card */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-[#EDE9FE]">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B7CF6] to-[#7DD3FC] flex items-center justify-center">
                                        <span className="text-white text-xl">✦</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#1E1B4B] text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>5 Tahun</p>
                                        <p className="text-[#6B7280] text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>Melayani dengan sepenuh hati</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── VALUES ──────────────────────────────────────────────── */}
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
                            Our Values
                        </p>
                        <h2
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B4B]"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Nilai-Nilai Kami
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.12 } } }}
                                className="bg-white rounded-2xl p-6 border border-[#EDE9FE] shadow-salon hover:border-[#8B7CF6] hover:shadow-card-hover transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8B7CF6]/10 to-[#7DD3FC]/10 flex items-center justify-center mb-4">
                                    <v.icon className="w-6 h-6 text-[#8B7CF6]" />
                                </div>
                                <h3
                                    className="font-bold text-[#1E1B4B] text-lg mb-2"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    {v.title}
                                </h3>
                                <p
                                    className="text-[#6B7280] text-sm leading-relaxed"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    {v.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TEAM ────────────────────────────────────────────────── */}
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
                            Meet The Team
                        </p>
                        <h2
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B4B]"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Tim Ahli Kami
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, i) => (
                            <motion.div
                                key={member.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.15 } } }}
                                className="text-center group"
                            >
                                <div className="relative w-48 h-48 mx-auto mb-5 rounded-full overflow-hidden border-4 border-[#EDE9FE] group-hover:border-[#8B7CF6] transition-colors duration-300 shadow-salon">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3
                                    className="text-xl font-bold text-[#1E1B4B] mb-1"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    {member.name}
                                </h3>
                                <p
                                    className="text-[#8B7CF6] text-sm font-semibold mb-1"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    {member.role}
                                </p>
                                <p
                                    className="text-[#6B7280] text-sm mb-2"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    {member.specialty}
                                </p>
                                <span
                                    className="inline-block text-xs px-3 py-1 rounded-full bg-[#F8F7FF] text-[#6B7280] border border-[#EDE9FE]"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    {member.experience}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
