import { useState } from "react";
import NicheCards from "./NicheCards";
import CustomTemplateRequest from "./CustomTemplateRequest";

export default function NicheSection() {
  const [showCustomRequest, setShowCustomRequest] = useState(false);

  if (showCustomRequest) {
    return <CustomTemplateRequest />;
  }

  return (
    <section id="templates" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Choose your business template</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Pre-built workflows designed specifically for your industry.
            Start automating in minutes, not hours.
          </p>
        </div>

        <NicheCards />

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Don't see your industry? We're adding new templates every week.
          </p>
          <button
            onClick={() => setShowCustomRequest(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>Request a custom template</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}