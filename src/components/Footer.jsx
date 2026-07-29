"use client";

import Link from "next/link";
import { Leaf, Clock, MapPin, MessageCircle } from "lucide-react";
import { WA_LINK } from "@/data/credentials";

const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Layanan", href: "/layanan" },
    { label: "Galeri", href: "/galeri" },
    { label: "Tentang Kami", href: "/tentang" },
    { label: "Kontak", href: "/kontak" },
];

// Social icon SVGs (lucide-react v1 doesn't have Instagram/Facebook)
function InstagramIcon({ className }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
    );
}

function FacebookIcon({ className }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    );
}

function TikTokIcon({ className }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
        </svg>
    );
}

const socialLinks = [
    { Icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/dealovasalon_id" },
    { Icon: FacebookIcon, label: "Facebook", href: "https://facebook.com/dealovasalon" },
    { Icon: TikTokIcon, label: "TikTok", href: "https://www.tiktok.com/@dealovasalon" },
];

export default function Footer() {
    return (
        <footer className="bg-[#1E1B4B] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Col 1: Logo + Description */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B7CF6] to-[#7DD3FC] flex items-center justify-center">
                                <Leaf className="w-4 h-4 text-white" />
                            </div>
                            <span
                                className="font-playfair font-bold text-lg"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Dealova Beauty
                            </span>
                        </Link>
                        <p
                            className="text-white/60 text-sm leading-relaxed mb-5"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Salon kecantikan khusus wanita dengan layanan terbaik untuk rambut, wajah, dan tubuh. Karena setiap wanita berhak tampil cantik.
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map(({ Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#8B7CF6] hover:text-white transition-all duration-200"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div>
                        <h3
                            className="font-semibold text-sm uppercase tracking-wider text-[#C4B5FD] mb-4"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Quick Links
                        </h3>
                        <ul className="space-y-2.5">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 text-sm hover:text-white transition-colors"
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Hours + Address */}
                    <div>
                        <h3
                            className="font-semibold text-sm uppercase tracking-wider text-[#C4B5FD] mb-4"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Informasi
                        </h3>
                        <div className="space-y-3">
                            <div className="flex gap-3">
                                <Clock className="w-4 h-4 text-[#8B7CF6] flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm text-white/80 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        Jam Operasional
                                    </p>
                                    <p className="text-sm text-white/55" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        Senin – Minggu<br />08.00 – 20.00 WIB
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <MapPin className="w-4 h-4 text-[#8B7CF6] flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm text-white/80 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        Alamat
                                    </p>
                                    <p className="text-sm text-white/55" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        Jl. Sidomukti No.12, Dsn. Bancaan,<br /> Ds. Mojosari, Kec. Kauman<br />Kab. Tulungagung, Jawa Timur 66261
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Col 4: WhatsApp CTA */}
                    <div>
                        <h3
                            className="font-semibold text-sm uppercase tracking-wider text-[#C4B5FD] mb-4"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Booking
                        </h3>
                        <p className="text-white/60 text-sm mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Hubungi kami langsung melalui WhatsApp untuk reservasi dan pertanyaan layanan.
                        </p>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#22c55e] hover:shadow-lg hover:scale-105 transition-all duration-200 w-full"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            <MessageCircle className="w-5 h-5" />
                            Chat via WhatsApp
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-white/40 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        © 2024 Dealova Beauty Care Salon. All rights reserved.
                    </p>
                    <p className="text-white/30 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Every Woman Deserve To Be Beautiful ✦
                    </p>
                </div>
            </div>
        </footer>
    );
}
