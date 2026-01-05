'use client';

export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
            {/* Decorative background elements - matching poster style */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                {/* Tech icons scattered around */}
                <div className="absolute top-20 left-10 text-6xl">💻</div>
                <div className="absolute top-40 right-20 text-5xl">🎯</div>
                <div className="absolute bottom-40 left-20 text-5xl">⏱️</div>
                <div className="absolute bottom-20 right-10 text-6xl">📊</div>
                <div className="absolute top-1/2 left-1/4 text-4xl">🔧</div>
                <div className="absolute top-1/3 right-1/4 text-4xl">📱</div>
            </div>

            {/* Gradient orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Darshan University Logo & Header */}
                    <div className="flex justify-center items-center mb-8 animate-fadeIn">
                        <div className="bg-white rounded-2xl shadow-2xl p-6 inline-block border-2 border-gray-200">
                            <div className="flex items-center space-x-4">
                                {/* DU Logo */}
                                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-3xl">DU</span>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Darshan</h3>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">UNIVERSITY</h3>
                                    <p className="text-xs text-gray-600 mt-1 italic">Let's Build Something Together</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Event Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6 animate-fadeIn border border-gray-200" style={{ animationDelay: '0.1s' }}>
                        <span className="text-sm md:text-base font-semibold text-gray-700">For BCA / B.Sc. IT Final Year Students</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 leading-tight animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                        <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                            PROGRAMMING
                        </span>
                    </h1>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-fadeIn flex items-center justify-center gap-4 flex-wrap" style={{ animationDelay: '0.3s' }}>
                        <span className="text-gray-900">CHALLENGE</span>
                        <span className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-xl">2026</span>
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                        A competitive programming event where participants solve{' '}
                        <span className="font-bold text-gray-900">logical and coding problems</span> using{' '}
                        <span className="font-bold text-blue-600">C, C++ or Java</span> only
                    </p>

                    {/* Event Details Box */}
                    <div className="inline-block bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-xl mb-8 animate-fadeIn border-2 border-blue-200" style={{ animationDelay: '0.5s' }}>
                        <div className="flex items-center justify-center space-x-2 text-gray-900">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-bold text-lg">24th January, 2026 | 8:30 AM</span>
                            <span className="mx-2">•</span>
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="font-bold text-lg">Darshan University, Rajkot</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                        <a
                            href="#register"
                            className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 w-full sm:w-auto shadow-lg"
                        >
                            Register Free Now
                        </a>
                        <a
                            href="#programming-challenge"
                            className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg border-2 border-blue-600 hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-200 w-full sm:w-auto shadow-lg"
                        >
                            View Prize Pool
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fadeIn" style={{ animationDelay: '0.7s' }}>
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300">
                            <div className="text-4xl font-black text-red-600 mb-2">₹51,000</div>
                            <div className="text-sm font-semibold text-gray-700">First Prize</div>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300">
                            <div className="text-4xl font-black text-blue-600 mb-2">3</div>
                            <div className="text-sm font-semibold text-gray-700">Expert Talks</div>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-300">
                            <div className="text-4xl font-black text-purple-600 mb-2">5</div>
                            <div className="text-sm font-semibold text-gray-700">Cash Prizes</div>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border-2 border-green-200 hover:border-green-400 transition-all duration-300">
                            <div className="text-4xl font-black text-green-600 mb-2">FREE</div>
                            <div className="text-sm font-semibold text-gray-700">Entry & Gifts</div>
                        </div>
                    </div>

                    {/* Think | Code | Compete */}
                    <div className="mt-12 flex items-center justify-center space-x-4 text-2xl md:text-3xl font-black animate-fadeIn" style={{ animationDelay: '0.8s' }}>
                        <span className="text-red-600">Think</span>
                        <span className="text-yellow-500">|</span>
                        <span className="text-yellow-500">Code</span>
                        <span className="text-blue-600">|</span>
                        <span className="text-blue-600">Compete</span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>
    );
}
