import { Button } from "./ui/button";
import { MessageCircle, HelpCircle, BookOpen, ArrowRight, Users } from "lucide-react";

export default function SupportSection() {
  const handleLiveChat = () => {
    // In a real app, this would open a live chat widget
    console.log("Opening live chat...");
    // Simulate opening live chat
    setTimeout(() => {
      alert("Live chat is opening... In a real app, this would connect you to our support team.");
    }, 1000);
  };

  const handleContactSales = () => {
    // In a real app, this would open a contact form or calendar booking
    console.log("Opening contact sales...");
    // Simulate opening contact sales
    setTimeout(() => {
      alert("Contact sales is opening... In a real app, this would open our sales contact form.");
    }, 1000);
  };

  return (
    <section id="support" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-sm font-medium text-indigo-700 mb-4">
            <Users className="w-4 h-4" />
            Support & Help
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Need help? We've got you covered
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get the support you need through our comprehensive help resources and expert team.
          </p>
        </div>

        {/* Main Support Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Help Center Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Help Center</h3>
                <p className="text-gray-600 mb-4">
                  Browse our comprehensive guides, tutorials, and documentation to find answers to your questions.
                </p>
                <Button 
                  onClick={() => window.location.href = '/help'}
                  variant="outline" 
                  className="w-full border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300"
                >
                  Visit Help Center
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Documentation Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Documentation</h3>
                <p className="text-gray-600 mb-4">
                  Access our technical documentation, API references, and integration guides.
                </p>
                <Button 
                  onClick={() => window.location.href = '/docs'}
                  variant="outline" 
                  className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300"
                >
                  View Documentation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Support Actions</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleLiveChat}
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-6 py-3"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Live Chat
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={handleContactSales}
                size="lg"
                variant="outline" 
                className="border-indigo-300 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-400 px-6 py-3"
              >
                <Users className="w-5 h-5 mr-2" />
                Contact Sales
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Live chat available 24/7 • Sales team available Mon-Fri, 9AM-6PM EST
            </p>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-3">
              Explore More Resources
            </h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Discover our API documentation, integration guides, and community resources to get the most out of ChatOps.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={() => window.location.href = '/api'}
                variant="secondary"
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                API Reference
              </Button>
              <Button 
                onClick={() => window.location.href = '/integrations'}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-indigo-600"
              >
                Integrations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
