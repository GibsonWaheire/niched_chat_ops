import React, { useState } from "react";
import { Modal } from "./modal";
import { Button } from "./button";
import { Input } from "./input";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { CreditCard, Lock, CheckCircle, AlertCircle, X } from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    name: string;
    price: { monthly: number; yearly: number };
    period: string;
    description: string;
    cta: string;
  };
  isYearly: boolean;
}

interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  description: string;
}

const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: "card",
    name: "Credit/Debit Card",
    icon: "💳",
    description: "Visa, Mastercard, American Express"
  },
  {
    id: "paypal",
    name: "PayPal",
    icon: "🔵",
    description: "Fast and secure checkout"
  },
  {
    id: "apple-pay",
    name: "Apple Pay",
    icon: "🍎",
    description: "Quick payment on Apple devices"
  },
  {
    id: "google-pay",
    name: "Google Pay",
    icon: "🤖",
    description: "Fast checkout on Android"
  }
];

export function PaymentModal({ isOpen, onClose, plan, isYearly }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Card form state
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");

  // Early return if no plan is selected
  if (!plan) {
    return null;
  }

  const currentPrice = isYearly ? plan.price.yearly : plan.price.monthly;
  const periodText = isYearly ? "year" : "month";
  const savings = isYearly ? `Save $${(plan.price.monthly * 12) - plan.price.yearly}/year` : null;

  const handlePayment = async () => {
    setIsProcessing(true);
    setError("");

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success
      setIsSuccess(true);
      
      // Close modal after 3 seconds
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
      }, 3000);
      
    } catch (err) {
      setError("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || "";
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
  };

  if (isSuccess) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} title="Payment Successful!">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome to {plan.name}!
            </h3>
            <p className="text-gray-600">
              Your subscription is now active. You'll receive a confirmation email shortly.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-2">Subscription Details:</p>
            <div className="flex justify-between text-sm">
              <span>Plan:</span>
              <span className="font-medium">{plan.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Billing:</span>
              <span className="font-medium">${currentPrice}/{periodText}</span>
            </div>
            {savings && (
              <div className="flex justify-between text-sm">
                <span>Savings:</span>
                <span className="font-medium text-green-600">{savings}</span>
              </div>
            )}
          </div>

          <Button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
          >
            Get Started
          </Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Complete Your Subscription">
      <div className="space-y-6">
        {/* Plan Summary */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900">{plan.name} Plan</h3>
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
              {isYearly ? "Yearly" : "Monthly"}
            </Badge>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-900">${currentPrice}</span>
            <span className="text-gray-600">/{periodText}</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
          {savings && (
            <p className="text-sm text-green-600 font-medium mt-2">{savings}</p>
          )}
        </div>

        {/* Payment Methods */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Choose Payment Method</h4>
          <div className="grid grid-cols-2 gap-3">
            {PAYMENT_METHODS.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                  selectedMethod === method.id
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">{method.icon}</div>
                  <div className="text-sm font-medium text-gray-900">{method.name}</div>
                  <div className="text-xs text-gray-500">{method.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Payment Form */}
        {selectedMethod === "card" && (
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Card Details</h4>
            
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Card Number
                </label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    placeholder="1234 5678 9012 3456"
                    className="pl-10"
                    maxLength={19}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Expiry Date
                  </label>
                  <Input
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    CVV
                  </label>
                  <Input
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                    placeholder="123"
                    maxLength={4}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Cardholder Name
                </label>
                <Input
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                  placeholder="John Doe"
                />
              </div>
            </div>
          </div>
        )}

        {selectedMethod === "paypal" && (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🔵</span>
            </div>
            <p className="text-gray-600">
              You'll be redirected to PayPal to complete your payment securely.
            </p>
          </div>
        )}

        {selectedMethod === "apple-pay" && (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🍎</span>
            </div>
            <p className="text-gray-600">
              Use Apple Pay for a quick and secure checkout experience.
            </p>
          </div>
        )}

        {selectedMethod === "google-pay" && (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🤖</span>
            </div>
            <p className="text-gray-600">
              Use Google Pay for a fast and secure checkout experience.
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}

        {/* Security Notice */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Lock className="w-4 h-4" />
          <span>Your payment information is encrypted and secure</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1"
            disabled={isProcessing}
          >
            Cancel
          </Button>
          <Button
            onClick={handlePayment}
            className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            disabled={isProcessing || (selectedMethod === "card" && (!cardNumber || !expiryDate || !cvv || !cardholderName))}
          >
            {isProcessing ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </div>
            ) : (
              `Pay $${currentPrice}`
            )}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
