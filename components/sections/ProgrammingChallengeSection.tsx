'use client';

export default function ProgrammingChallengeSection() {
    return (
        <section id="programming-challenge" className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
            {/* Decorative background elements - matching poster style */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                {/* Tech icons scattered around */}
                <div className="absolute top-10 left-10 text-6xl">💻</div>
                <div className="absolute top-20 right-20 text-5xl">🎯</div>
                <div className="absolute bottom-20 left-20 text-5xl">⏱️</div>
                <div className="absolute bottom-10 right-10 text-6xl">📊</div>
                <div className="absolute top-1/2 left-1/4 text-4xl">🔧</div>
                <div className="absolute top-1/3 right-1/4 text-4xl">📱</div>
            </div>

            {/* Gradient orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Prize Pool & Rewards
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Win exciting cash prizes and gifts for your coding excellence
                    </p>
                </div>

                {/* Prize Pool */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* First Prize */}
                        <div className="relative group">
                            <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-yellow-400 transform hover:-translate-y-2 transition-all duration-300">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="relative">
                                        <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-2xl shadow-lg">
                                            1
                                        </div>
                                        <div className="absolute -top-1 -right-1">
                                            <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-700 font-bold mb-3 text-lg">First Prize</p>
                                    <p className="text-5xl md:text-6xl font-black text-red-600">₹51,000</p>
                                </div>
                            </div>
                        </div>

                        {/* Second Prize */}
                        <div className="relative group">
                            <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-gray-300 transform hover:-translate-y-2 transition-all duration-300">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="bg-gradient-to-br from-gray-400 to-gray-600 text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-2xl shadow-lg">
                                        2
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-700 font-bold mb-3 text-lg">Second Prize</p>
                                    <p className="text-5xl md:text-6xl font-black text-red-600">₹21,000</p>
                                </div>
                            </div>
                        </div>

                        {/* Third Prize */}
                        <div className="relative group">
                            <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-orange-400 transform hover:-translate-y-2 transition-all duration-300">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-2xl shadow-lg">
                                        3
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-700 font-bold mb-3 text-lg">Third Prize</p>
                                    <p className="text-5xl md:text-6xl font-black text-red-600">₹11,000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Prizes */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Fourth Prize */}
                        <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-md">
                                        4
                                    </div>
                                    <span className="text-gray-900 font-bold text-lg">Fourth Prize</span>
                                </div>
                                <span className="text-3xl font-black text-red-600">₹5,000</span>
                            </div>
                        </div>

                        {/* Fifth Prize */}
                        <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-md">
                                        5
                                    </div>
                                    <span className="text-gray-900 font-bold text-lg">Fifth Prize</span>
                                </div>
                                <span className="text-3xl font-black text-red-600">₹2,000</span>
                            </div>
                        </div>

                        {/* Complementary */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-lg border-2 border-green-300 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-900 font-bold text-lg">Complementary</span>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-black text-red-600">PEN DRIVE</div>
                                    <p className="text-sm text-gray-600 font-medium">for every participant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Expert Talks Section */}
                <div className="max-w-5xl mx-auto mb-12">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-300">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            {/* Microphone Icon */}
                            <div className="flex-shrink-0">
                                <div className="bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl p-8 shadow-xl">
                                    <svg className="w-24 h-24 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                                        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Expert Talks Content */}
                            <div className="flex-1">
                                <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg mb-6 shadow-lg">
                                    Expert Talks
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-200">
                                        <p className="text-gray-900 text-lg md:text-xl font-bold">
                                            AI for Beginners: From Theory to Tiny Project
                                        </p>
                                    </div>
                                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-200">
                                        <p className="text-gray-900 text-lg md:text-xl font-bold">
                                            Build an AI Telegram Bot
                                        </p>
                                    </div>
                                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-200">
                                        <p className="text-gray-900 text-lg md:text-xl font-bold">
                                            AI Uncovered: Concepts Behind the Technology
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Registration CTA */}
                <div className="text-center">
                    <div className="inline-block bg-white rounded-2xl px-8 py-4 shadow-xl border-2 border-green-300 mb-8">
                        <p className="text-xl md:text-2xl font-bold text-gray-900">
                            Registration is <span className="bg-green-500 text-white px-4 py-2 rounded-lg font-black">FREE</span> & compulsory
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#register"
                            className="px-12 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-black text-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 w-full sm:w-auto shadow-lg"
                        >
                            Register for Challenge
                        </a>
                        <a
                            href="#venue"
                            className="px-12 py-5 bg-white text-blue-600 rounded-xl font-black text-xl border-2 border-blue-600 hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-200 w-full sm:w-auto shadow-lg"
                        >
                            View Venue Details
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
