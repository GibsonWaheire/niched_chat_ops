import { Button } from "../ui/button";
import { 
  Calendar, 
  FileText, 
  ArrowRight,
  Mail
} from "lucide-react";

export function TermsOfServicePage() {
  const lastUpdated = "March 15, 2024";
  const effectiveDate = "March 15, 2024";

  return (
    <section id="terms" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-sm font-medium text-indigo-700 mb-6">
            <FileText className="w-4 h-4" />
            Terms of Service
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            These terms govern your use of ChatOps services. Please read them carefully before 
            using our platform. By using our services, you agree to these terms.
          </p>
          
          {/* Terms Content Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h2>
              <p className="text-gray-600">Read our complete terms of service below</p>
            </div>
            
            <div className="max-h-96 overflow-y-auto pr-4 space-y-6 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">📋 Terms of Service</h3>
                <p className="text-base">
                  <strong>Effective Date:</strong> August 17, 2025
                </p>
                <p className="text-base">
                  These Terms of Service ("Terms") govern your access to and use of ChatOps Technologies' chat-based workflow automation platform ("the Service"). By accessing or using the Service, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing the Service.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Service Description and Availability</h3>
                <p className="text-base">
                  ChatOps Technologies provides an AI-powered workflow automation platform that enables businesses to streamline operations through intelligent chat interfaces, automated workflows, and integration capabilities. The Service includes features such as natural language processing, appointment scheduling, invoice generation, customer communication management, and analytics reporting. We strive to maintain high service availability but cannot guarantee uninterrupted access due to factors beyond our control, including but not limited to technical issues, maintenance, or force majeure events.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">User Accounts and Registration</h3>
                <p className="text-base">
                  To access the Service, you must create an account by providing accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account or any other breach of security. You may not share your account with others or transfer it to another person. We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent or illegal activities.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Acceptable Use and Prohibited Activities</h3>
                <p className="text-base">
                  You agree to use the Service only for lawful purposes and in accordance with these Terms. You may not use the Service to transmit, distribute, or store material that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable. Prohibited activities include attempting to gain unauthorized access to our systems, interfering with service availability, reverse engineering our software, or using the Service for spam or unsolicited communications. We reserve the right to investigate and take appropriate action against any user who violates these provisions.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Intellectual Property and Ownership</h3>
                <p className="text-base">
                  The Service and its original content, features, and functionality are owned by ChatOps Technologies and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You retain ownership of any content you create using our Service, but you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content solely for the purpose of providing and improving the Service. You may not copy, modify, distribute, sell, or lease any part of our Service without our prior written consent.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Payment Terms and Billing</h3>
                <p className="text-base">
                  The Service is available under various subscription plans with different pricing tiers. Subscription fees are billed in advance on a monthly or annual basis, and all fees are non-refundable except as required by applicable law. We may change our pricing with 30 days' notice, and late payments may result in service suspension or termination. You are responsible for all taxes associated with your use of the Service. Payment processing is handled by third-party providers subject to their respective terms and privacy policies.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Data Privacy and Security</h3>
                <p className="text-base">
                  We are committed to protecting your privacy and data security in accordance with our Privacy Policy. We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security. You are responsible for maintaining the security of your account and for any data you upload to the Service. By using the Service, you consent to our collection and use of information as described in our Privacy Policy.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Service Support and Maintenance</h3>
                <p className="text-base">
                  We provide customer support during business hours and may offer emergency support for critical issues. Support response times may vary based on issue complexity and your subscription tier. We regularly perform maintenance and updates to improve the Service, which may result in temporary service interruptions. We will provide reasonable notice for scheduled maintenance and work to minimize service disruptions. While we strive to provide reliable service, we cannot guarantee that the Service will be error-free or uninterrupted.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Limitation of Liability and Disclaimers</h3>
                <p className="text-base">
                  To the maximum extent permitted by applicable law, ChatOps Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses resulting from your use of the Service. Our total liability shall not exceed the amount paid by you for the Service in the 12 months preceding the claim. The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Indemnification and Defense</h3>
                <p className="text-base">
                  You agree to indemnify, defend, and hold harmless ChatOps Technologies and its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, or expenses arising from your use of the Service, violation of these Terms, or infringement of any third-party rights. This indemnification obligation includes reasonable attorneys' fees and costs incurred in defending against such claims. We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Termination and Account Cancellation</h3>
                <p className="text-base">
                  You may cancel your subscription at any time through your account settings or by contacting our support team. We may terminate or suspend your access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties. Upon termination, your right to use the Service will cease immediately, and we may delete your account and data. Termination does not relieve you of payment obligations for services already provided, and provisions of these Terms that by their nature should survive termination shall remain in effect.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Governing Law and Dispute Resolution</h3>
                <p className="text-base">
                  These Terms are governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law principles. Any disputes arising from or relating to these Terms or the Service shall be resolved exclusively in the courts of San Francisco County, California. You agree to submit to the personal jurisdiction of these courts and waive any objections to venue or forum non conveniens. We encourage resolving disputes through good faith negotiations before pursuing legal action.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Contact Information and Support</h3>
                <p className="text-base">
                  If you have questions about these Terms or need assistance with the Service, please contact us using the following information. Our team is committed to addressing your concerns and will respond to inquiries within a reasonable timeframe. For urgent matters or security concerns, please use the appropriate contact methods specified in our support documentation.
                </p>
                <p className="text-base">
                  <strong>ChatOps Technologies</strong><br/>
                  Email: legal@chatops.com<br/>
                  Address: 123 Automation Street, San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>

          {/* Terms Info */}
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
              Questions about these terms?
            </h3>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Our legal team is here to help. Contact us if you have any questions about 
              these terms of service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Legal Team
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
