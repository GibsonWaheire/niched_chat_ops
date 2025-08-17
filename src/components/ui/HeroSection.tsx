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

export default function HeroSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Everything you need to automate your business
        </h1>
        <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          Powerful workflow automation made simple through natural conversation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
