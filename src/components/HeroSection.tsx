import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ChatInterface } from "./ChatInterface";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Automate your business with
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> simple chat</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Skip complex dashboards. Just chat naturally to book appointments, send reminders, 
              generate invoices, and automate your entire workflow.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition-opacity text-lg px-8 py-6">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              No setup required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              20 free automations/month
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Cancel anytime
            </div>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <ChatInterface />
        </div>
      </div>
    </section>
  );
}