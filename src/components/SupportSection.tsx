import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MessageCircle, Phone, Mail, Clock, HelpCircle } from "lucide-react";

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "24/7",
    response: "Usually responds in 2 minutes"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our experts",
    availability: "Mon-Fri, 9AM-6PM EST",
    response: "Call us at +1 (555) 123-4567"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us detailed questions",
    availability: "24/7",
    response: "Usually responds in 4 hours"
  },
  {
    icon: HelpCircle,
    title: "Help Center",
    description: "Browse our comprehensive guides",
    availability: "Always available",
    response: "Self-service documentation"
  }
];

export default function SupportSection() {
  return (
    <section id="support" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">We're here to help</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get the support you need to make the most of ChatOps automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{option.title}</CardTitle>
                  <CardDescription className="text-gray-600">{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium text-gray-700">Availability:</span>
                    <p className="text-gray-600">{option.availability}</p>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-gray-700">Response:</span>
                    <p className="text-gray-600">{option.response}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? We're always here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity">
              Start Live Chat
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
