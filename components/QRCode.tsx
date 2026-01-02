"use client";

import { useEffect, useRef } from "react";
import QRCodeLib from "qrcode";

interface QRCodeProps {
    url: string;
    size?: number;
    className?: string;
    showLabel?: boolean;
    label?: string;
}

export default function QRCode({
    url,
    size = 200,
    className = "",
    showLabel = true,
    label = "Scan to Register"
}: QRCodeProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            QRCodeLib.toCanvas(canvasRef.current, url, {
                width: size,
                margin: 2,
                color: {
                    dark: "#1e1b4b", // Dark indigo
                    light: "#ffffff"
                },
                errorCorrectionLevel: "M"
            }).catch((err) => {
                console.error("QR Code generation error:", err);
            });
        }
    }, [url, size]);

    return (
        <div className={`flex flex-col items-center ${className}`}>
            <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-purple-200">
                <canvas ref={canvasRef} className="rounded-lg" />
            </div>
            {showLabel && (
                <p className="mt-3 text-sm font-semibold text-gray-700 text-center">
                    {label}
                </p>
            )}
        </div>
    );
}
