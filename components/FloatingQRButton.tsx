"use client";

import { useState, useEffect } from "react";
import QRCode from "./QRCode";

export default function FloatingQRButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [showQR, setShowQR] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setShowQR(!showQR)}
                className="fixed bottom-24 right-6 z-40 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 transition-all duration-200 group"
                aria-label="Show QR Code"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    QR
                </span>
            </button>

            {/* QR Code Modal */}
            {showQR && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setShowQR(false)}
                >
                    <div
                        className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform animate-fadeIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-900">Quick Registration</h3>
                            <button
                                onClick={() => setShowQR(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                                aria-label="Close"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="text-center">
                            <QRCode
                                url="http://localhost:3000#register"
                                size={250}
                                label="Scan with your phone to register"
                            />

                            <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                                <p className="text-sm text-gray-600">
                                    <strong className="text-purple-600">Quick & Easy!</strong> Registration takes less than 2 minutes on your mobile device.
                                </p>
                            </div>

                            <button
                                onClick={() => setShowQR(false)}
                                className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
