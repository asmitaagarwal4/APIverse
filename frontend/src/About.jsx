import Background from "./components/Background";
import Header from "./components/Header";

const features = [
  {
    title: '🔍 Natural Language API Search',
    description:
      'Search for APIs by simply describing what you need in plain English. APIVerse understands your intent and finds the most relevant APIs.',
    example: 'e.g., “I want to send SMS notifications from my Node.js backend”',
  },
  {
    title: '⚙️ Auto-Integration',
    description:
      'Automatically generate production-ready integration code tailored for your stack. Get information about Authentication and CORS support.',
    example: 'Supports React, Node.js, Python, and other modern frameworks.',
  },
  {
    title: '🧪 API Health Monitoring',
    description:
      'Monitor API latency, uptime, and reliability in real-time.',
  },
  {
    title: '🧑‍💻 Developer API Marketplace',
    description:
      'Discover underrated APIs, read community reviews, and receive intelligent suggestions powered by community feedback and AI insights.',
  },
];


function About() {
  return (
    <div className="relative">
      <Background />
      <Header />
      <div className="max-w-5xl mx-auto px-6 py-16 text-purple-300">
      <h1 className="text-4xl font-bold mb-6 text-center">About APIVerse</h1>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
        APIVerse is your AI-powered partner for API discovery, integration, and monitoring. We simplify the developer journey so you can focus on building, not plumbing.
      </p>

      <div className="space-y-12">
        {features.map((feature, idx) => (
          <div key={idx} className="border hover:shadow-[0_10px_40px_rgba(127,92,255,0.3)] transition-all duration-300 shadow-md p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-300 mb-2">{feature.description}</p>
            {feature.example && <p className="text-sm text-gray-500 italic">{feature.example}</p>}
          </div>
        ))}
      </div>

      {/* <div className="mt-20 bg-gray-50 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">💡 Example Use Case</h2>
        <p className="mb-2 text-gray-700">
          Scenario: You’re building a food delivery app and need:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Payment processing</li>
          <li>SMS verification</li>
          <li>Map and geolocation services</li>
        </ul>
        <p className="text-gray-700 mb-2">
          Just ask: <span className="italic">“I need to accept card payments, verify users via SMS, and show delivery location in React”</span>
        </p>
        <p className="text-gray-700">
          APIVerse will suggest APIs like Stripe, Twilio, and Google Maps, generate ready-to-use integration code for React, and monitor those APIs for performance and reliability.
        </p>
      </div> */}

      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-2">🛠️ Tech Stack</h2>
        <p className="text-gray-700">React.js, Tailwind CSS, Three JS, FastAPI (Python), MongoDB (with vector search), Gemini APIs.</p>
      </div>
    </div>
    </div>
  );
}

export default About;