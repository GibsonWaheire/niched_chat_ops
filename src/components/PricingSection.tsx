import { Button } from "./ui/button";  
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out automation",
    icon: Zap,
    features: [
      "20 chat automations/month",
      "1 business template",
      "Basic email support",
      "SMS notifications (5/month)",
      "Simple analytics"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Professional",
    price: "$19",
    period: "month",
    description: "Everything you need to automate your business",
    icon: Crown,
    features: [
      "Unlimited chat automations",
      "All business templates",
      "Priority support",
      "Unlimited SMS & WhatsApp",
      "Advanced analytics",
      "PDF invoice generation",
      "Custom workflow builder",
      "API access"
    ],
    cta: "Start 14-day trial",
    popular: true
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Simple, transparent pricing</h2>
          <p className="text-gray-600 text-lg">
            Start free, upgrade when you're ready to scale your automation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={plan.name} 
                className={`relative ${
                  plan.popular 
                    ? 'border-indigo-600 shadow-lg scale-105' 
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' 
                        : 'bg-gray-100'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">{plan.description}</CardDescription>
                  <div className="space-y-1">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" size="lg">
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12 space-y-4">
          <p className="text-sm text-gray-600">
            All plans include SSL security, 99.9% uptime, and cancel anytime
          </p>
          <div className="flex justify-center gap-8 text-xs text-gray-600">
            <span>✓ No setup fees</span>
            <span>✓ No hidden costs</span>
            <span>✓ 14-day money back</span>
          </div>
        </div>
      </div>
    </section>
  );
}
