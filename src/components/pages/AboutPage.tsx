import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Heart, 
  Zap, 
  Shield, 
  Lightbulb, 
  ArrowRight, 
  CheckCircle,
  MapPin,
  Calendar,
  TrendingUp,
  MessageSquare
} from "lucide-react";

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make starts with our customers' needs and success"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly push boundaries to create the next generation of automation"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your data security and privacy are our top priorities"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and diverse perspectives"
    }
  ];

  const milestones = [
    { year: "2020", title: "Company Founded", description: "Started with a vision to democratize automation" },
    { year: "2021", title: "First 100 Customers", description: "Reached our first major milestone" },
    { year: "2022", title: "Series A Funding", description: "Raised $10M to scale our platform" },
    { year: "2023", title: "10,000+ Users", description: "Expanded to serve businesses worldwide" },
    { year: "2024", title: "AI Integration", description: "Launched advanced AI-powered workflows" }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      bio: "Former Google engineer with 15+ years in automation and AI",
      image: "👩‍💼"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-founder",
      bio: "Ex-Microsoft architect specializing in scalable cloud systems",
      image: "👨‍💻"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      bio: "PhD in Machine Learning from Stanford, leading our AI initiatives",
      image: "👩‍🔬"
    },
    {
      name: "David Kim",
      role: "VP of Product",
      bio: "Product leader with experience at Slack and Asana",
      image: "👨‍💼"
    }
  ];

  const stats = [
    { label: "Businesses Automated", value: "10,000+", icon: TrendingUp },
    { label: "Countries Served", value: "45+", icon: Globe },
    { label: "Team Members", value: "85+", icon: Users },
    { label: "Automations Created", value: "2M+", icon: MessageSquare }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-sm font-medium text-indigo-700 mb-6">
            <Users className="w-4 h-4" />
            About ChatOps
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            We're on a mission to
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              democratize automation
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Founded in 2020, ChatOps is transforming how businesses work by making 
            powerful automation accessible to everyone through simple chat commands.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To eliminate the complexity barrier in business automation. We believe that 
              every business, regardless of size or technical expertise, should be able to 
              automate their workflows and focus on what matters most.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By combining natural language processing with powerful automation engines, 
              we're making it possible to say "Book Sarah for highlights tomorrow at 2PM" 
              and have the entire workflow executed automatically.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A world where business automation is as natural as having a conversation. 
              Where complex workflows are simplified to chat commands, and where every 
              business can operate with the efficiency of a Fortune 500 company.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We envision a future where AI assistants handle routine tasks, humans focus 
              on creativity and strategy, and businesses grow faster than ever before.
            </p>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ChatOps by the Numbers</h2>
            <p className="text-gray-600 text-lg">Our impact in numbers</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg">Key milestones in our company's growth</p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-gray-600 text-lg">Meet the people driving our mission forward</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{member.image}</div>
                  <CardTitle className="text-lg text-gray-900">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Join us in transforming business automation
            </h3>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Whether you're a customer, partner, or potential team member, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 text-lg font-semibold"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Our Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
