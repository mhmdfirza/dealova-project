import { stats } from "@/data/mockData";
import StatItem from "@/components/StatItem";

export default function StatsBar() {
    return (
        <section className="py-12 bg-[#F8F7FF] border-y border-[#EDE9FE]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[#EDE9FE]">
                    {stats.map((s) => (
                        <StatItem key={s.label} {...s} />
                    ))}
                </div>
            </div>
        </section>
    );
}