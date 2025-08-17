import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { 
  Code, 
  Zap, 
  Shield, 
  BookOpen, 
  Play, 
  Download, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users,
  Terminal,
  Database,
  Webhook,
  Key
} from "lucide-react";

export function ApiPage() {
  const apiFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-100ms response times with 99.9% uptime guarantee"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption"
    },
    {
      icon: Database,
      title: "Scalable Infrastructure",
      description: "Handles millions of requests with auto-scaling"
    },
    {
      icon: Webhook,
      title: "Real-time Webhooks",
      description: "Instant notifications for all automation events"
    }
  ];

  const codeExamples = [
    {
      language: "JavaScript",
      title: "Create Automation",
      code: `const response = await fetch('https://api.chatops.com/v1/automations', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Appointment Reminder',
    trigger: 'appointment_created',
    actions: ['send_sms', 'update_calendar']
  })
});`
    },
    {
      language: "Python",
      title: "Send Message",
      code: `import requests

response = requests.post(
    'https://api.chatops.com/v1/messages',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'channel': 'sms',
        'to': '+1234567890',
        'message': 'Your appointment is confirmed!'
    }
)`
    },
    {
      language: "cURL",
      title: "Get Analytics",
      code: `curl -X GET "https://api.chatops.com/v1/analytics" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "start_date": "2024-01-01",
    "end_date": "2024-01-31",
    "metrics": ["automations_run", "messages_sent"]
  }'`
    }
  ];

  const rateLimits = [
    { plan: "Starter", requests: "1,000/hour", webhooks: "100/hour" },
    { plan: "Professional", requests: "10,000/hour", webhooks: "1,000/hour" },
    { plan: "Enterprise", requests: "100,000/hour", webhooks: "10,000/hour" }
  ];

  return (
    <section id="api" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-sm font-medium text-indigo-700 mb-6">
            <Code className="w-4 h-4" />
            API Documentation
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Powerful API for
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Developers
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Build powerful integrations, custom workflows, and extend ChatOps functionality 
            with our comprehensive REST API and webhook system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-8 py-4 text-lg">
              <Play className="w-5 h-5 mr-2" />
              Get API Key
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2">
              <Download className="w-5 h-5 mr-2" />
              Download SDK
            </Button>
          </div>
        </div>

        {/* API Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {apiFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Code Examples */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Code Examples</h2>
            <p className="text-gray-600 text-lg">Get started quickly with these common API calls</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {codeExamples.map((example, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-900">{example.title}</CardTitle>
                    <Badge variant="secondary">{example.language}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Rate Limits */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rate Limits</h2>
            <p className="text-gray-600 text-lg">Fair usage limits for all API plans</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {rateLimits.map((plan, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{plan.plan}</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold text-indigo-600">{plan.requests}</div>
                    <div className="text-sm text-gray-600">API Requests</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{plan.webhooks}</div>
                    <div className="text-sm text-gray-600">Webhooks</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to build with ChatOps API?
            </h3>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of developers building powerful automation integrations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                <Key className="w-5 h-5 mr-2" />
                Get Your API Key
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 text-lg font-semibold"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                View Full Docs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
