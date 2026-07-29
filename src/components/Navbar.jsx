"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Leaf, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WA_LINK } from "@/data/credentials";

const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Layanan", href: "/layanan" },
    { label: "Galeri", href: "/galeri" },
    { label: "Tentang Kami", href: "/tentang" },
    { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lang, setLang] = useState("ID"); // "ID" | "EN"
    const pathname = usePathname();

    useEffect(() => {
        const stored = localStorage.getItem("lang");
        if (stored === "ID" || stored === "EN") setLang(stored);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLang = () => {
        const newLang = lang === "ID" ? "EN" : "ID";
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-[#EDE9FE]"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B7CF6] to-[#7DD3FC] flex items-center justify-center">
                            <Leaf className="w-4 h-4 text-white" />
                        </div>
                        <span
                            className={`font-bold text-lg lg:text-xl transition-colors ${isScrolled || isMenuOpen ? "text-[#1E1B4B]" : "text-white drop-shadow"
                                }`}
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Dealova Beauty
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-all duration-200 relative group ${isScrolled
                                    ? pathname === link.href
                                        ? "text-[#8B7CF6]"
                                        : "text-[#1E1B4B] hover:text-[#8B7CF6]"
                                    : pathname === link.href
                                        ? "text-[#C4B5FD]"
                                        : "text-white/90 hover:text-white drop-shadow"
                                    }`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                {link.label}
                                <span
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#8B7CF6] to-[#7DD3FC] transition-all duration-200 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </Link>
                        ))}
                    </nav>

                    {/* Right side */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={toggleLang}
                            className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 ${isScrolled
                                ? "border-[#EDE9FE] text-[#8B7CF6] hover:bg-[#F8F7FF]"
                                : "border-white/40 text-white hover:bg-white/20"
                                }`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            {lang === "ID" ? "🇮🇩 ID" : "🇺🇸 EN"}
                        </button>

                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#8B7CF6] to-[#7DD3FC] text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            <MessageCircle className="w-4 h-4" />
                            Booking via WhatsApp
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled || isMenuOpen
                            ? "text-[#1E1B4B] hover:bg-[#F8F7FF]"
                            : "text-white hover:bg-white/20"
                            }`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#EDE9FE] overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${pathname === link.href
                                        ? "bg-[#F8F7FF] text-[#8B7CF6]"
                                        : "text-[#1E1B4B] hover:bg-[#F8F7FF] hover:text-[#8B7CF6]"
                                        }`}
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-3 pb-1 flex items-center gap-3">
                                <button
                                    onClick={toggleLang}
                                    className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[#EDE9FE] text-[#8B7CF6] hover:bg-[#F8F7FF] transition-colors"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    {lang === "ID" ? "🇮🇩 ID" : "🇺🇸 EN"}
                                </button>
                                <a
                                    href={WA_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#8B7CF6] to-[#7DD3FC] text-white text-sm font-semibold"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Booking via WhatsApp
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
