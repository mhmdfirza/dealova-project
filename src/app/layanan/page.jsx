"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Scissors, Sparkles, Flower2, Star, Check } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const WA_BASE = "https://wa.me/6281234567890?text=";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const categories = ["Semua", "Hair Salon", "Skincare & Facial", "Body Treatment & Spa"];

const services = [
    // Hair Salon
    {
        id: 1,
        name: "Creambath & Hair Mask",
        category: "Hair Salon",
        description:
            "Nutrisi intensif untuk rambut kusam dan kering. Diperkaya vitamin E dan protein sutra, melembutkan setiap helai rambut dan mengembalikan kilap alami.",
        duration: "±60 menit",
        price: "Rp 75.000",
        imageSrc:
            "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=400&fit=crop",
        waLink: `${WA_BASE}Halo%2C%20saya%20ingin%20booking%20layanan%20Creambath%20%26%20Hair%20Mask.%20Kapan%20ada%20slot%20kosong%3F`,
    },
    {
        id: 2,
        name: "Smoothing & Rebonding",
        category: "Hair Salon",
        description:
            "Luruskan dan haluskan rambut bergelombang atau keriting dengan teknologi terkini. Hasil tahan lama hingga 6 bulan tanpa merusak struktur rambut.",
        duration: "±150 menit",
        price: "Rp 250.000",
        imageSrc:
            "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=400&fit=crop",
        waLink: `${WA_BASE}Halo%2C%20saya%20ingin%20booking%20layanan%20Smoothing%20%26%20Rebonding.%20Kapan%20ada%20slot%20kosong%3F`,
    },
    {
        id: 3,
        name: "Hair Coloring",
        category: "Hair Salon",
        description:
            "Warnai rambut dengan pilihan warna terlengkap menggunakan produk ammonia-free yang aman. Dari highlight natural hingga vivid color sesuai keinginan.",
        duration: "±120 menit",
        price: "Mulai Rp 200.000",
        imageSrc:
            "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&h=400&fit=crop",
        waLink: `${WA_BASE}Halo%2C%20saya%20ingin%20booking%20layanan%20Hair%20Coloring.%20Kapan%20ada%20slot%20kosong%3F`,
    },
    // Skincare & Facial
    {
        id: 4,
        name: "Basic Facial Cleansing",
        category: "Skincare & Facial",
        description:
            "Pembersihan wajah mendalam untuk mengangkat kotoran, minyak berlebih, dan sel kulit mati. Cocok untuk semua jenis kulit dan dilakukan secara rutin.",
        duration: "±60 menit",
        price: "Rp 80.000",
        imageSrc:
            "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
        waLink: `${WA_BASE}Halo%2C%20saya%20ingin%20booking%20layanan%20Basic%20Facial%20Cleansing.%20Kapan%20ada%20slot%20kosong%3F`,
    },
    {
        id: 5,
        name: "Brightening Facial Treatment",
        category: "Skincare & Facial",
        description:
            "Perawatan wajah intensif untuk mencerahkan kulit kusam dengan serum vitamin C dan niacinamide. Hasilkan kulit glowing, merata, dan sehat bercahaya.",
        duration: "±90 menit",
        price: "Rp 150.000",
        imageSrc:
            "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop",
        waLink: `${WA_BASE}Halo%2C%20saya%20ingin%20booking%20layanan%20Brightening%20Facial%20Treatment.%20Kapan%20ada%20slot%20kosong%3F`,
    },
    {
        id: 6,
        name: "Acne Treatment",
        category: "Skincare & Facial",
        description:
            "Perawatan khusus kulit berjerawat dengan ekstrasi pori dan serum anti-bakteri. Mengurangi peradangan, mencegah timbulnya jerawat baru secara efektif.",
        duration: "±75 menit",
        price: "Rp 120.000",
        imageSrc:
            "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop",
        waLink: `${WA_BASE}Halo%2C%20saya%20ingin%20booking%20layanan%20Acne%20Treatment.%20Kapan%20ada%20slot%20kosong%3F`,
    },
    // Body Treatment & Spa
    {
        id: 7,
        name: "Full Body Scrub",
        category: "Body Treatment & Spa",
        description:
            "Eksfoliasi seluruh tubuh dengan bahan alami pilihan seperti kopi, susu, dan madu. Mengangkat sel kulit mati, melembutkan, dan mencerahkan kulit tubuh.",
        duration: "±60 menit",
        price: "Rp 130.000",
        imageSrc:
            "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop",
        waLink: `${WA_BASE}Halo%2C%20saya%20ingin%20booking%20layanan%20Full%20Body%20Scrub.%20Kapan%20ada%20slot%20kosong%3F`,
    },
    {
        id: 8,
        name: "Aromatherapy Massage",
        category: "Body Treatment & Spa",
        description:
            "Pijatan relaksasi total dengan essential oil pilihan yang menenangkan pikiran dan tubuh. Cocok untuk memulihkan kelelahan dan mengurangi stres sehari-hari.",
        duration: "±90 menit",
        price: "Rp 150.000",
        imageSrc:
            "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop",
        waLink: `${WA_BASE}Halo%2C%20saya%20ingin%20booking%20layanan%20Aromatherapy%20Massage.%20Kapan%20ada%20slot%20kosong%3F`,
    },
    {
        id: 9,
        name: "Slimming Body Wrap",
        category: "Body Treatment & Spa",
        description:
            "Perawatan tubuh dengan balutan herbal khusus yang membantu mengencangkan kulit dan mengurangi tampilan selulit. Rasakan tubuh lebih ringan dan proporsional.",
        duration: "±90 menit",
        price: "Rp 180.000",
        imageSrc:
            "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop",
        waLink: `${WA_BASE}Halo%2C%20saya%20ingin%20booking%20layanan%20Slimming%20Body%20Wrap.%20Kapan%20ada%20slot%20kosong%3F`,
    },
];

const packages = [
    {
        name: "Paket Cantik",
        services: ["Basic Facial Cleansing", "Creambath & Hair Mask"],
        originalPrice: "Rp 190.000",
        discountPrice: "Rp 155.000",
        savings: "Hemat Rp 35.000",
        featured: false,
        color: "border-[#EDE9FE]",
        icon: Sparkles,
        waLink: `${WA_BASE}Halo%2C%20saya%20ingin%20booking%20Paket%20Cantik%20(Facial%20%2B%20Creambath).%20Kapan%20ada%20slot%20kosong%3F`,
    },
    {
        name: "Paket Relax",
        services: ["Full Body Scrub", "Aromatherapy Massage"],
        originalPrice: "Rp 280.000",
        discountPrice: "Rp 230.000",
        savings: "Hemat Rp 50.000",
        featured: true,
        color: "border-[#8B7CF6]",
        icon: Flower2,
        waLink: `${WA_BASE}Halo%2C%20saya%20ingin%20booking%20Paket%20Relax%20(Scrub%20%2B%20Massage).%20Kapan%20ada%20slot%20kosong%3F`,
    },
    {
        name: "Paket Premium",
        services: ["Brightening Facial", "Aromatherapy Massage", "Creambath & Hair Mask"],
        originalPrice: "Rp 450.000",
        discountPrice: "Rp 380.000",
        savings: "Hemat Rp 70.000",
        featured: false,
        color: "border-[#EDE9FE]",
        icon: Star,
        waLink: `${WA_BASE}Halo%2C%20saya%20ingin%20booking%20Paket%20Premium%20(All%20Treatment).%20Kapan%20ada%20slot%20kosong%3F`,
    },
];

export default function LayananPage() {
    const [activeCategory, setActiveCategory] = useState("Semua");

    const filtered =
        activeCategory === "Semua"
            ? services
            : services.filter((s) => s.category === activeCategory);

    return (
        <>
            {/* ─── PAGE HEADER ──────────────────────────────────────────── */}
            <section className="relative pt-32 pb-16 bg-[#1E1B4B] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1600&h=500&fit=crop"
                        alt="Layanan Salon"
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
                        Our Services
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Layanan Kami
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-white/60 max-w-xl mx-auto"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Pilihan lengkap perawatan kecantikan untuk rambut, wajah, dan tubuh dengan harga terjangkau.
                    </motion.p>
                </div>
            </section>

            {/* ─── FILTER TABS ─────────────────────────────────────────── */}
            <section className="py-10 bg-white border-b border-[#EDE9FE] sticky top-16 lg:top-20 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide justify-start md:justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat
                                        ? "bg-gradient-to-r from-[#8B7CF6] to-[#7DD3FC] text-white shadow-md"
                                        : "bg-[#F8F7FF] text-[#6B7280] border border-[#EDE9FE] hover:border-[#8B7CF6] hover:text-[#8B7CF6]"
                                    }`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SERVICES GRID ───────────────────────────────────────── */}
            <section className="py-16 bg-[#F8F7FF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filtered.map((service, i) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.08, duration: 0.4 }}
                                >
                                    <ServiceCard {...service} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* ─── PAKET HEMAT ─────────────────────────────────────────── */}
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
                            Special Packages
                        </p>
                        <h2
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B4B]"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Paket Hemat Pilihan
                        </h2>
                        <p
                            className="mt-3 text-[#6B7280] max-w-lg mx-auto"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Gabungkan beberapa layanan dengan harga spesial dan hemat lebih banyak.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
                        {packages.map((pkg, i) => (
                            <motion.div
                                key={pkg.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.15 } } }}
                                className={`relative rounded-3xl border-2 p-8 ${pkg.color} ${pkg.featured ? "bg-gradient-to-br from-[#8B7CF6] to-[#7DD3FC] !border-transparent shadow-2xl scale-105 text-white" : "bg-white"
                                    }`}
                            >
                                {pkg.featured && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span
                                            className="px-4 py-1.5 rounded-full bg-[#1E1B4B] text-white text-xs font-bold shadow"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            ⭐ Paling Favorit
                                        </span>
                                    </div>
                                )}

                                <div
                                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${pkg.featured ? "bg-white/20" : "bg-[#F8F7FF]"
                                        }`}
                                >
                                    <pkg.icon className={`w-6 h-6 ${pkg.featured ? "text-white" : "text-[#8B7CF6]"}`} />
                                </div>

                                <h3
                                    className={`text-xl font-bold mb-1 ${pkg.featured ? "text-white" : "text-[#1E1B4B]"}`}
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    {pkg.name}
                                </h3>

                                <div className="mb-5">
                                    <p
                                        className={`text-sm line-through mb-0.5 ${pkg.featured ? "text-white/60" : "text-[#6B7280]"}`}
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                        {pkg.originalPrice}
                                    </p>
                                    <p
                                        className={`text-3xl font-bold ${pkg.featured ? "text-white" : "text-[#1E1B4B]"}`}
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        {pkg.discountPrice}
                                    </p>
                                    <span
                                        className={`text-xs font-semibold px-2.5 py-1 rounded-full inline-block mt-2 ${pkg.featured ? "bg-white/20 text-white" : "bg-green-50 text-green-600"
                                            }`}
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                        {pkg.savings}
                                    </span>
                                </div>

                                <ul className="space-y-2.5 mb-7">
                                    {pkg.services.map((s) => (
                                        <li key={s} className="flex items-center gap-2">
                                            <div
                                                className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${pkg.featured ? "bg-white/20" : "bg-[#F8F7FF]"
                                                    }`}
                                            >
                                                <Check className={`w-3 h-3 ${pkg.featured ? "text-white" : "text-[#8B7CF6]"}`} />
                                            </div>
                                            <span
                                                className={`text-sm ${pkg.featured ? "text-white/90" : "text-[#6B7280]"}`}
                                                style={{ fontFamily: "'Inter', sans-serif" }}
                                            >
                                                {s}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={pkg.waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 min-h-[48px] w-full ${pkg.featured
                                            ? "bg-white text-[#8B7CF6] hover:bg-white/90 hover:shadow-lg"
                                            : "bg-gradient-to-r from-[#8B7CF6] to-[#7DD3FC] text-white hover:opacity-90 hover:shadow-md"
                                        }`}
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Booking Paket Ini
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
