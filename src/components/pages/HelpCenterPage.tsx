import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  Video, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle, 
  ExternalLink,
  Zap,
  Settings,
  Users,
  CreditCard,
  Shield,
  Globe
} from "lucide-react";

export function HelpCenterPage() {
  const helpCategories = [
    {
      icon: Zap,
      title: "Getting Started",
      description: "Quick setup and first automation",
      articles: 12,
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Settings,
      title: "Configuration",
      description: "Customize your workflows and settings",
      articles: 18,
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Collaborate with your team",
      articles: 8,
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: CreditCard,
      title: "Billing & Plans",
      description: "Manage your subscription",
      articles: 6,
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Keep your data safe",
      articles: 10,
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: Globe,
      title: "Integrations",
      description: "Connect with your favorite tools",
      articles: 25,
      color: "from-gray-500 to-slate-600"
    }
  ];

  const popularArticles = [
    {
      title: "How to create your first automation",
      category: "Getting Started",
      readTime: "5 min read",
      views: "2.5k"
    },
    {
      title: "Connecting ChatOps with Slack",
      category: "Integrations",
      readTime: "8 min read",
      views: "1.8k"
    },
    {
      title: "Setting up appointment reminders",
      category: "Configuration",
      readTime: "6 min read",
      views: "1.6k"
    },
    {
      title: "Managing team permissions",
      category: "Team Management",
      readTime: "4 min read",
      views: "1.2k"
    },
    {
      title: "Understanding your usage analytics",
      category: "Configuration",
      readTime: "7 min read",
      views: "1.1k"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with ChatOps?",
      answer: "Getting started is simple! Sign up for a free trial, choose a business template, and start creating automations using natural language commands. Our setup wizard will guide you through the process in under 5 minutes."
    },
    {
      question: "Can I integrate ChatOps with my existing tools?",
      answer: "Absolutely! ChatOps integrates with 100+ popular tools including Slack, Google Calendar, Stripe, Salesforce, and more. You can also use our API to build custom integrations."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, security is our top priority. We use enterprise-grade encryption, SOC 2 compliance, and never store sensitive information like passwords or credit card details."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We'll notify you when you're approaching your limits. You can either upgrade your plan or we'll pause automations until the next billing cycle. No surprise charges!"
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your automations will continue working until the end of your current billing period, and you can export your data."
    }
  ];

  return (
    <section id="help-center" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-sm font-medium text-indigo-700 mb-6">
            <HelpCircle className="w-4 h-4" />
            Help Center
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            How can we
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              help you today?
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find answers to common questions, step-by-step tutorials, and everything 
            you need to get the most out of ChatOps.
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or FAQs..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700">
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-gray-600 text-lg">Find help organized by topic</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300 cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 text-center">{category.title}</CardTitle>
                    <p className="text-gray-600 text-center">{category.description}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                      <BookOpen className="w-4 h-4" />
                      {category.articles} articles
                    </div>
                    <Button variant="outline" className="w-full group-hover:border-indigo-300 group-hover:text-indigo-600 transition-colors duration-200">
                      Browse Articles
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Articles</h2>
            <p className="text-gray-600 text-lg">Most viewed help content</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300 group cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-sm text-gray-500">{article.views} views</span>
                  </div>
                  <CardTitle className="text-lg text-gray-900 group-hover:text-indigo-600 transition-colors duration-200 leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <BookOpen className="w-4 h-4" />
                    {article.readTime}
                  </div>
                  <Button variant="outline" className="w-full group-hover:border-indigo-300 group-hover:text-indigo-600 transition-colors duration-200">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Quick answers to common questions</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-indigo-600" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Support Options */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
            <p className="text-gray-600 text-lg">We're here to help you succeed</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-gray-900">Live Chat Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Get instant help from our support team</p>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                  Start Chat
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  <Video className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-gray-900">Video Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Step-by-step video guides</p>
                <Button variant="outline" className="w-full">
                  Watch Videos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  <ExternalLink className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-gray-900">Community Forum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Connect with other users</p>
                <Button variant="outline" className="w-full">
                  Join Community
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you get the most out of ChatOps
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 text-lg font-semibold"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                View All Articles
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
