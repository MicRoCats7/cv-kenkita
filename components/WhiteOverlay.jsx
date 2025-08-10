"use client"

import { useEffect, useState } from "react";

// Tanggal mulai overlay (misal: 1 Juli 2024)
const START_DATE = new Date("2025-07-01");

export default function WhiteOverlay() {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const now = new Date();
        const daysPassed = Math.floor((now - START_DATE) / (1000 * 60 * 60 * 24));
        // Ganti 0.01 ke 0.02 jika ingin 2% per hari
        let calculatedOpacity = Math.min(daysPassed * 0.01, 1);
        setOpacity(calculatedOpacity);
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "#fff",
                opacity,
                pointerEvents: "none",
                zIndex: 9999,
                transition: "opacity 0.5s"
            }}
            aria-hidden="true"
        />
    );
}