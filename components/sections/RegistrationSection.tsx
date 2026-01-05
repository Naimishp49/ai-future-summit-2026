"use client";

import { useState } from "react";

export default function RegistrationSection() {
    const [formData, setFormData] = useState({
        fullName: "",
        collegeName: "",
        degree: "BCA",
        year: "3", // Default to Third Year for final year students
        email: "",
        mobile: "",
        programmingLanguage: ""
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [apiError, setApiError] = useState("");

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        } else if (formData.fullName.trim().length < 3) {
            newErrors.fullName = "Name must be at least 3 characters";
        }

        if (!formData.collegeName.trim()) {
            newErrors.collegeName = "College name is required";
        }

        if (!formData.year) {
            newErrors.year = "Year is required";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        const mobileRegex = /^[6-9][0-9]{9}$/;
        if (!formData.mobile.trim()) {
            newErrors.mobile = "Mobile number is required";
        } else if (!mobileRegex.test(formData.mobile.replace(/\s/g, ""))) {
            newErrors.mobile = "Please enter a valid 10-digit Indian mobile number";
        }

        if (!formData.programmingLanguage) {
            newErrors.programmingLanguage = "Please select your preferred programming language";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
        if (apiError) {
            setApiError("");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setApiError("");

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                // Handle duplicate or other errors
                if (response.status === 409) {
                    setApiError(result.error);
                    // Highlight the duplicate field
                    if (result.error.includes('Email')) {
                        setErrors(prev => ({ ...prev, email: result.error }));
                    } else if (result.error.includes('Mobile')) {
                        setErrors(prev => ({ ...prev, mobile: result.error }));
                    }
                } else {
                    setApiError(result.error || 'Registration failed. Please try again.');
                }
                setIsSubmitting(false);
                return;
            }

            // Success
            console.log("Registration successful:", result);
            setIsSubmitted(true);
            setIsSubmitting(false);

            // Reset form
            setFormData({
                fullName: "",
                collegeName: "",
                degree: "BCA",
                year: "3",
                email: "",
                mobile: "",
                programmingLanguage: ""
            });

        } catch (error) {
            console.error("Registration error:", error);
            setApiError("Network error. Please check your connection and try again.");
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <section id="register" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-12 shadow-lg border border-green-200">
                            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                🎉 Registration Successful!
                            </h3>
                            <p className="text-lg text-gray-600 mb-6">
                                Thank you for registering for the <strong>Programming Challenge 2026</strong>. We've sent a confirmation email with event details and important instructions.
                            </p>
                            <div className="bg-white rounded-lg p-6 mb-6 border-2 border-green-200">
                                <p className="text-gray-700 mb-2">
                                    📧 <strong>Check your email</strong> for:
                                </p>
                                <ul className="text-left text-gray-600 space-y-1 ml-8">
                                    <li>• Event schedule and timeline</li>
                                    <li>• Venue directions and map</li>
                                    <li>• Important instructions</li>
                                    <li>• Prize details and expert talks info</li>
                                </ul>
                            </div>
                            <p className="text-gray-600 mb-8">
                                We look forward to seeing you on <strong className="text-red-600">24th January, 2026</strong> at Darshan University!
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                            >
                                Register Another Student
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="register" className="py-20 bg-gradient-to-br from-white to-red-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Register for Programming Challenge
                        </h2>
                        <p className="text-xl text-gray-600">
                            Secure your spot at the Programming Challenge 2026. Registration is completely <strong className="text-red-600">FREE</strong>!
                        </p>
                        <div className="mt-4 inline-block bg-red-100 text-red-700 px-6 py-2 rounded-full font-semibold border-2 border-red-300">
                            🎯 For BCA / B.Sc. IT Final Year Students Only
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-red-100">
                        {apiError && (
                            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-red-700 font-semibold">{apiError}</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? "border-red-500 bg-red-50" : "border-gray-300"
                                        } focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all`}
                                    placeholder="Enter your full name"
                                />
                                {errors.fullName && (
                                    <p className="mt-1 text-sm text-red-600 flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        {errors.fullName}
                                    </p>
                                )}
                            </div>

                            {/* College Name */}
                            <div>
                                <label htmlFor="collegeName" className="block text-sm font-semibold text-gray-700 mb-2">
                                    College Name *
                                </label>
                                <input
                                    type="text"
                                    id="collegeName"
                                    name="collegeName"
                                    value={formData.collegeName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.collegeName ? "border-red-500 bg-red-50" : "border-gray-300"
                                        } focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all`}
                                    placeholder="Enter your college name"
                                />
                                {errors.collegeName && (
                                    <p className="mt-1 text-sm text-red-600 flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        {errors.collegeName}
                                    </p>
                                )}
                            </div>

                            {/* Degree and Year */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="degree" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Degree *
                                    </label>
                                    <select
                                        id="degree"
                                        name="degree"
                                        value={formData.degree}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                    >
                                        <option value="BCA">BCA</option>
                                        <option value="B.Sc. IT">B.Sc. IT</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="year" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Year *
                                    </label>
                                    <select
                                        id="year"
                                        name="year"
                                        value={formData.year}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.year ? "border-red-500 bg-red-50" : "border-gray-300"
                                            } focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all`}
                                    >
                                        <option value="3">Third Year (Final Year)</option>
                                    </select>
                                    {errors.year && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.year}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500 bg-red-50" : "border-gray-300"
                                        } focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all`}
                                    placeholder="your.email@example.com"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600 flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Mobile Number */}
                            <div>
                                <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Mobile Number *
                                </label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.mobile ? "border-red-500 bg-red-50" : "border-gray-300"
                                        } focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all`}
                                    placeholder="10-digit mobile number"
                                    maxLength={10}
                                />
                                {errors.mobile && (
                                    <p className="mt-1 text-sm text-red-600 flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        {errors.mobile}
                                    </p>
                                )}
                            </div>

                            {/* Programming Language */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    Preferred Programming Language *
                                </label>
                                <div className="space-y-3">
                                    <label className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-300 cursor-pointer hover:bg-red-50 hover:border-red-300 transition-all">
                                        <input
                                            type="radio"
                                            name="programmingLanguage"
                                            value="C"
                                            checked={formData.programmingLanguage === "C"}
                                            onChange={handleChange}
                                            className="w-4 h-4 text-red-600 focus:ring-red-500"
                                        />
                                        <span className="ml-3 text-gray-700 font-medium">C</span>
                                    </label>
                                    <label className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-300 cursor-pointer hover:bg-red-50 hover:border-red-300 transition-all">
                                        <input
                                            type="radio"
                                            name="programmingLanguage"
                                            value="C++"
                                            checked={formData.programmingLanguage === "C++"}
                                            onChange={handleChange}
                                            className="w-4 h-4 text-red-600 focus:ring-red-500"
                                        />
                                        <span className="ml-3 text-gray-700 font-medium">C++</span>
                                    </label>
                                    <label className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-300 cursor-pointer hover:bg-red-50 hover:border-red-300 transition-all">
                                        <input
                                            type="radio"
                                            name="programmingLanguage"
                                            value="Java"
                                            checked={formData.programmingLanguage === "Java"}
                                            onChange={handleChange}
                                            className="w-4 h-4 text-red-600 focus:ring-red-500"
                                        />
                                        <span className="ml-3 text-gray-700 font-medium">Java</span>
                                    </label>
                                </div>
                                {errors.programmingLanguage && (
                                    <p className="mt-2 text-sm text-red-600 flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        {errors.programmingLanguage}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Registering...
                                    </span>
                                ) : (
                                    "🎯 Register for Challenge"
                                )}
                            </button>

                            <p className="text-sm text-gray-500 text-center">
                                By registering, you agree to receive event updates via email and SMS
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
