"use client";

import Image from "next/image";
import { MessageCircle, Clock, Tag } from "lucide-react";
import { motion } from "framer-motion";

const categoryColors = {
    "Hair Salon": "bg-violet-100 text-violet-700",
    "Skincare & Facial": "bg-sky-100 text-sky-700",
    "Body Treatment & Spa": "bg-emerald-100 text-emerald-700",
};

export default function ServiceCard({
    name,
    category,
    description,
    duration,
    price,
    imageSrc,
    waLink,
}) {
    return (
        <motion.div
            className="bg-white rounded-2xl overflow-hidden border border-[#EDE9FE] shadow-salon flex flex-col"
            whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 30px rgba(139, 124, 246, 0.2)",
                borderColor: "#8B7CF6",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    loading="lazy"
                />
                {/* Badge */}
                <span
                    className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[category] || "bg-purple-100 text-purple-700"}`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                >
                    {category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h3
                    className="font-playfair font-bold text-[#1E1B4B] text-lg mb-2 leading-snug"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    {name}
                </h3>
                <p
                    className="text-[#6B7280] text-sm leading-relaxed mb-4 flex-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                >
                    {description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-xs text-[#6B7280]"
                        style={{ fontFamily: "'Inter', sans-serif" }}>
                        <Clock className="w-3.5 h-3.5 text-[#8B7CF6]" />
                        {duration}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-[#8B7CF6]"
                        style={{ fontFamily: "'Inter', sans-serif" }}>
                        <Tag className="w-3.5 h-3.5" />
                        {price}
                    </div>
                </div>

                {/* CTA */}
                <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#8B7CF6] to-[#7DD3FC] text-white text-sm font-semibold hover:opacity-90 hover:shadow-lg transition-all duration-200 min-h-[48px]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                >
                    <MessageCircle className="w-4 h-4" />
                    Booking via WhatsApp
                </a>
            </div>
        </motion.div>
    );
}
