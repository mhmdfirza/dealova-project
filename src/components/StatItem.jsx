import React from "react";

export default function StatItem({ icon: Icon, value, label }) {
    return (
        <div className="flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                {Icon && <Icon className="h-6 w-6" />}
            </div>
            <h3 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">
                {value}
            </h3>
            <p className="text-sm font-medium text-gray-500">{label}</p>
        </div>
    );
}
