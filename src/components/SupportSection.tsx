import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MessageCircle, Phone, Mail, Clock, HelpCircle, Video, BookOpen, Users, Zap, Star, ArrowRight } from "lucide-react";

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "24/7",
    response: "Usually responds in 2 minutes",
    badge: "Most Popular",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our experts",
    availability: "Mon-Fri, 9AM-6PM EST",
    response: "Call us at +1 (555) 123-4567",
    badge: "Priority",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Video,
    title: "Video Call",
    description: "Screen share and get visual assistance",
    availability: "Mon-Fri, 10AM-4PM EST",
    response: "Book a 15-min session",
    badge: "New",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us detailed questions",
    availability: "24/7",
    response: "Usually responds in 4 hours",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: HelpCircle,
    title: "Help Center",
    description: "Browse our comprehensive guides",
    availability: "Always available",
    response: "Self-service documentation",
    color: "from-gray-500 to-slate-600"
  },
  {
    icon: BookOpen,
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    availability: "Always available",
    response: "Learn at your own pace",
    color: "from-teal-500 to-cyan-600"
  }
];

const faqItems = [
  {
    question: "How do I set up my first automation?",
    answer: "Start with our guided setup wizard. Choose your template, connect your tools, and test your workflow in minutes."
  },
  {
    question: "Can I integrate with my existing tools?",
    answer: "Yes! ChatOps integrates with 100+ popular tools including Slack, Zapier, Google Workspace, and more."
  },
  {
    question: "What if I need help during setup?",
    answer: "Our support team is available 24/7 via live chat, and we offer free onboarding sessions for all customers."
  },
  {
    question: "How secure is my data?",
    answer: "We use enterprise-grade security with SOC 2 compliance, end-to-end encryption, and regular security audits."
  }
];

export default function SupportSection() {
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);
  const [isContactSalesOpen, setIsContactSalesOpen] = useState(false);

  const handleLiveChat = () => {
    setIsLiveChatOpen(true);
    // In a real app, this would open a live chat widget
    console.log("Opening live chat...");
    // Simulate opening live chat
    setTimeout(() => {
      alert("Live chat is opening... In a real app, this would connect you to our support team.");
      setIsLiveChatOpen(false);
    }, 1000);
  };

  const handleContactSales = () => {
    setIsContactSalesOpen(true);
    // In a real app, this would open a contact form or calendar booking
    console.log("Opening contact sales...");
    // Simulate opening contact sales
    setTimeout(() => {
      alert("Contact sales is opening... In a real app, this would open our sales contact form.");
      setIsContactSalesOpen(false);
    }, 1000);
  };

  return (
    <section id="support" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-sm font-medium text-indigo-700 mb-6">
            <Users className="w-4 h-4" />
            Support & Help
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            We're here to help you succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the support you need to make the most of ChatOps automation. Our team is ready to help 24/7.
          </p>
        </div>

        {/* Support Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {supportOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-indigo-300 transform hover:scale-[1.02]">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {option.badge && (
                      <Badge className={`${
                        option.badge === "Most Popular" ? "bg-green-100 text-green-800 border-green-200" :
                        option.badge === "Priority" ? "bg-blue-100 text-blue-800 border-blue-200" :
                        "bg-purple-100 text-purple-800 border-purple-200"
                      }`}>
                        {option.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">{option.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="font-medium text-gray-700">Availability:</span>
                    <span className="text-gray-600">{option.availability}</span>
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

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-600 text-lg">Quick answers to common questions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {faqItems.map((item, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-indigo-600" />
                  {item.question}
                </h4>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to get started?
            </h3>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you set up your first automation workflow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleLiveChat}
                disabled={isLiveChatOpen}
                size="lg"
                variant="secondary" 
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {isLiveChatOpen ? "Opening..." : "Start Live Chat"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={handleContactSales}
                disabled={isContactSalesOpen}
                size="lg"
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                {isContactSalesOpen ? "Opening..." : "Contact Sales"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <span className="font-medium text-gray-700">24/7 Support</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <span className="font-medium text-gray-700">99.9% Uptime</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <span className="font-medium text-gray-700">Expert Team</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <span className="font-medium text-gray-700">Fast Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
