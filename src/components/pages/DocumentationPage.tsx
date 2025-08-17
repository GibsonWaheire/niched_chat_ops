import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { 
  BookOpen, 
  Search, 
  Code, 
  Zap, 
  ArrowRight, 
  ExternalLink,
  Download,
  Play,
  FileText,
  Terminal,
  Database,
  Webhook,
  Shield,
  Users,
  Settings,
  Copy
} from "lucide-react";

export function DocumentationPage() {
  const docCategories = [
    {
      icon: Zap,
      title: "Quick Start",
      description: "Get up and running in minutes",
      guides: 5,
      color: "from-blue-500 to-indigo-600",
      featured: true
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation",
      guides: 12,
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Webhook,
      title: "Webhooks",
      description: "Real-time event notifications",
      guides: 8,
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Database,
      title: "Data Models",
      description: "Understanding your data structure",
      guides: 6,
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Authentication and permissions",
      guides: 4,
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Collaboration and roles",
      guides: 7,
      color: "from-gray-500 to-slate-600"
    }
  ];

  const quickStartSteps = [
    {
      step: "1",
      title: "Create Account",
      description: "Sign up and verify your email",
      action: "Get Started"
    },
    {
      step: "2",
      title: "Choose Template",
      description: "Select a business template or start from scratch",
      action: "Browse Templates"
    },
    {
      step: "3",
      title: "First Automation",
      description: "Create your first workflow using natural language",
      action: "Create Automation"
    },
    {
      step: "4",
      title: "Connect Tools",
      description: "Integrate with your existing business tools",
      action: "View Integrations"
    }
  ];

  const codeSnippets = [
    {
      language: "JavaScript",
      title: "Basic Authentication",
      code: `const response = await fetch('https://api.chatops.com/v1/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'your@email.com',
    password: 'your-password'
  })
});

const { token } = await response.json();`
    },
    {
      language: "Python",
      title: "Create Automation",
      code: `import requests

headers = {
    'Authorization': f'Bearer {token}',
    'Content-Type': 'application/json'
}

data = {
    'name': 'Appointment Reminder',
    'trigger': 'appointment_created',
    'actions': ['send_sms', 'update_calendar']
}

response = requests.post(
    'https://api.chatops.com/v1/automations',
    headers=headers,
    json=data
)`
    },
    {
      language: "cURL",
      title: "Send Message",
      code: `curl -X POST "https://api.chatops.com/v1/messages" \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "channel": "sms",
    "to": "+1234567890",
    "message": "Your appointment is confirmed!"
  }'`
    }
  ];

  const sdkDownloads = [
    { name: "JavaScript/Node.js", version: "v2.1.0", size: "45KB", icon: "📦" },
    { name: "Python", version: "v1.8.2", size: "32KB", icon: "🐍" },
    { name: "PHP", version: "v1.5.1", size: "28KB", icon: "🐘" },
    { name: "Ruby", version: "v1.3.0", size: "35KB", icon: "💎" },
    { name: "Go", version: "v1.2.0", size: "18KB", icon: "🐹" },
    { name: "Java", version: "v1.1.5", size: "52KB", icon: "☕" }
  ];

  return (
    <section id="docs" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-sm font-medium text-indigo-700 mb-6">
            <BookOpen className="w-4 h-4" />
            Documentation
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Everything you need to
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              build with ChatOps
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive guides, API references, and code examples to help you 
            integrate ChatOps into your applications and workflows.
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation, APIs, or code examples..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700">
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Start Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Start Guide</h2>
            <p className="text-gray-600 text-lg">Get up and running in under 10 minutes</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg text-gray-900">{step.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:border-indigo-300 group-hover:text-indigo-600 transition-colors duration-200">
                    {step.action}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Documentation Categories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Documentation Categories</h2>
            <p className="text-gray-600 text-lg">Find the information you need, organized by topic</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className={`group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300 cursor-pointer ${
                  category.featured ? 'ring-2 ring-indigo-500' : ''
                }`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      {category.featured && (
                        <Badge className="bg-indigo-600 text-white">Featured</Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg text-gray-900">{category.title}</CardTitle>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{category.guides} guides</span>
                      <Button variant="outline" size="sm" className="group-hover:border-indigo-300 group-hover:text-indigo-600 transition-colors duration-200">
                        Explore
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Code Examples */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Code Examples</h2>
            <p className="text-gray-600 text-lg">Copy-paste ready code snippets in your preferred language</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {codeSnippets.map((snippet, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-900">{snippet.title}</CardTitle>
                    <Badge variant="secondary">{snippet.language}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{snippet.code}</code>
                  </pre>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Play className="w-4 h-4 mr-2" />
                      Try It
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* SDK Downloads */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Official SDKs</h2>
            <p className="text-gray-600 text-lg">Download our official client libraries for your platform</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdkDownloads.map((sdk, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{sdk.icon}</div>
                    <div>
                      <CardTitle className="text-lg text-gray-900">{sdk.name}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>v{sdk.version}</span>
                        <span>•</span>
                        <span>{sdk.size}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h2>
            <p className="text-gray-600 text-lg">More ways to learn and get help</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  <Play className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-gray-900">Video Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Step-by-step video guides for visual learners</p>
                <Button variant="outline" className="w-full">
                  Watch Videos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-gray-900">Developer Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Connect with other developers and share knowledge</p>
                <Button variant="outline" className="w-full">
                  Join Community
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  <FileText className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-gray-900">API Reference</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Complete API documentation with examples</p>
                <Button variant="outline" className="w-full">
                  View API Docs
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
              Ready to start building?
            </h3>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Get your API key and start integrating ChatOps into your applications today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                <Code className="w-5 h-5 mr-2" />
                Get API Key
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
