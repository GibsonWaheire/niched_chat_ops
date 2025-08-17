import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MessageSquare, Zap, Smartphone, FileText, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Chat-First Interface",
    description: "No complex dashboards. Just chat naturally to automate your workflows.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Instant Automation",
    description: "Type commands like 'send reminders' and watch automations execute in real-time.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Smartphone,
    title: "Multi-Channel Messaging",
    description: "Send SMS, WhatsApp, and email notifications to your clients automatically.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: FileText,
    title: "Smart Document Generation",
    description: "Generate invoices, receipts, and reports with simple chat commands.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: BarChart3,
    title: "Simple Analytics",
    description: "Track your automations and business metrics without overwhelming data.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime for your business workflows.",
    gradient: "from-slate-500 to-zinc-500"
  }
];

export function FeatureSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Everything you need to automate your business</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Powerful workflow automation made simple through natural conversation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-indigo-200 hover:border-indigo-400">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white mb-4`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}