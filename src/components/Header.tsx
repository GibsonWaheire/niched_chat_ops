import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { MessageSquare, Menu, User, LogOut, ChevronDown } from "lucide-react";
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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      const user = await AuthService.getCurrentUser();
      setCurrentUser(user);
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['features', 'templates', 'pricing', 'support'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      // For hash links (Features, Templates, Pricing), always go to home page first
      if (window.location.pathname === '/' || window.location.pathname === '') {
        // If already on home page, scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If not on home page, navigate to home page with hash
        window.location.href = `/${href}`;
      }
    } else {
      // Handle navigation to different pages
      window.location.href = href;
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

  const navigationItems = [
    { name: "Features", href: "#features" },
    { name: "Templates", href: "#templates" },
    { name: "Pricing", href: "#pricing" },
    { 
      name: "Resources", 
      href: null,
      subItems: [
        { name: "API", href: "/api" },
        { name: "Integrations", href: "/integrations" },
        { name: "Documentation", href: "/docs" },
        { name: "Help Center", href: "/help" }
      ]
    },
    { 
      name: "Company", 
      href: null,
      subItems: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" }
      ]
    }
  ];

  return (
    <>
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                ChatOps
              </span>
              <span className="text-xs text-gray-500 -mt-1">AI Workflow Automation</span>
            </div>
          </button>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1 bg-gray-100/80 rounded-xl p-1 backdrop-blur-sm">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.href ? (
                    <button
                      onClick={() => scrollToSection(item.href!)}
                      className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeSection === item.href
                          ? 'text-indigo-700 bg-white shadow-sm border border-indigo-200'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                      }`}
                    >
                      {item.name}
                      {activeSection === item.href && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-600 rounded-full"></div>
                      )}
                    </button>
                  ) : (
                    <button
                      className="relative px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-white/60 transition-all duration-300 flex items-center gap-1"
                    >
                      {item.name}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  )}
                  
                  {/* Dropdown Menu */}
                  {item.subItems && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.subItems.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => scrollToSection(subItem.href)}
                            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Right side - Auth buttons and user info */}
          <div className="flex items-center gap-4">
            {currentUser ? (
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
                    <User className="w-4 h-4 text-gray-600" />
                    <span className="font-medium text-gray-700">{currentUser.fullName}</span>
                    <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full font-medium">
                      {currentUser.plan}
                    </span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  onClick={handleLogout}
                  className="border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button variant="ghost" className="hidden md:inline-flex hover:bg-gray-100 transition-colors duration-300" onClick={() => setIsSignInOpen(true)}>
                  Sign In
                </Button>
                <Button 
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  onClick={() => setIsSignUpOpen(true)}
                >
                  Start 7-Day Trial
                </Button>
              </>
            )}
            
            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="lg:hidden hover:bg-gray-100 transition-colors duration-300">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation (hidden by default) */}
        <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="grid grid-cols-2 gap-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.href ? (
                    <button
                      onClick={() => scrollToSection(item.href!)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium text-center transition-all duration-300 ${
                        activeSection === item.href
                          ? 'text-indigo-700 bg-indigo-50 border border-indigo-200'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <div className="space-y-2">
                      <div className="px-4 py-2 text-sm font-medium text-gray-900 text-center">
                        {item.name}
                      </div>
                      {item.subItems && (
                        <div className="space-y-1">
                          {item.subItems.map((subItem) => (
                            <button
                              key={subItem.name}
                              onClick={() => scrollToSection(subItem.href)}
                              className="w-full px-4 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors duration-200 text-left"
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
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