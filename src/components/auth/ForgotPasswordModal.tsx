import React, { useState } from "react";
import { Modal } from "../ui/modal";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Mail, AlertCircle, CheckCircle, ArrowLeft } from "lucide-react";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBackToSignIn: () => void;
  onResetPassword: (email: string) => Promise<void>;
}

export function ForgotPasswordModal({
  isOpen,
  onClose,
  onBackToSignIn,
  onResetPassword,
}: ForgotPasswordModalProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await onResetPassword(email);
      setIsSubmitted(true);
    } catch (err) {
      setError("Failed to send reset email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToSignIn = () => {
    setIsSubmitted(false);
    setEmail("");
    setError("");
    onBackToSignIn();
  };

  if (isSubmitted) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} title="Check Your Email">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">
              Reset link sent!
            </h3>
            <p className="text-gray-600">
              We've sent a password reset link to <strong>{email}</strong>
            </p>
          </div>

          <div className="text-sm text-gray-500 space-y-2">
            <p>• Check your email inbox</p>
            <p>• Click the reset link in the email</p>
            <p>• Create a new password</p>
          </div>

          <div className="pt-4 space-y-3">
            <Button
              onClick={handleBackToSignIn}
              variant="outline"
              className="w-full"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Sign In
            </Button>
            
            <p className="text-xs text-gray-500">
              Didn't receive the email? Check your spam folder or{" "}
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="text-indigo-600 hover:underline"
              >
                try again
              </button>
            </p>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Reset Your Password">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}

        <div className="text-center space-y-2">
          <p className="text-gray-600">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        <div className="space-y-2">
          <label htmlFor="resetEmail" className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              id="resetEmail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="pl-10"
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90"
          disabled={isLoading || !email}
        >
          {isLoading ? "Sending..." : "Send Reset Link"}
        </Button>

        <div className="text-center">
          <button
            type="button"
            onClick={handleBackToSignIn}
            className="text-sm text-indigo-600 hover:text-indigo-500 hover:underline"
          >
            ← Back to Sign In
          </button>
        </div>
      </form>
    </Modal>
  );
}
