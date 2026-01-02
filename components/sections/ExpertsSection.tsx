export default function ExpertsSection() {
    const experts = [
        {
            name: "Dr. Rajesh Patel",
            role: "AI Research Lead",
            expertise: "Machine Learning & AI Applications",
            bio: "15+ years in AI research with focus on making AI accessible to students. Published 30+ research papers.",
            linkedin: "#"
        },
        {
            name: "Priya Sharma",
            role: "Senior Full Stack Developer",
            expertise: "AI-Powered Web Development",
            bio: "Building intelligent web applications at a leading fintech company. Mentor to 100+ developers.",
            linkedin: "#"
        },
        {
            name: "Prof. Amit Kumar",
            role: "Head of Computer Science",
            expertise: "Machine Learning Fundamentals",
            bio: "20+ years of teaching experience. Specializes in making complex ML concepts simple and practical.",
            linkedin: "#"
        },
        {
            name: "Neha Desai",
            role: "System Architect",
            expertise: "Scalable AI Systems",
            bio: "Designed AI infrastructure for companies serving millions of users. Expert in cloud and microservices.",
            linkedin: "#"
        },
        {
            name: "Dr. Vikram Singh",
            role: "Career Counselor & MCA Coordinator",
            expertise: "Academic & Career Guidance",
            bio: "Guided 500+ students from BCA to successful MCA careers. Industry liaison for 10+ years.",
            linkedin: "#"
        },
        {
            name: "Arjun Mehta",
            role: "NLP Engineer",
            expertise: "Natural Language Processing",
            bio: "Building conversational AI and chatbots. Worked on language models serving 10M+ users.",
            linkedin: "#"
        }
    ];

    return (
        <section id="experts" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Meet Our Experts
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Learn from industry professionals and academic leaders who are shaping the future of AI
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experts.map((expert, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-purple-100"
                        >
                            {/* Profile Image Placeholder */}
                            <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6 mx-auto">
                                {expert.name.split(' ').map(n => n[0]).join('')}
                            </div>

                            {/* Name & Role */}
                            <div className="text-center mb-4">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">
                                    {expert.name}
                                </h3>
                                <p className="text-purple-600 font-semibold text-sm mb-2">
                                    {expert.role}
                                </p>
                                <p className="text-gray-600 text-sm">
                                    {expert.expertise}
                                </p>
                            </div>

                            {/* Bio */}
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                                {expert.bio}
                            </p>

                            {/* LinkedIn */}
                            <div className="flex justify-center">
                                <a
                                    href={expert.linkedin}
                                    className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold text-sm transition-colors"
                                    aria-label={`${expert.name} LinkedIn profile`}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                    <span>Connect</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
