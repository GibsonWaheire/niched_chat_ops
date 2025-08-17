import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { MessageSquare, Menu, User, LogOut } from "lucide-react";
import { SignInModal } from "./auth/SignInModal";
import { SignUpModal } from "./auth/SignUpModal";
import { ForgotPasswordModal } from "./auth/ForgotPasswordModal";
import { AuthService } from "../lib/auth";
import type { User as UserType } from "../lib/auth";

export function Header() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await AuthService.getCurrentUser();
      setCurrentUser(user);
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSignIn = async (email: string, password: string) => {
    const response = await AuthService.signIn(email, password);
    setCurrentUser(response.user);
    setIsSignInOpen(false);
  };

  const handleSignUp = async (email: string, password: string, fullName: string) => {
    const response = await AuthService.signUp(email, password, fullName);
    setCurrentUser(response.user);
    setIsSignUpOpen(false);
  };

  const handleResetPassword = async (email: string) => {
    await AuthService.resetPassword(email);
  };

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null);
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

  if (isLoading) {
    return (
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-center">
          <div className="animate-pulse">Loading...</div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ChatOps</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("templates")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Templates
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("support")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Support
            </button>
          </nav>

          <div className="flex items-center gap-4">
            {currentUser ? (
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                  <User className="w-4 h-4" />
                  <span>{currentUser.fullName}</span>
                  <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                    {currentUser.plan}
                  </span>
                </div>
                <Button variant="outline" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button variant="ghost" className="hidden md:inline-flex" onClick={() => setIsSignInOpen(true)}>
                  Sign In
                </Button>
                <Button 
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90"
                  onClick={() => setIsSignUpOpen(true)}
                >
                  Start Free Trial
                </Button>
              </>
            )}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Authentication Modals */}
      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        onSwitchToSignUp={openSignUp}
        onForgotPassword={openForgotPassword}
        onSignIn={handleSignIn}
      />

      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        onSwitchToSignIn={openSignIn}
        onSignUp={handleSignUp}
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