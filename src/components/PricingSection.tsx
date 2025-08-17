import { useState } from "react";
import { Button } from "./ui/button";  
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check, Zap, Crown, Star, ArrowRight, Shield, Clock, Users, MessageSquare, BarChart3 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: { monthly: 9, yearly: 90 },
    period: "month",
    description: "Perfect for small businesses getting started",
    icon: Zap,
    gradient: "from-green-500 to-emerald-600",
    features: [
      { text: "100 chat automations/month", included: true, highlight: false },
      { text: "3 business templates", included: true, highlight: false },
      { text: "Email support", included: true, highlight: false },
      { text: "SMS notifications (50/month)", included: true, highlight: false },
      { text: "Basic analytics", included: true, highlight: false },
      { text: "Mobile app access", included: true, highlight: false },
      { text: "PDF generation (10/month)", included: true, highlight: false },
      { text: "Team collaboration (2 users)", included: true, highlight: false },
      { text: "Custom integrations", included: false, highlight: false },
      { text: "Priority support", included: false, highlight: false }
    ],
    cta: "Start 7-day trial",
    popular: false,
    savings: "Save 17%"
  },
  {
    name: "Professional",
    price: { monthly: 19, yearly: 190 },
    period: "month",
    description: "Everything you need to automate your business",
    icon: Crown,
    gradient: "from-indigo-600 to-purple-600",
    features: [
      { text: "Unlimited chat automations", included: true, highlight: true },
      { text: "All business templates", included: true, highlight: true },
      { text: "Priority support", included: true, highlight: true },
      { text: "Unlimited SMS & WhatsApp", included: true, highlight: true },
      { text: "Advanced analytics", included: true, highlight: true },
      { text: "PDF invoice generation", included: true, highlight: true },
      { text: "Custom workflow builder", included: true, highlight: true },
      { text: "API access", included: true, highlight: true },
      { text: "Team collaboration", included: true, highlight: true },
      { text: "White-label options", included: true, highlight: true }
    ],
    cta: "Start 14-day trial",
    popular: true,
    savings: "Save 17%"
  },
  {
    name: "Enterprise",
    price: { monthly: 49, yearly: 490 },
    period: "month",
    description: "For large teams and complex workflows",
    icon: Star,
    gradient: "from-purple-600 to-pink-600",
    features: [
      { text: "Everything in Professional", included: true, highlight: true },
      { text: "Unlimited team members", included: true, highlight: true },
      { text: "Advanced security & compliance", included: true, highlight: true },
      { text: "Custom AI training", included: true, highlight: true },
      { text: "Dedicated account manager", included: true, highlight: true },
      { text: "Custom integrations", included: true, highlight: true },
      { text: "SLA guarantees", included: true, highlight: true },
      { text: "On-premise deployment", included: true, highlight: true }
    ],
    cta: "Contact Sales",
    popular: false,
    savings: "Save 17%"
  }
];

const featureCategories = [
  {
    name: "Core Features",
    icon: Zap,
    features: ["Chat automations", "Business templates", "Mobile access"]
  },
  {
    name: "Communication",
    icon: MessageSquare,
    features: ["SMS notifications", "WhatsApp integration", "Email automation"]
  },
  {
    name: "Analytics & Reports",
    icon: BarChart3,
    features: ["Performance metrics", "Custom dashboards", "Export capabilities"]
  },
  {
    name: "Security & Support",
    icon: Shield,
    features: ["SSL encryption", "Priority support", "SLA guarantees"]
  }
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const getCurrentPrice = (plan: typeof plans[0]) => {
    return isYearly ? plan.price.yearly : plan.price.monthly;
  };

  const getPeriodText = (plan: typeof plans[0]) => {
    if (plan.price.monthly === 0) return "forever";
    return isYearly ? "year" : "month";
  };

  const getYearlySavings = (plan: typeof plans[0]) => {
    if (plan.price.monthly === 0) return null;
    const monthlyTotal = plan.price.monthly * 12;
    const yearlyTotal = plan.price.yearly;
    const savings = monthlyTotal - yearlyTotal;
    return savings > 0 ? `Save $${savings}/year` : null;
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-sm font-medium text-indigo-700 mb-6">
            <Star className="w-4 h-4" />
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start with our affordable Starter plan and scale to Enterprise when you're ready. 
            No hidden fees, no surprises.
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isYearly ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  isYearly ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge className="bg-green-100 text-green-800 border-green-200">
                Save up to 17%
              </Badge>
            )}
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            const currentPrice = getCurrentPrice(plan);
            const periodText = getPeriodText(plan);
            const yearlySavings = getYearlySavings(plan);
            
            return (
              <Card 
                key={plan.name} 
                className={`relative transition-all duration-300 ${
                  plan.popular 
                    ? 'border-indigo-600 shadow-2xl scale-105' 
                    : 'border-gray-200 hover:border-indigo-300'
                } ${
                  hoveredPlan === plan.name ? 'shadow-2xl' : 'shadow-lg'
                }`}
                onMouseEnter={() => setHoveredPlan(plan.name)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                
                {yearlySavings && (
                  <Badge className="absolute -top-3 right-4 bg-green-100 text-green-800 border-green-200">
                    {yearlySavings}
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-r ${plan.gradient} text-white shadow-lg`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                  <CardTitle className="text-3xl text-gray-900 mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-lg text-gray-600 mb-6">{plan.description}</CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold text-gray-900">
                        ${currentPrice}
                      </span>
                      <span className="text-xl text-gray-600">/{periodText}</span>
                    </div>
                    {currentPrice > 0 && isYearly && (
                      <p className="text-sm text-gray-500">
                        ${plan.price.monthly}/month when billed monthly
                      </p>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className={`flex items-start gap-3 ${
                        !feature.included ? 'opacity-50' : ''
                      }`}>
                        {feature.included ? (
                          <Check className={`w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 ${
                            feature.highlight ? 'animate-pulse' : ''
                          }`} />
                        ) : (
                          <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${
                          feature.included 
                            ? feature.highlight ? 'text-gray-900 font-medium' : 'text-gray-700'
                            : 'text-gray-400'
                        }`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feature Comparison */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Compare all features
            </h3>
            <p className="text-gray-600 text-lg">
              See exactly what's included in each plan
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {featureCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div key={category.name} className="text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{category.name}</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {category.features.map((feature, index) => (
                      <li key={index} className="flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="text-center space-y-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-gray-600">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="font-medium">SSL Security</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-600">
              <Clock className="w-5 h-5 text-blue-500" />
              <span className="font-medium">99.9% Uptime</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-600">
              <Users className="w-5 h-5 text-purple-500" />
              <span className="font-medium">10,000+ Users</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              All plans include enterprise-grade security, 24/7 monitoring, and cancel anytime
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                No setup fees
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                No hidden costs
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                14-day money back
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Free migration support
              </span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to automate your business?
            </h3>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have transformed their workflows with ChatOps
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 text-lg font-semibold"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
