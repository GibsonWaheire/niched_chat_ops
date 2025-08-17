import { Button } from "../ui/button";
import { 
  Calendar, 
  Cookie, 
  ArrowRight,
  Mail,
  Info
} from "lucide-react";

export function CookiePolicyPage() {
  const lastUpdated = "March 15, 2024";
  const effectiveDate = "March 15, 2024";

  return (
    <section id="cookies" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-sm font-medium text-indigo-700 mb-6">
            <Cookie className="w-4 h-4" />
            Cookie Policy
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            This policy explains how ChatOps uses cookies and similar technologies to enhance 
            your browsing experience and provide personalized services.
          </p>
          
          {/* Cookie Policy Content Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Cookie Policy</h2>
              <p className="text-gray-600">Read our complete cookie policy below</p>
            </div>
            
            <div className="max-h-96 overflow-y-auto pr-4 space-y-6 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">🍪 Cookie Policy</h3>
                <p className="text-base">
                  <strong>Effective Date:</strong> August 17, 2025
                </p>
                <p className="text-base">
                  This Cookie Policy explains how ChatOps Technologies ("we," "our," "us") uses cookies and similar tracking technologies on our chat-based workflow automation platform ("the Service"). By using our Service, you consent to the use of cookies in accordance with this policy. This policy should be read in conjunction with our Privacy Policy, which explains how we collect, use, and protect your personal information.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">What Are Cookies and How They Work</h3>
                <p className="text-base">
                  Cookies are small text files that are stored on your device when you visit our website or use our Service. These files contain information about your browsing activity and preferences, allowing us to remember your settings and provide a personalized experience. Cookies are stored in your web browser and can be either temporary (session cookies) that are deleted when you close your browser, or persistent (stored cookies) that remain on your device for a specified period. They are generally safe and cannot access your personal files or execute code on your device.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Essential Cookies for Service Functionality</h3>
                <p className="text-base">
                  Essential cookies are necessary for the Service to function properly and cannot be disabled. These cookies enable core functionality such as user authentication, session management, security features, and load balancing. Without these cookies, you would not be able to log into your account, maintain your session, or access secure areas of the Service. Essential cookies include authentication tokens that verify your identity, session identifiers that maintain your login state, and security cookies that protect against unauthorized access and cross-site request forgery attacks.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Performance and Analytics Cookies</h3>
                <p className="text-base">
                  Performance cookies help us understand how visitors interact with our Service by collecting information about page views, navigation patterns, and user behavior. We use these cookies to analyze website traffic, identify popular features, detect and resolve performance issues, and improve the overall user experience. These cookies may include Google Analytics cookies that provide insights into user demographics, page load times, and conversion rates. The information collected is aggregated and anonymized to protect your privacy while helping us optimize our Service for better performance and usability.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Functional Cookies for User Preferences</h3>
                <p className="text-base">
                  Functional cookies remember your preferences and settings to provide a customized experience. These cookies store information such as your language preference, theme selection, dashboard layout, and form auto-fill data. They enable features like remembering your last search queries, maintaining your workspace configuration, and preserving your notification preferences. While these cookies are not essential for basic Service functionality, they significantly enhance your user experience by eliminating the need to reconfigure settings each time you visit. You can choose to disable these cookies, but doing so may result in a less personalized experience.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Marketing and Advertising Cookies</h3>
                <p className="text-base">
                  Marketing cookies are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns. These cookies may be placed by our advertising partners and help us understand which marketing channels are most effective, measure campaign performance, and deliver targeted content based on your interests. They may also enable social media integration features, allowing you to share content or connect your social media accounts. Marketing cookies are not essential for Service functionality and can be disabled through your browser settings or our cookie consent management system.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Third-Party Cookies and Services</h3>
                <p className="text-base">
                  Our Service integrates with various third-party services that may place their own cookies on your device. These services include payment processors like Stripe for secure transactions, communication platforms like Twilio for SMS and voice services, analytics providers like Google Analytics for website insights, and social media platforms for integration features. Each third-party service has its own privacy policy and cookie practices, which we recommend reviewing to understand how they collect and use your information. We carefully select our third-party partners and require them to maintain appropriate data protection standards.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Cookie Duration and Expiration</h3>
                <p className="text-base">
                  The lifespan of cookies varies depending on their purpose and type. Session cookies are temporary and are automatically deleted when you close your browser or end your session. Persistent cookies remain on your device for a specified period, which may range from a few days to several years, depending on the cookie's purpose and your browser settings. We regularly review and update our cookie expiration policies to ensure they align with our data retention practices and legal obligations. You can manually delete cookies at any time through your browser settings, though this may affect your Service experience.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Managing Your Cookie Preferences</h3>
                <p className="text-base">
                  You have several options for managing cookies and controlling how they are used. Most web browsers allow you to control cookies through their settings, including blocking all cookies, blocking specific types of cookies, or deleting existing cookies. You can also configure your browser to notify you when cookies are being set, giving you the choice to accept or decline them. Additionally, we provide a cookie consent banner that allows you to customize your preferences for non-essential cookies. You can access and modify your cookie preferences at any time through our Service settings or by contacting our support team.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Impact of Disabling Cookies</h3>
                <p className="text-base">
                  While you have the right to disable cookies, doing so may impact your Service experience and functionality. Disabling essential cookies will prevent you from accessing the Service, as these cookies are required for basic operations like authentication and security. Disabling performance cookies may limit our ability to identify and resolve technical issues, while disabling functional cookies may result in a less personalized experience and the need to reconfigure settings each time you visit. Marketing cookies can be safely disabled without affecting core Service functionality, though you may see less relevant advertisements and content.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Mobile and Application Cookies</h3>
                <p className="text-base">
                  Our mobile applications and mobile-optimized websites also use cookies and similar tracking technologies. Mobile cookies serve similar purposes to web cookies, including authentication, session management, and user experience optimization. However, mobile cookie management may differ from desktop browsers, and you may need to adjust settings within your mobile device's operating system or individual app permissions. Some mobile platforms provide additional privacy controls that allow you to limit tracking across apps and websites, which may affect how cookies function in our mobile applications.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Updates to This Cookie Policy</h3>
                <p className="text-base">
                  We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or applicable laws. When we make material changes to this policy, we will update the effective date at the top of this document and provide additional notice through our Service or by email where appropriate. We encourage you to review this policy periodically to stay informed about how we use cookies and similar technologies. Your continued use of the Service following any updates constitutes acceptance of the revised Cookie Policy. If you have questions about changes to this policy, please contact us using the information provided below.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Contact Information and Support</h3>
                <p className="text-base">
                  If you have questions about our Cookie Policy, need assistance managing your cookie preferences, or have concerns about how cookies are used on our Service, please contact us using the following information. Our privacy team is available to help with cookie-related questions, technical support for preference management, and addressing any privacy concerns you may have. We are committed to transparency about our cookie practices and will respond to your inquiries within a reasonable timeframe.
                </p>
                <p className="text-base">
                  <strong>ChatOps Technologies</strong><br/>
                  Email: privacy@chatops.com<br/>
                  Address: 123 Automation Street, San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>

          {/* Policy Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Last Updated: {lastUpdated}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Effective Date: {effectiveDate}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Need help with cookie settings?
            </h3>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Our privacy team can help you understand and manage your cookie preferences. 
              Contact us for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Privacy Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 text-lg font-semibold"
              >
                <Info className="w-5 h-5 mr-2" />
                Learn More About Privacy
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
