export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Event Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-8 animate-fadeIn">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium text-gray-700">Free Event • January 24, 2026</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fadeIn">
                        Empowering BCA Students for the{" "}
                        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            AI-Driven Future
                        </span>
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                        Hands-on AI sessions, expert talks, and real-world career guidance at Darshan University.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                        <a
                            href="#sessions"
                            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 w-full sm:w-auto"
                        >
                            View Sessions
                        </a>
                        <a
                            href="#register"
                            className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold text-lg border-2 border-purple-600 hover:bg-purple-50 transform hover:-translate-y-1 transition-all duration-200 w-full sm:w-auto"
                        >
                            Register Free
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                            <div className="text-3xl font-bold text-purple-600 mb-2">8+</div>
                            <div className="text-sm text-gray-600">Expert Sessions</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                            <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
                            <div className="text-sm text-gray-600">Industry Experts</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                            <div className="text-sm text-gray-600">BCA Students</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                            <div className="text-3xl font-bold text-purple-600 mb-2">Free</div>
                            <div className="text-sm text-gray-600">Entry & Resources</div>
                        </div>
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
