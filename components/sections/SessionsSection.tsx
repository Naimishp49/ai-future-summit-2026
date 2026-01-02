"use client";

import { useState } from "react";

export default function SessionsSection() {
    const [activeTab, setActiveTab] = useState("all");

    const sessions = [
        {
            title: "AI for BCA Students: From Fear to First App",
            time: "10:00 AM - 11:30 AM",
            speaker: "Dr. Rajesh Patel",
            level: "BCA",
            category: "beginner",
            description: "Demystify AI with practical examples. Build your first AI-powered application using simple Python libraries and understand how AI fits into modern software development."
        },
        {
            title: "Building AI-Powered Web Applications",
            time: "11:45 AM - 1:15 PM",
            speaker: "Priya Sharma",
            level: "BCA/MCA",
            category: "intermediate",
            description: "Learn to integrate AI APIs into web applications. Create intelligent chatbots, recommendation systems, and smart search features using modern frameworks."
        },
        {
            title: "Machine Learning Fundamentals for Developers",
            time: "2:00 PM - 3:30 PM",
            speaker: "Prof. Amit Kumar",
            level: "BCA/MCA",
            category: "intermediate",
            description: "Understand core ML concepts without heavy mathematics. Explore supervised and unsupervised learning with real-world datasets and practical use cases."
        },
        {
            title: "Why System Design Matters in AI Projects",
            time: "3:45 PM - 5:00 PM",
            speaker: "Neha Desai",
            level: "MCA",
            category: "advanced",
            description: "Learn how to architect scalable AI systems. Understand microservices, data pipelines, and deployment strategies used by top tech companies."
        },
        {
            title: "BCA to MCA: Career Growth in the AI Era",
            time: "5:15 PM - 6:00 PM",
            speaker: "Dr. Vikram Singh",
            level: "BCA",
            category: "career",
            description: "Discover career opportunities in AI and how MCA prepares you for leadership roles. Hear from alumni working at leading tech companies and startups."
        },
        {
            title: "Natural Language Processing Made Simple",
            time: "10:00 AM - 11:30 AM (Hall 2)",
            speaker: "Arjun Mehta",
            level: "BCA/MCA",
            category: "intermediate",
            description: "Explore text analysis, sentiment detection, and language models. Build practical NLP applications for content moderation and customer insights."
        },
        {
            title: "Computer Vision: From Theory to Practice",
            time: "2:00 PM - 3:30 PM (Hall 2)",
            speaker: "Dr. Kavita Joshi",
            level: "MCA",
            category: "advanced",
            description: "Dive into image recognition, object detection, and facial recognition systems. Understand CNN architectures and transfer learning techniques."
        },
        {
            title: "AI Ethics and Responsible Development",
            time: "4:00 PM - 5:00 PM (Hall 2)",
            speaker: "Prof. Suresh Rao",
            level: "All",
            category: "career",
            description: "Understand the ethical implications of AI development. Learn about bias, privacy, and building AI systems that benefit society responsibly."
        }
    ];

    const filteredSessions = activeTab === "all"
        ? sessions
        : sessions.filter(session => session.category === activeTab);

    const tabs = [
        { id: "all", label: "All Sessions" },
        { id: "beginner", label: "Beginner" },
        { id: "intermediate", label: "Intermediate" },
        { id: "advanced", label: "Advanced" },
        { id: "career", label: "Career" }
    ];

    return (
        <section id="sessions" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Event Sessions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Carefully curated sessions covering AI fundamentals, practical applications, and career guidance
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${activeTab === tab.id
                                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                                    : "bg-white text-gray-700 hover:bg-purple-50 border border-gray-200"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Sessions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSessions.map((session, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-purple-100"
                        >
                            {/* Level Badge */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                                    {session.level}
                                </span>
                                <span className="text-sm text-gray-500 flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {session.time}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                                {session.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                {session.description}
                            </p>

                            {/* Speaker */}
                            <div className="flex items-center pt-4 border-t border-gray-100">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                                    {session.speaker.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm">{session.speaker}</div>
                                    <div className="text-xs text-gray-500">Speaker</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
