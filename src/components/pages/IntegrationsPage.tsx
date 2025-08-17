import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { 
  Zap, 
  MessageSquare, 
  Calendar, 
  Mail, 
  CreditCard, 
  Database, 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  ExternalLink,
  Search,
  Filter
} from "lucide-react";

export function IntegrationsPage() {
  const integrationCategories = [
    {
      name: "Communication",
      icon: MessageSquare,
      color: "from-blue-500 to-indigo-600",
      integrations: [
        { name: "Slack", logo: "💬", status: "Live", description: "Send notifications and automate team workflows" },
        { name: "Microsoft Teams", logo: "💼", status: "Live", description: "Integrate with your Teams channels" },
        { name: "Discord", logo: "🎮", status: "Live", description: "Gaming community automation" },
        { name: "WhatsApp Business", logo: "📱", status: "Live", description: "Customer messaging automation" },
        { name: "Telegram", logo: "📡", status: "Live", description: "Bot and channel management" }
      ]
    },
    {
      name: "Calendar & Scheduling",
      icon: Calendar,
      color: "from-green-500 to-emerald-600",
      integrations: [
        { name: "Google Calendar", logo: "📅", status: "Live", description: "Sync appointments and events" },
        { name: "Outlook Calendar", logo: "📊", status: "Live", description: "Microsoft 365 integration" },
        { name: "Calendly", logo: "📋", status: "Live", description: "Automated scheduling links" },
        { name: "Acuity Scheduling", logo: "⏰", status: "Live", description: "Professional appointment booking" },
        { name: "Bookly", logo: "📚", status: "Live", description: "WordPress booking integration" }
      ]
    },
    {
      name: "Email & Marketing",
      icon: Mail,
      color: "from-purple-500 to-pink-600",
      integrations: [
        { name: "Gmail", logo: "📧", status: "Live", description: "Send automated emails and responses" },
        { name: "Outlook", logo: "📨", status: "Live", description: "Microsoft email automation" },
        { name: "Mailchimp", logo: "📬", status: "Live", description: "Email marketing campaigns" },
        { name: "ConvertKit", logo: "📭", status: "Live", description: "Creator email automation" },
        { name: "ActiveCampaign", logo: "📮", status: "Live", description: "Marketing automation platform" }
      ]
    },
    {
      name: "Payment & Billing",
      icon: CreditCard,
      color: "from-orange-500 to-red-600",
      integrations: [
        { name: "Stripe", logo: "💳", status: "Live", description: "Process payments and subscriptions" },
        { name: "PayPal", logo: "🔵", status: "Live", description: "Global payment processing" },
        { name: "Square", logo: "⬜", status: "Live", description: "Point of sale integration" },
        { name: "QuickBooks", logo: "📊", status: "Live", description: "Accounting and invoicing" },
        { name: "FreshBooks", logo: "📈", status: "Live", description: "Small business accounting" }
      ]
    },
    {
      name: "CRM & Sales",
      icon: Database,
      color: "from-teal-500 to-cyan-600",
      integrations: [
        { name: "Salesforce", logo: "☁️", status: "Live", description: "Customer relationship management" },
        { name: "HubSpot", logo: "🟠", status: "Live", description: "Marketing and sales automation" },
        { name: "Pipedrive", logo: "🔴", status: "Live", description: "Sales pipeline management" },
        { name: "Zoho CRM", logo: "🟡", status: "Live", description: "Business CRM solution" },
        { name: "Monday.com", logo: "📅", status: "Live", description: "Work management platform" }
      ]
    },
    {
      name: "Cloud & Storage",
      icon: Cloud,
      color: "from-gray-500 to-slate-600",
      integrations: [
        { name: "Google Drive", logo: "📁", status: "Live", description: "Document storage and sharing" },
        { name: "Dropbox", logo: "📦", status: "Live", description: "File synchronization" },
        { name: "OneDrive", logo: "☁️", status: "Live", description: "Microsoft cloud storage" },
        { name: "Box", logo: "📋", status: "Live", description: "Enterprise file sharing" },
        { name: "Notion", logo: "📝", status: "Live", description: "Workspace and documentation" }
      ]
    }
  ];

  const popularIntegrations = [
    { name: "Slack", users: "50,000+", rating: 4.9, logo: "💬" },
    { name: "Google Calendar", users: "45,000+", rating: 4.8, logo: "📅" },
    { name: "Stripe", users: "40,000+", rating: 4.9, logo: "💳" },
    { name: "Gmail", users: "38,000+", rating: 4.7, logo: "📧" },
    { name: "Salesforce", users: "35,000+", rating: 4.6, logo: "☁️" }
  ];

  return (
    <section id="integrations" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-sm font-medium text-indigo-700 mb-6">
            <Zap className="w-4 h-4" />
            Integrations
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Connect with
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              100+ Tools
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Seamlessly integrate ChatOps with your favorite tools and platforms. 
            Automate workflows across your entire tech stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-8 py-4 text-lg">
              <Zap className="w-5 h-5 mr-2" />
              Browse All Integrations
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2">
              <Search className="w-5 h-5 mr-2" />
              Search Integrations
            </Button>
          </div>
        </div>

        {/* Popular Integrations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Most Popular Integrations</h2>
            <p className="text-gray-600 text-lg">Trusted by thousands of businesses</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {popularIntegrations.map((integration, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300">
                <CardHeader className="pb-3">
                  <div className="text-3xl mb-2">{integration.logo}</div>
                  <CardTitle className="text-lg text-gray-900">{integration.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm text-gray-600">{integration.users} users</div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-medium">{integration.rating}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Integration Categories */}
        <div className="space-y-16">
          {integrationCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index}>
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h2>
                  <p className="text-gray-600 text-lg">Automate your {category.name.toLowerCase()} workflows</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.integrations.map((integration, idx) => (
                    <Card key={idx} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="text-2xl">{integration.logo}</div>
                            <div>
                              <CardTitle className="text-lg text-gray-900">{integration.name}</CardTitle>
                              <Badge className="bg-green-100 text-green-800 border-green-200">
                                {integration.status}
                              </Badge>
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors duration-200" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm mb-4">{integration.description}</p>
                        <Button variant="outline" size="sm" className="w-full">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Connect
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Can't find your tool?
            </h3>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              We're constantly adding new integrations. Request one or build your own with our API.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                <Zap className="w-5 h-5 mr-2" />
                Request Integration
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 text-lg font-semibold"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Build Custom
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
