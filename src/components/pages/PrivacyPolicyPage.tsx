import { Button } from "../ui/button";
import { 
  Calendar, 
  Shield, 
  ArrowRight,
  FileText,
  Mail
} from "lucide-react";

export function PrivacyPolicyPage() {
  const lastUpdated = "March 15, 2024";
  const effectiveDate = "March 15, 2024";

  return (
    <section id="privacy" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-sm font-medium text-indigo-700 mb-6">
            <Shield className="w-4 h-4" />
            Privacy Policy
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We are committed to protecting your privacy and ensuring the security of your personal information. 
            This policy explains how we collect, use, and safeguard your data.
          </p>
          
          {/* Policy Content Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h2>
              <p className="text-gray-600">Read our complete privacy policy below</p>
            </div>
            
            <div className="max-h-96 overflow-y-auto pr-4 space-y-6 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">📜 Privacy Policy</h3>
                <p className="text-base">
                  <strong>Effective Date:</strong> August 17, 2025
                </p>
                <p className="text-base">
                  This Privacy Policy describes how ChatOps Technologies ("we," "our," "us") collects, uses, stores, and protects information in connection with the use of our chat-based workflow automation platform ("the Service"). By accessing or using the Service, you acknowledge and agree to the practices described in this Policy.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Information Collection</h3>
                <p className="text-base">
                  We collect personal information when you create an account, subscribe to our services, or interact with the platform. This may include your name, business information, email address, and payment details. Depending on the features you use, we may also process information relating to your customers, including but not limited to names, contact details, appointment information, invoices, and communication records. Additionally, we may collect technical and usage data such as IP addresses, device identifiers, browser types, access logs, and activity within the Service.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">How We Use Your Information</h3>
                <p className="text-base">
                  The information we collect is used to provide and maintain the Service, including facilitating bookings, delivering reminders and communications, generating invoices, providing analytics, and ensuring platform functionality. We also use this information to comply with applicable laws, enforce our terms of service, resolve disputes, detect and prevent fraud or abuse, and protect the rights and safety of our users and third parties.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Information Sharing and Disclosure</h3>
                <p className="text-base">
                  We do not sell, lease, or trade your personal information to third parties. Information may, however, be shared with trusted service providers who process data on our behalf, such as cloud hosting providers, payment processors, and communication platforms (including but not limited to Twilio and SendGrid). These third parties are contractually obligated to safeguard information and use it only for the purposes specified. We may also disclose information where required by law, in response to lawful requests by public authorities, or in connection with legal proceedings.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Data Security and Protection</h3>
                <p className="text-base">
                  All information is stored securely using appropriate technical and organizational safeguards, including encryption and restricted access protocols. While we take commercially reasonable steps to protect your data, no method of transmission over the Internet or method of electronic storage is entirely secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Your Rights and Choices</h3>
                <p className="text-base">
                  You have the right, subject to applicable law, to access, correct, update, or delete your personal data. You may also request that we restrict processing, object to certain types of processing, or request the transfer of your data to another service provider. Where we rely on consent for processing, you may withdraw that consent at any time. To exercise these rights, please contact us using the information below.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Cookies and Tracking Technologies</h3>
                <p className="text-base">
                  The Service may use cookies, tracking pixels, and similar technologies to improve performance, analyze usage, and personalize user experience. You may choose to disable cookies in your browser, though this may limit certain features of the Service.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Updates to This Policy</h3>
                <p className="text-base">
                  We may update this Privacy Policy from time to time to reflect changes in law, technology, or our business practices. When material changes are made, we will notify users by updating the "Effective Date" at the top of this document and, where appropriate, provide additional notice through the Service or by email. Continued use of the Service following any updates constitutes acceptance of the revised Privacy Policy.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
                <p className="text-base">
                  If you have questions, concerns, or complaints regarding this Privacy Policy or the way your data is handled, you may contact us at:
                </p>
                <p className="text-base">
                  <strong>ChatOps Technologies</strong><br/>
                  Email: support@chatops.com<br/>
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
              Questions about your privacy?
            </h3>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Our privacy team is here to help. Contact us if you have any questions about 
              how we handle your personal information.
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
                <FileText className="w-5 h-5 mr-2" />
                View Other Policies
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
