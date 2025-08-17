import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Play, CheckCircle, Zap, Users, Clock, TrendingUp } from "lucide-react";
import { ChatInterface } from "./ChatInterface";
import { SignUpModal } from "./auth/SignUpModal";
import { SignInModal } from "./auth/SignInModal";
import { ForgotPasswordModal } from "./auth/ForgotPasswordModal";
import { AuthService } from "../lib/auth";

const stats = [
  { icon: Users, value: "10,000+", label: "Businesses Automated" },
  { icon: Clock, value: "24/7", label: "Always Available" },
  { icon: TrendingUp, value: "95%", label: "Time Saved" },
];

const benefits = [
  "No complex dashboards",
  "Natural language commands",
  "Instant automation setup",
  "Multi-channel messaging",
  "Smart document generation",
  "Real-time analytics"
];

export function HeroSection() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const handleSignUp = async (email: string, password: string, fullName: string) => {
    try {
      await AuthService.signUp(email, password, fullName);
      setIsSignUpOpen(false);
      // Show success message or redirect
    } catch (error) {
      console.error('Sign up failed:', error);
      throw error;
    }
  };

  const handleSignIn = async (email: string, password: string) => {
    try {
      await AuthService.signIn(email, password);
      setIsSignInOpen(false);
    } catch (error) {
      console.error('Sign in failed:', error);
      throw error;
    }
  };

  const handleResetPassword = async (email: string) => {
    try {
      await AuthService.resetPassword(email);
    } catch (error) {
      console.error('Password reset failed:', error);
      throw error;
    }
  };

  const openSignUp = () => {
    setIsSignInOpen(false);
    setIsSignUpOpen(true);
  };

  const openSignIn = () => {
    setIsSignUpOpen(false);
    setIsSignInOpen(true);
  };

  const openForgotPassword = () => {
    setIsSignInOpen(false);
    setIsForgotPasswordOpen(true);
  };

  const backToSignIn = () => {
    setIsForgotPasswordOpen(false);
    setIsSignInOpen(true);
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center py-20 px-4 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 rounded-full text-sm font-medium text-indigo-700">
              <Zap className="w-4 h-4" />
              New: AI-Powered Workflow Automation
            </div>

            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                Automate your business with
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  simple chat
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Skip complex dashboards. Just chat naturally to book appointments, send reminders,
                generate invoices, and automate your entire workflow in seconds.
              </p>
            </div>

            {/* Benefits list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => setIsSignUpOpen(true)}
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 hover:bg-gray-50 transition-all duration-300 group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>No setup required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>20 free automations/month</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>Cancel anytime</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Chat Interface */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating elements around chat */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              
              <ChatInterface />
              
              {/* Success message overlay */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg px-4 py-2 border border-green-200">
                <div className="flex items-center gap-2 text-sm text-green-700">
                  <CheckCircle className="w-4 h-4" />
                  <span>Automation successful!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Authentication Modals */}
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        onSwitchToSignIn={openSignIn}
        onSignUp={handleSignUp}
      />

      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        onSwitchToSignUp={openSignUp}
        onForgotPassword={openForgotPassword}
        onSignIn={handleSignIn}
      />

      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
        onBackToSignIn={backToSignIn}
        onResetPassword={handleResetPassword}
      />
    </>
  );
}