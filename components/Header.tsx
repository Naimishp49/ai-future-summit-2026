"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#sessions", label: "Sessions" },
        { href: "#experts", label: "Experts" },
        { href: "#venue", label: "Venue" },
        { href: "#register", label: "Register" },
        { href: "#about", label: "About DU" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">DU</span>
                        </div>
                        <div className="hidden md:block">
                            <div className="font-bold text-gray-900 text-lg">Darshan University</div>
                            <div className="text-xs text-gray-600">Let's Build Something Together</div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <a
                            href="#register"
                            className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Register Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-fadeIn">
                        <div className="flex flex-col space-y-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium py-2"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#register"
                                onClick={() => setIsMenuOpen(false)}
                                className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-200"
                            >
                                Register Now
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
