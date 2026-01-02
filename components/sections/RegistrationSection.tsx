"use client";

import { useState } from "react";

export default function RegistrationSection() {
    const [formData, setFormData] = useState({
        fullName: "",
        collegeName: "",
        degree: "BCA",
        year: "",
        email: "",
        mobile: "",
        interest: ""
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
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

        const mobileRegex = /^[0-9]{10}$/;
        if (!formData.mobile.trim()) {
            newErrors.mobile = "Mobile number is required";
        } else if (!mobileRegex.test(formData.mobile.replace(/\s/g, ""))) {
            newErrors.mobile = "Please enter a valid 10-digit mobile number";
        }

        if (!formData.interest) {
            newErrors.interest = "Please select your area of interest";
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
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log("Form submitted:", formData);
        setIsSubmitted(true);
        setIsSubmitting(false);

        // Reset form
        setFormData({
            fullName: "",
            collegeName: "",
            degree: "BCA",
            year: "",
            email: "",
            mobile: "",
            interest: ""
        });
    };

    if (isSubmitted) {
        return (
            <section id="register" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-12 shadow-lg border border-green-200">
                            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                Registration Successful!
                            </h3>
                            <p className="text-lg text-gray-600 mb-6">
                                Thank you for registering for the AI Future Summit 2026. We've sent a confirmation email with event details and your entry pass.
                            </p>
                            <p className="text-gray-600 mb-8">
                                We look forward to seeing you on <strong>January 15, 2026</strong> at Darshan University!
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
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
        <section id="register" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Register for the Event
                        </h2>
                        <p className="text-xl text-gray-600">
                            Secure your spot at the AI Future Summit 2026. Registration is completely free!
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 md:p-12 shadow-2xl border border-purple-100">
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
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? "border-red-500" : "border-gray-300"
                                        } focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                                    placeholder="Enter your full name"
                                />
                                {errors.fullName && (
                                    <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
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
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.collegeName ? "border-red-500" : "border-gray-300"
                                        } focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                                    placeholder="Enter your college name"
                                />
                                {errors.collegeName && (
                                    <p className="mt-1 text-sm text-red-600">{errors.collegeName}</p>
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
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    >
                                        <option value="BCA">BCA</option>
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
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.year ? "border-red-500" : "border-gray-300"
                                            } focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                                    >
                                        <option value="">Select Year</option>
                                        <option value="1">First Year</option>
                                        <option value="2">Second Year</option>
                                        <option value="3">Third Year</option>
                                    </select>
                                    {errors.year && (
                                        <p className="mt-1 text-sm text-red-600">{errors.year}</p>
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
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"
                                        } focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                                    placeholder="your.email@example.com"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
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
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.mobile ? "border-red-500" : "border-gray-300"
                                        } focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                                    placeholder="10-digit mobile number"
                                />
                                {errors.mobile && (
                                    <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
                                )}
                            </div>

                            {/* Area of Interest */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    Area of Interest *
                                </label>
                                <div className="space-y-3">
                                    <label className="flex items-center p-4 bg-white rounded-lg border border-gray-300 cursor-pointer hover:bg-purple-50 transition-colors">
                                        <input
                                            type="radio"
                                            name="interest"
                                            value="ai-projects"
                                            checked={formData.interest === "ai-projects"}
                                            onChange={handleChange}
                                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                                        />
                                        <span className="ml-3 text-gray-700">AI Projects</span>
                                    </label>
                                    <label className="flex items-center p-4 bg-white rounded-lg border border-gray-300 cursor-pointer hover:bg-purple-50 transition-colors">
                                        <input
                                            type="radio"
                                            name="interest"
                                            value="mca-program"
                                            checked={formData.interest === "mca-program"}
                                            onChange={handleChange}
                                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                                        />
                                        <span className="ml-3 text-gray-700">MCA Program</span>
                                    </label>
                                    <label className="flex items-center p-4 bg-white rounded-lg border border-gray-300 cursor-pointer hover:bg-purple-50 transition-colors">
                                        <input
                                            type="radio"
                                            name="interest"
                                            value="both"
                                            checked={formData.interest === "both"}
                                            onChange={handleChange}
                                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                                        />
                                        <span className="ml-3 text-gray-700">Both</span>
                                    </label>
                                </div>
                                {errors.interest && (
                                    <p className="mt-1 text-sm text-red-600">{errors.interest}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
                                    "Register for the Event"
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
