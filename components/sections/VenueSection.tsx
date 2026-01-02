import QRCode from "@/components/QRCode";

export default function VenueSection() {
    const schedule = [
        { time: "9:00 AM - 9:30 AM", event: "Registration & Welcome Coffee" },
        { time: "9:30 AM - 10:00 AM", event: "Opening Ceremony & Keynote" },
        { time: "10:00 AM - 1:15 PM", event: "Morning Sessions (Parallel Tracks)" },
        { time: "1:15 PM - 2:00 PM", event: "Lunch Break & Networking" },
        { time: "2:00 PM - 5:00 PM", event: "Afternoon Sessions & Workshops" },
        { time: "5:15 PM - 6:00 PM", event: "Career Panel & Q&A" },
        { time: "6:00 PM - 6:30 PM", event: "Closing Remarks & Certificate Distribution" }
    ];

    return (
        <section id="venue" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Venue & Schedule
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Join us at Darshan University for a full day of learning and networking
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Venue Details */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <svg className="w-8 h-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Event Location
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Darshan University Campus</h4>
                                <p className="text-gray-600">
                                    Morbi-Rajkot Highway<br />
                                    Hadala, Rajkot - 363650<br />
                                    Gujarat, India
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-purple-50 rounded-lg p-4">
                                    <div className="text-sm text-gray-600 mb-1">Date</div>
                                    <div className="font-bold text-gray-900">January 15, 2026</div>
                                </div>
                                <div className="bg-purple-50 rounded-lg p-4">
                                    <div className="text-sm text-gray-600 mb-1">Time</div>
                                    <div className="font-bold text-gray-900">9:00 AM - 6:30 PM</div>
                                </div>
                            </div>

                            <div className="bg-purple-50 rounded-lg p-4">
                                <div className="text-sm text-gray-600 mb-1">Venue</div>
                                <div className="font-bold text-gray-900">Main Auditorium & Conference Halls</div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                                <div className="text-center">
                                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                    <p className="text-gray-500 font-medium">Interactive Map</p>
                                    <p className="text-sm text-gray-400">Click to view directions</p>
                                </div>
                            </div>

                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>

                    {/* Schedule Timeline */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <svg className="w-8 h-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Event Timeline
                        </h3>

                        <div className="space-y-4">
                            {schedule.map((item, index) => (
                                <div key={index} className="flex items-start group">
                                    {/* Timeline dot */}
                                    <div className="flex flex-col items-center mr-4">
                                        <div className="w-4 h-4 bg-purple-600 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                                        {index < schedule.length - 1 && (
                                            <div className="w-0.5 h-full bg-purple-200 mt-2"></div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pb-8">
                                        <div className="bg-purple-50 rounded-lg p-4 group-hover:bg-purple-100 transition-colors duration-200">
                                            <div className="text-sm font-semibold text-purple-600 mb-1">
                                                {item.time}
                                            </div>
                                            <div className="font-semibold text-gray-900">
                                                {item.event}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                                <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Important Information
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Bring your student ID for registration</li>
                                <li>• Lunch and refreshments will be provided</li>
                                <li>• Certificates will be distributed at the end</li>
                                <li>• Limited seats - register early!</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* QR Code Section */}
                <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Quick Registration
                        </h3>
                        <p className="text-gray-600">
                            Scan the QR code with your mobile device to register instantly
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        {/* QR Code */}
                        <QRCode
                            url="https://ai-future-summit-2026.vercel.app#register"
                            size={220}
                            label="Scan to Register"
                        />

                        {/* Instructions */}
                        <div className="max-w-md">
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                How to Register via QR Code
                            </h4>
                            <ol className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-xs mr-3 mt-0.5">1</span>
                                    <span>Open your phone's camera app or QR code scanner</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-xs mr-3 mt-0.5">2</span>
                                    <span>Point your camera at the QR code above</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-xs mr-3 mt-0.5">3</span>
                                    <span>Tap the notification to open the registration form</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-xs mr-3 mt-0.5">4</span>
                                    <span>Fill in your details and submit - it takes less than 2 minutes!</span>
                                </li>
                            </ol>

                            <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                                <p className="text-xs text-gray-600">
                                    <strong className="text-purple-600">Pro Tip:</strong> Share this QR code with your classmates to register together!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
