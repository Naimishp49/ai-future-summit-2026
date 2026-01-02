export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            About Darshan University
                        </h2>
                        <p className="text-xl text-purple-200">
                            Shaping future-ready professionals in the age of AI and innovation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Feature Cards */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Industry-Aligned Curriculum</h3>
                            <p className="text-purple-100 leading-relaxed">
                                Our programs are designed in collaboration with industry experts, ensuring students learn the latest technologies and practices that companies actually use.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Strong MCA Program</h3>
                            <p className="text-purple-100 leading-relaxed">
                                Our MCA program produces industry-ready professionals with specializations in AI, Machine Learning, Full Stack Development, and Cloud Computing.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Focus on AI & Real Projects</h3>
                            <p className="text-purple-100 leading-relaxed">
                                Students work on real-world AI projects, building portfolios that impress recruiters. From chatbots to predictive models, learning by doing is our mantra.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Innovation-Driven Campus</h3>
                            <p className="text-purple-100 leading-relaxed">
                                State-of-the-art infrastructure, research labs, incubation centers, and a culture that encourages innovation, entrepreneurship, and creative problem-solving.
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-300 mb-2">15+</div>
                            <div className="text-sm text-purple-200">Years of Excellence</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-300 mb-2">10,000+</div>
                            <div className="text-sm text-purple-200">Alumni Network</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-300 mb-2">200+</div>
                            <div className="text-sm text-purple-200">Industry Partners</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-300 mb-2">95%</div>
                            <div className="text-sm text-purple-200">Placement Rate</div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <h3 className="text-2xl font-bold mb-4">
                            Ready to Take the Next Step in Your AI Journey?
                        </h3>
                        <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                            The MCA program at Darshan University is designed to transform BCA graduates into AI-ready professionals. Join a community of innovators and build the future.
                        </p>
                        <a
                            href="#register"
                            className="inline-block px-8 py-4 bg-white text-purple-900 rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
                        >
                            Explore MCA at Darshan University
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
