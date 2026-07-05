import {
    Scissors,
    Sparkles,
    Flower2,
    Star,
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    MessageCircle,
    Clock,
    Users,
    Award,
    CalendarDays,
} from "lucide-react";

export const services = [
    {
        icon: Scissors,
        title: "Hair Salon",
        desc: "Creambath, smoothing, coloring, dan perawatan rambut profesional oleh stylist berpengalaman.",
        price: "Mulai Rp 50.000",
        color: "from-violet-50 to-purple-50",
        accent: "#8B7CF6",
        href: "/layanan",
    },
    {
        icon: Sparkles,
        title: "Skincare & Facial",
        desc: "Perawatan wajah intensif untuk kulit cerah, bersih, dan sehat dengan produk berkualitas.",
        price: "Mulai Rp 80.000",
        color: "from-sky-50 to-blue-50",
        accent: "#7DD3FC",
        href: "/layanan",
    },
    {
        icon: Flower2,
        title: "Body Treatment & Spa",
        desc: "Relaksasi total dengan scrub, massage aromaterapi, dan body wrap mewah yang memanjakan tubuh.",
        price: "Mulai Rp 120.000",
        color: "from-emerald-50 to-teal-50",
        accent: "#34D399",
        href: "/layanan",
    },
];

export const stats = [
    { icon: Users, value: "500+", label: "Pelanggan Puas" },
    { icon: Scissors, value: "3", label: "Layanan Utama" },
    { icon: Award, value: "5", label: "Tahun Pengalaman" },
    { icon: CalendarDays, value: "7", label: "Hari Buka" },
];

export const testimonials = [
    {
        name: "Sari Dewi",
        avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face",
        rating: 5,
        text: "Pelayanan sangat ramah dan profesional! Hasil creambath-nya bikin rambut saya jadi super halus dan berkilau. Pasti akan balik lagi!",
        service: "Creambath & Hair Mask",
    },
    {
        name: "Rina Kusuma",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face",
        rating: 5,
        text: "Facial brightening-nya luar biasa! Dalam satu sesi kulit saya langsung terasa lebih cerah dan lembut. Teknisinya sangat berpengalaman.",
        service: "Brightening Facial Treatment",
    },
    {
        name: "Maya Indah",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face",
        rating: 5,
        text: "Aromatherapy massage-nya bikin saya relax banget setelah seminggu kerja. Tempatnya bersih dan nyaman. Highly recommended!",
        service: "Aromatherapy Massage",
    },
];

export const beforeAfterPairs = [
    {
        before: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=450&fit=crop",
        after: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=450&fit=crop",
        label: "Hair Coloring",
    },
    {
        before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=450&fit=crop",
        after: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=450&fit=crop",
        label: "Facial Treatment",
    },
    {
        before: "https://images.unsplash.com/photo-1601280236893-d47f6a959835?w=600&h=450&fit=crop",
        after: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&h=450&fit=crop",
        label: "Body Scrub",
    },
];