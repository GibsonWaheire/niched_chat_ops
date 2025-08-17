import { Button } from "../ui/button";
import { 
  Calendar, 
  Shield, 
  ArrowRight,
  Mail
} from "lucide-react";

export function SecurityPage() {
  const lastUpdated = "March 15, 2024";
  const effectiveDate = "March 15, 2024";

  return (
    <section id="security" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-sm font-medium text-indigo-700 mb-6">
            <Shield className="w-4 h-4" />
            Security
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Security & Compliance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your data security is our top priority. Learn about our comprehensive security measures, 
            compliance certifications, and how we protect your information.
          </p>
          
          {/* Security Content Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Security & Compliance</h2>
              <p className="text-gray-600">Read our complete security information below</p>
            </div>
            
            <div className="max-h-96 overflow-y-auto pr-4 space-y-6 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">🛡️ Security & Compliance</h3>
                <p className="text-base">
                  <strong>Effective Date:</strong> August 17, 2025
                </p>
                <p className="text-base">
                  At ChatOps Technologies, we prioritize the security and protection of your data above all else. This Security & Compliance document outlines our comprehensive approach to safeguarding your information, maintaining industry-leading security standards, and ensuring compliance with applicable regulations. We understand that trust is the foundation of our relationship with customers, and we are committed to maintaining the highest levels of security and transparency in all our operations.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Data Encryption and Protection Standards</h3>
                <p className="text-base">
                  We implement enterprise-grade encryption to protect your data both at rest and in transit. All data stored in our databases is encrypted using AES-256 encryption, which is the industry standard for data protection and is used by government agencies and financial institutions worldwide. For data in transit, we use TLS 1.3 encryption, the most secure version of the Transport Layer Security protocol, ensuring that all communications between your devices and our servers are protected against interception and tampering. Additionally, we employ end-to-end encryption for sensitive communications and secure key management systems with regular rotation procedures to maintain the highest level of cryptographic security.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Multi-Layered Access Controls and Authentication</h3>
                <p className="text-base">
                  Our access control systems are designed with multiple layers of security to prevent unauthorized access to your data. We require multi-factor authentication (MFA) for all user accounts, which adds an additional layer of protection beyond passwords. Our role-based access control (RBAC) system ensures that users can only access the data and functions necessary for their role, following the principle of least privilege. We also integrate with enterprise single sign-on (SSO) systems, allowing organizations to manage authentication through their existing identity providers. Session management includes automatic timeout features and forced logout capabilities, while privileged access management systems control administrative functions with enhanced security measures and audit trails.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Cloud Infrastructure Security and Compliance</h3>
                <p className="text-base">
                  Our cloud infrastructure is built on industry-leading platforms with security as a fundamental design principle. We leverage AWS and Azure security features and maintain compliance with their security best practices and certifications. Our infrastructure undergoes regular security audits and penetration testing by independent third-party security firms to identify and address potential vulnerabilities. We implement automated vulnerability scanning and patching systems that continuously monitor our systems for security updates and apply them promptly. Network security includes comprehensive firewall protection, DDoS mitigation, and network segmentation to isolate different components and limit the potential impact of security incidents.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Industry Certifications and Compliance Programs</h3>
                <p className="text-base">
                  We maintain rigorous compliance with industry-standard security certifications and regulatory requirements. Our SOC 2 Type II compliance demonstrates that our security controls have been independently audited and verified by qualified third-party auditors. We comply with GDPR requirements for European data protection, implementing appropriate technical and organizational measures to protect personal data. Our ISO 27001 framework provides a systematic approach to managing sensitive company information, ensuring it remains secure through risk management and security controls. We regularly undergo third-party security assessments and maintain relationships with security auditors to ensure ongoing compliance with evolving standards and regulations.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">24/7 Security Monitoring and Incident Response</h3>
                <p className="text-base">
                  Our security operations center (SOC) operates around the clock to monitor our systems for potential threats and security incidents. We employ advanced security monitoring tools that provide real-time visibility into system activities, network traffic, and user behavior patterns. Automated alerting systems immediately notify our security team of suspicious activities or potential security threats, enabling rapid response and mitigation. Our incident response procedures are well-defined and regularly tested through security incident simulations and tabletop exercises. The SOC team includes experienced security analysts and incident responders who are trained to handle various types of security incidents, from minor alerts to major security breaches, ensuring that any issues are addressed promptly and effectively.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Secure Software Development and Application Security</h3>
                <p className="text-base">
                  Security is integrated into every stage of our software development lifecycle, from initial design through deployment and maintenance. We follow secure coding practices and conduct regular code reviews to identify and address potential security vulnerabilities. Our development teams receive ongoing security training and are required to follow established security guidelines and best practices. We perform regular security testing, including static application security testing (SAST), dynamic application security testing (DAST), and dependency vulnerability scanning to identify and remediate security issues. Our API security includes rate limiting, input validation, and output encoding to prevent common web application vulnerabilities such as injection attacks and cross-site scripting.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Comprehensive Backup and Disaster Recovery Systems</h3>
                <p className="text-base">
                  We maintain robust backup and disaster recovery capabilities to ensure the protection and availability of your data. Our automated backup systems perform daily backups with multiple retention periods to meet various compliance and business requirements. Backup data is stored in geographically distributed locations to protect against regional disasters and ensure data availability even in the event of catastrophic events. We regularly test our backup and recovery procedures to verify that data can be restored quickly and accurately. Our disaster recovery plan includes business continuity procedures and recovery time objectives that ensure minimal disruption to your operations in the event of a major incident.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Employee Security Training and Culture</h3>
                <p className="text-base">
                  We recognize that our employees are a critical component of our security posture, and we invest heavily in security training and awareness programs. All employees undergo comprehensive security training upon hire and receive regular updates on security best practices and emerging threats. We conduct background checks and security clearances for all employees, particularly those with access to sensitive systems or customer data. Our security awareness program includes regular phishing simulations, security quizzes, and interactive training sessions to keep security top of mind. We maintain clear security policies and procedures that all employees must follow, and we regularly assess compliance through internal audits and monitoring systems.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Third-Party Vendor Security and Risk Management</h3>
                <p className="text-base">
                  We carefully evaluate and monitor all third-party vendors and service providers to ensure they meet our stringent security requirements. Our vendor security assessment process includes comprehensive reviews of security practices, compliance certifications, and data protection measures. We require all vendors to sign data processing agreements that include specific security requirements and obligations. We conduct regular vendor security reviews and audits to ensure ongoing compliance with our security standards. Our vendor management program includes incident notification procedures and coordination protocols to ensure that any security issues involving third-party services are addressed promptly and effectively.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">User Security Best Practices and Recommendations</h3>
                <p className="text-base">
                  While we maintain robust security measures on our end, security is a shared responsibility, and there are steps you can take to enhance the protection of your account and data. We strongly recommend enabling multi-factor authentication on your account, as this provides an additional layer of protection beyond passwords. Use strong, unique passwords for each service and consider using a password manager to generate and store complex passwords securely. Regularly review your account activity and permissions to ensure that access levels are appropriate and that no unauthorized changes have been made. Keep your devices and browsers updated with the latest security patches, and be cautious of phishing attempts and suspicious emails that may attempt to compromise your account.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Continuous Security Improvement and Updates</h3>
                <p className="text-base">
                  Our security systems and practices are continuously improved and updated to address emerging threats and maintain the highest security standards. We regularly apply security patches and system updates to address known vulnerabilities and enhance system security. Our security tools and configurations are regularly reviewed and updated to ensure optimal performance and protection. We maintain relationships with threat intelligence providers and participate in security information sharing programs to stay informed about emerging threats and attack techniques. Our security architecture undergoes regular reviews and improvements to incorporate new security technologies and best practices as they become available.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Security Contact Information and Incident Reporting</h3>
                <p className="text-base">
                  For security-related questions, concerns, or incident reports, our security team is available 24/7 to provide assistance and respond to urgent security matters. We maintain dedicated security contact channels to ensure that security issues are addressed promptly and by the appropriate personnel. Our security team includes experienced professionals who can provide guidance on security best practices, investigate potential security incidents, and coordinate response efforts when necessary. We encourage users to report any suspicious activities or security concerns immediately, as early detection and response can significantly reduce the potential impact of security incidents.
                </p>
                <p className="text-base">
                  <strong>ChatOps Technologies Security Team</strong><br/>
                  Security Email: security@chatops.com<br/>
                  Security Hotline: +1 (555) 123-4567<br/>
                  Address: 123 Automation Street, San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>

          {/* Security Info */}
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
              Have security concerns?
            </h3>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Our security team is here to help. Contact us immediately if you notice any 
              suspicious activity or have security-related questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Security Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 text-lg font-semibold"
              >
                <Shield className="w-5 h-5 mr-2" />
                Report Security Issue
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
