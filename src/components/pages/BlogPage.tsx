import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Search, 
  Filter,
  TrendingUp,
  Zap,
  MessageSquare,
  Users,
  BarChart3
} from "lucide-react";

export function BlogPage() {
  const featuredPost = {
    title: "The Future of Business Automation: How AI is Transforming Workflows",
    excerpt: "Discover how artificial intelligence is revolutionizing business automation, making complex workflows as simple as having a conversation. Learn about the latest trends and what's coming next.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "AI & Automation",
    image: "🚀",
    featured: true
  };

  const blogPosts = [
    {
      title: "10 Automation Workflows Every Small Business Needs",
      excerpt: "From appointment scheduling to invoice generation, discover the essential automations that can save your business hours every week.",
      author: "Marcus Rodriguez",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Business Tips",
      image: "💼"
    },
    {
      title: "How ChatOps Saved Our Salon 20 Hours Per Week",
      excerpt: "A real case study from a hair salon that transformed their operations using natural language automation.",
      author: "Emily Watson",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Case Studies",
      image: "💇‍♀️"
    },
    {
      title: "Integrating ChatOps with Your Existing Tools: A Complete Guide",
      excerpt: "Step-by-step instructions for connecting ChatOps with Slack, Google Calendar, Stripe, and more.",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "12 min read",
      category: "Tutorials",
      image: "🔗"
    },
    {
      title: "The Psychology of Chat-Based Automation: Why It Works",
      excerpt: "Understanding the cognitive science behind why natural language automation is more intuitive and effective.",
      author: "Dr. Lisa Park",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Research",
      image: "🧠"
    },
    {
      title: "Building Custom Automations: From Simple to Advanced",
      excerpt: "Learn how to create your own automation workflows, from basic triggers to complex multi-step processes.",
      author: "Alex Thompson",
      date: "March 3, 2024",
      readTime: "15 min read",
      category: "Tutorials",
      image: "⚙️"
    },
    {
      title: "Automation ROI: How to Measure and Maximize Your Investment",
      excerpt: "Calculate the real return on investment from your automation efforts and strategies to maximize value.",
      author: "Rachel Green",
      date: "March 1, 2024",
      readTime: "9 min read",
      category: "Analytics",
      image: "📊"
    }
  ];

  const categories = [
    { name: "All", count: 24, active: true },
    { name: "AI & Automation", count: 8 },
    { name: "Business Tips", count: 6 },
    { name: "Case Studies", count: 4 },
    { name: "Tutorials", count: 3 },
    { name: "Research", count: 2 },
    { name: "Analytics", count: 1 }
  ];

  const popularTags = [
    "Automation", "AI", "Workflow", "Productivity", "Business", "Chat", "Integration", "ROI", "Case Study", "Tutorial"
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-sm font-medium text-indigo-700 mb-6">
            <BookOpen className="w-4 h-4" />
            Blog & Insights
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Automation insights &
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              business wisdom
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover tips, tutorials, case studies, and insights to help you 
            automate your business and work smarter, not harder.
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <Button variant="outline" className="px-6 py-3 border-2">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                category.active
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="lg:grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    Featured
                  </Badge>
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                  Read Full Article
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-12">
                <div className="text-8xl">{featuredPost.image}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-indigo-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {post.image}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:border-indigo-300 group-hover:text-indigo-600 transition-colors duration-200">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Tags */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Popular Topics</h3>
            <p className="text-gray-600">Explore articles by topic</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {popularTags.map((tag, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Never miss an automation tip
            </h3>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Get the latest automation insights, case studies, and tutorials 
              delivered to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 font-semibold"
              >
                Subscribe
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <p className="text-sm text-indigo-200 mt-4">
              Join 15,000+ business owners getting automation insights weekly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
