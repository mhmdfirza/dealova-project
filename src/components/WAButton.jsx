"use client";

import { MessageCircle } from "lucide-react";

const WA_LINK =
    "https://wa.me/6281234567890?text=Halo%20Dealova%20Beauty%20Care%2C%20saya%20ingin%20bertanya%20tentang%20layanan";

export default function WAButton() {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
            {/* Tooltip */}
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 bg-[#1E1B4B] text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap translate-y-1 group-hover:translate-y-0"
                style={{ fontFamily: "'Inter', sans-serif" }}>
                Chat via WhatsApp
            </div>

            {/* Button with pulse ring */}
            <div className="relative">
                {/* Pulse rings */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-50"
                    style={{ animation: "pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite" }} />
                <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30"
                    style={{ animation: "pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.4s infinite" }} />

                <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat via WhatsApp"
                    className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-200 hover:bg-[#22c55e]"
                >
                    <MessageCircle className="w-7 h-7 fill-white text-white" />
                </a>
            </div>
        </div>
    );
}
