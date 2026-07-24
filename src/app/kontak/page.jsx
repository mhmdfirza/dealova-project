"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    MapPin,
    Phone,
    Clock,
    MessageCircle,
    ChevronDown,
} from "lucide-react";

function InstagramIcon({ className }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
    );
}

const WA_LINK =
    "https://wa.me/6281234567890?text=Halo%20Dealova%20Beauty%20Care%2C%20saya%20ingin%20bertanya%20tentang%20layanan.";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const faqs = [
    {
        q: "Apakah perlu booking sebelumnya?",
        a: "Sangat disarankan untuk booking terlebih dahulu melalui WhatsApp agar slot waktu tersedia dan Anda tidak perlu menunggu lama. Walk-in juga diterima, namun mungkin ada antrean.",
    },
    {
        q: "Berapa lama waktu yang dibutuhkan untuk setiap layanan?",
        a: "Durasi bervariasi tergantung layanan. Facial dasar ±60 menit, smoothing rambut ±150 menit, spa treatment ±90 menit. Detail durasi tersedia di halaman Layanan.",
    },
    {
        q: "Apakah bisa minta reschedule atau cancel booking?",
        a: "Tentu! Hubungi kami via WhatsApp minimal 2 jam sebelum jadwal untuk reschedule. Untuk pembatalan mendadak, harap info secepatnya agar slot bisa diberikan ke klien lain.",
    },
    {
        q: "Apakah produk yang digunakan aman untuk kulit sensitif?",
        a: "Kami hanya menggunakan produk yang telah tersertifikasi BPOM dan aman untuk semua jenis kulit. Untuk kulit sangat sensitif, informasikan kepada terapis kami sebelum perawatan dimulai.",
    },
    {
        q: "Apakah tersedia paket untuk rombongan atau hampers?",
        a: "Ya! Kami menerima booking rombongan (misalnya pengajian, arisan, atau acara bridesmaids) dan menyediakan gift voucher. Hubungi kami untuk penawaran spesial grup.",
    },
];

function FAQItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-[#EDE9FE] rounded-2xl overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#F8F7FF] transition-colors"
            >
                <span
                    className="font-semibold text-[#1E1B4B] text-sm pr-4"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                >
                    {q}
                </span>
                <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                >
                    <ChevronDown className="w-5 h-5 text-[#8B7CF6]" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="faq-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p
                            className="px-6 pb-5 text-[#6B7280] text-sm leading-relaxed"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function KontakPage() {
    return (
        <>
            {/* ─── PAGE HEADER ──────────────────────────────────────────── */}
            <section className="relative pt-32 pb-16 bg-[#1E1B4B] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1600&h=500&fit=crop"
                        alt="Kontak Kami"
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
                        Contact Us
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Hubungi Kami
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-white/60 max-w-lg mx-auto"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Kami siap membantu Anda — pertanyaan, booking, atau konsultasi layanan.
                    </motion.p>
                </div>
            </section>

            {/* ─── CONTACT INFO + MAP ──────────────────────────────────── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                        {/* Contact Details */}
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
                                Get In Touch
                            </p>
                            <h2
                                className="text-3xl sm:text-4xl font-bold text-[#1E1B4B] mb-8"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Temukan Kami di Sini
                            </h2>

                            <div className="space-y-6 mb-8">
                                {/* Address */}
                                <div className="flex gap-4 p-5 rounded-2xl bg-[#F8F7FF] border border-[#EDE9FE]">
                                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#8B7CF6] to-[#7DD3FC] flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[#1E1B4B] mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>Alamat</p>
                                        <p className="text-[#6B7280] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                                            Jl. Sidomukti No.12, Dsn. Bancaan,<br /> Ds. Mojosari, Kec. Kauman<br />Kab. Tulungagung, Jawa Timur 66261
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex gap-4 p-5 rounded-2xl bg-[#F8F7FF] border border-[#EDE9FE]">
                                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#8B7CF6] to-[#7DD3FC] flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[#1E1B4B] mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>Telepon / WhatsApp</p>
                                        <p className="text-[#6B7280] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>+62 812-5979-1896</p>
                                    </div>
                                </div>

                                {/* Instagram */}
                                <div className="flex gap-4 p-5 rounded-2xl bg-[#F8F7FF] border border-[#EDE9FE]">
                                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#8B7CF6] to-[#7DD3FC] flex items-center justify-center flex-shrink-0">
                                        <InstagramIcon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[#1E1B4B] mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>Instagram</p>
                                        <a
                                            href="https://instagram.com/dealovasalon_id"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#8B7CF6] text-sm hover:underline"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            @dealovasalon_id
                                        </a>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex gap-4 p-5 rounded-2xl bg-[#F8F7FF] border border-[#EDE9FE]">
                                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#8B7CF6] to-[#7DD3FC] flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[#1E1B4B] mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>Jam Operasional</p>
                                        <p className="text-[#6B7280] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                                            Selasa – Minggu, 08.00 – 18.00 WIB
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp CTA big */}
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full px-6 py-5 rounded-2xl bg-[#25D366] text-white font-bold text-base hover:bg-[#22c55e] hover:shadow-xl hover:scale-[1.02] transition-all duration-200 min-h-[60px]"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                <MessageCircle className="w-6 h-6" />
                                Chat Langsung di WhatsApp
                            </a>
                        </motion.div>

                        {/* Map Placeholder */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.2 } } }}
                        >
                            <div className="relative h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden bg-[#F8F7FF] border border-[#EDE9FE] shadow-salon flex items-center justify-center">
                                {/* Map iframe placeholder */}
                                <iframe
                                    // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126012.65741695272!2d111.97148075!3d-7.849039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7884aed4a3a7a1%3A0xc4bd7f8b6c8f1e5b!2sKediri%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5838.383694203383!2d111.86180241205925!3d-8.044829180316885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78fddddf9097dd%3A0xb5a73c8857302d90!2sDealova%20beauty%20salon%20%26%20body%20care!5e1!3m2!1sen!2sid!4v1784896711322!5m2!1sen!2sid"
                                    className="absolute inset-0 w-full h-full"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Dealova Beauty Salon & Body Care Location"
                                />
                                {/* Overlay label */}
                                <div className="absolute bottom-4 left-4 right-4 z-10">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-[#EDE9FE] shadow">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-[#8B7CF6] flex-shrink-0" />
                                            <p className="text-sm font-medium text-[#1E1B4B]" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                Dealova Beauty Salon & Body Care — Tulungagung, Jawa Timur
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── FAQ ─────────────────────────────────────────────────── */}
            <section className="py-20 bg-[#F8F7FF]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeUp}
                        className="text-center mb-12"
                    >
                        <p
                            className="text-[#8B7CF6] text-sm font-semibold uppercase tracking-widest mb-3"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            FAQ
                        </p>
                        <h2
                            className="text-3xl sm:text-4xl font-bold text-[#1E1B4B]"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Pertanyaan yang Sering Ditanyakan
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeUp}
                        className="space-y-3"
                    >
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} q={faq.q} a={faq.a} />
                        ))}
                    </motion.div>

                    {/* Still have questions? */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="mt-10 text-center"
                    >
                        <p className="text-[#6B7280] text-sm mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Masih ada pertanyaan lain?
                        </p>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#8B7CF6] to-[#7DD3FC] text-white font-semibold text-sm hover:opacity-90 hover:shadow-lg hover:scale-105 transition-all duration-200 min-h-[48px]"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            <MessageCircle className="w-4 h-4" />
                            Tanya via WhatsApp
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
