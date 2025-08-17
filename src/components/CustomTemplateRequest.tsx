import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowLeft, Building2, Users, MessageSquare, CheckCircle, Star } from "lucide-react";
import { TemplateService } from "../lib/templateService";

interface TemplateRequest {
  businessName: string;
  industry: string;
  contactName: string;
  email: string;
  phone: string;
  businessSize: string;
  currentProcesses: string;
  automationNeeds: string[];
  timeline: string;
  additionalInfo: string;
}

const businessSizes = [
  "1-5 employees",
  "6-20 employees", 
  "21-50 employees",
  "51-200 employees",
  "200+ employees"
];

const automationNeeds = [
  "Appointment booking & scheduling",
  "Customer communication (SMS/Email)",
  "Invoice & payment processing",
  "Inventory management",
  "Customer relationship management",
  "Reporting & analytics",
  "Document generation",
  "Team collaboration",
  "Integration with existing tools",
  "Custom workflow automation"
];

const timelines = [
  "Within 1 week",
  "Within 2 weeks",
  "Within 1 month",
  "No specific timeline"
];

export default function CustomTemplateRequest() {
  const [formData, setFormData] = useState<TemplateRequest>({
    businessName: "",
    industry: "",
    contactName: "",
    email: "",
    phone: "",
    businessSize: "",
    currentProcesses: "",
    automationNeeds: [],
    timeline: "",
    additionalInfo: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (field: keyof TemplateRequest, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAutomationNeedToggle = (need: string) => {
    setFormData(prev => ({
      ...prev,
      automationNeeds: prev.automationNeeds.includes(need)
        ? prev.automationNeeds.filter(n => n !== need)
        : [...prev.automationNeeds, need]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await TemplateService.submitCustomTemplateRequest(formData);
      setIsSubmitted(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to submit request');
    } finally {
      setIsSubmitting(false);
    }
  };

  const goBack = () => {
    window.history.back();
  };

  const viewDemoTemplates = () => {
    setShowTemplates(true);
  };

  const backToForm = () => {
    setShowTemplates(false);
    setIsSubmitted(false);
    setFormData({
      businessName: "",
      industry: "",
      contactName: "",
      email: "",
      phone: "",
      businessSize: "",
      currentProcesses: "",
      automationNeeds: [],
      timeline: "",
      additionalInfo: ""
    });
  };

  // Show demo templates view
  if (showTemplates) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Button 
              onClick={backToForm} 
              variant="ghost" 
              className="mb-6 hover:bg-white/50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Request Form
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Demo Templates
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our pre-built automation templates and see how they can transform your business workflow.
            </p>
          </div>

          {/* Template Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Salon Template */}
            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <CardHeader className="bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-t-lg">
                <CardTitle className="text-lg">Hair Salon & Spa</CardTitle>
                <CardDescription className="text-pink-100">
                  Appointment automation for beauty services
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Appointment booking</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>SMS reminders</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Receipt generation</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600 font-medium">Try this command:</p>
                  <p className="text-sm text-gray-800 font-mono">"Book Sarah for highlights at 2PM tomorrow"</p>
                </div>
              </CardContent>
            </Card>

            {/* Medical Clinic Template */}
            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <CardHeader className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-t-lg">
                <CardTitle className="text-lg">Medical Clinic</CardTitle>
                <CardDescription className="text-blue-100">
                  Patient management & HIPAA compliance
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Patient scheduling</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Follow-up automation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Intake forms</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600 font-medium">Try this command:</p>
                  <p className="text-sm text-gray-800 font-mono">"Schedule John for checkup Friday"</p>
                </div>
              </CardContent>
            </Card>

            {/* Tutor Template */}
            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <CardHeader className="bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-t-lg">
                <CardTitle className="text-lg">Private Tutor</CardTitle>
                <CardDescription className="text-green-100">
                  Lesson management & progress tracking
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Lesson scheduling</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Progress tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Invoice automation</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600 font-medium">Try this command:</p>
                  <p className="text-sm text-gray-800 font-mono">"Schedule Emma for math lesson Tuesday"</p>
                </div>
              </CardContent>
            </Card>

            {/* Car Wash Template */}
            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <CardHeader className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-t-lg">
                <CardTitle className="text-lg">Car Wash Service</CardTitle>
                <CardDescription className="text-purple-100">
                  Booking & loyalty program automation
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Booking confirmations</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Loyalty reminders</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Service updates</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600 font-medium">Try this command:</p>
                  <p className="text-sm text-gray-800 font-mono">"Book sedan wash for tomorrow 10AM"</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              See something you like? These templates can be customized for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={backToForm}
                variant="outline" 
                className="px-8 py-3"
              >
                Request Custom Template
              </Button>
              <Button 
                onClick={goBack}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3"
              >
                Back to Main Page
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Request Submitted Successfully!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your interest in a custom ChatOps template. Our team will review your requirements and get back to you within 24-48 hours.
          </p>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-green-200 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-indigo-600">1</span>
                </div>
                <span className="text-gray-700">Our automation experts review your requirements</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-indigo-600">2</span>
                </div>
                <span className="text-gray-700">We schedule a consultation call to discuss details</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-indigo-600">3</span>
                </div>
                <span className="text-gray-700">Custom template development begins</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={goBack} variant="outline" className="px-8 py-3">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Templates
            </Button>
            <Button 
              onClick={viewDemoTemplates}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3"
            >
              View Demo Templates
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Button 
            onClick={goBack} 
            variant="ghost" 
            className="mb-6 hover:bg-white/50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Templates
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Request a Custom Template
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't see your industry? Let us create a specialized automation template 
            designed specifically for your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Tell us about your business</CardTitle>
                <CardDescription className="text-indigo-100">
                  Fill out the form below and we'll create a custom template just for you
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    <p className="font-medium">Error: {error}</p>
                    <p className="text-sm mt-1">Please try again or contact support if the issue persists.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Business Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Business Name *
                      </label>
                      <Input
                        value={formData.businessName}
                        onChange={(e) => handleInputChange('businessName', e.target.value)}
                        placeholder="Your business name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Industry *
                      </label>
                      <Input
                        value={formData.industry}
                        onChange={(e) => handleInputChange('industry', e.target.value)}
                        placeholder="e.g., Healthcare, Real Estate, Legal"
                        required
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Name *
                      </label>
                      <Input
                        value={formData.contactName}
                        onChange={(e) => handleInputChange('contactName', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Business Size *
                      </label>
                      <select
                        value={formData.businessSize}
                        onChange={(e) => handleInputChange('businessSize', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      >
                        <option value="">Select business size</option>
                        {businessSizes.map(size => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Current Processes */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Describe your current business processes *
                    </label>
                    <textarea
                      value={formData.currentProcesses}
                      onChange={(e) => handleInputChange('currentProcesses', e.target.value)}
                      placeholder="Tell us about your current workflow, pain points, and how you handle customer interactions..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      rows={4}
                      required
                    />
                  </div>

                  {/* Automation Needs */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      What automation do you need? (Select all that apply) *
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {automationNeeds.map(need => (
                        <label key={need} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.automationNeeds.includes(need)}
                            onChange={() => handleAutomationNeedToggle(need)}
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          />
                          <span className="text-sm text-gray-700">{need}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      When do you need this template? *
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    >
                      <option value="">Select timeline</option>
                      {timelines.map(timeline => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      placeholder="Any other details, specific requirements, or questions you'd like us to know..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      rows={3}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 py-3 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        <Star className="w-5 h-5 mr-2" />
                        Submit Custom Template Request
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
              <CardHeader>
                <CardTitle className="text-indigo-900 flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Why Custom Templates?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Industry-Specific</h4>
                    <p className="text-sm text-gray-600">Tailored to your exact business needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Consultation</h4>
                    <p className="text-sm text-gray-600">Direct access to automation specialists</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Priority Support</h4>
                    <p className="text-sm text-gray-600">Dedicated assistance during setup</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  What You'll Get
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-gray-700">
                  <p className="font-medium">✅ Custom automation workflows</p>
                  <p className="font-medium">✅ Industry-specific templates</p>
                  <p className="font-medium">✅ Integration recommendations</p>
                  <p className="font-medium">✅ Setup assistance</p>
                  <p className="font-medium">✅ Ongoing support</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Response Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">
                  We typically respond to custom template requests within <strong>24-48 hours</strong> 
                  and can have your template ready in as little as <strong>1-2 weeks</strong>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
