export default function HighlightsSection() {
    const highlights = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "AI Without Fear",
            description: "Practical, beginner-friendly sessions designed specifically for BCA students. No complex math, just real applications you can build."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            title: "Hands-On Demos",
            description: "Real AI applications, not theory. Build chatbots, image recognition tools, and smart web apps during live coding sessions."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Career Guidance",
            description: "Clear roadmap from BCA to MCA. Understand how AI skills accelerate your career and open doors to high-growth opportunities."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            title: "Darshan University Ecosystem",
            description: "Industry-ready learning environment with modern labs, expert faculty, and strong placement support for MCA graduates."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why Attend This Event?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        More than just talks—a complete experience designed to prepare you for the AI revolution
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((highlight, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-purple-100"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                                {highlight.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {highlight.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {highlight.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
