import React, { useState, useEffect } from "react";
import { Modal } from "./modal";
import { Button } from "./button";
import { Badge } from "./badge";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { 
  MessageCircle, 
  CheckCircle, 
  Clock, 
  Users, 
  Zap,
  Play,
  Pause,
  RotateCcw
} from "lucide-react";

interface TemplateDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  template: {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    features: string[];
    examples: string[];
  };
}

const getTemplateDemoData = (templateId: string) => {
  const demos = {
    salon: {
      title: "Hair Salon Workflow Demo",
      description: "See how ChatOps automates your salon operations",
      steps: [
        {
          id: '1',
          title: 'Appointment Booking',
          description: 'Client requests appointment via chat',
          action: '"Book Sarah for highlights at 2PM tomorrow"',
          result: '✅ Appointment confirmed for Sarah at 2:00 PM tomorrow. SMS confirmation sent.',
          status: 'pending' as const,
          duration: 2000,
          integrations: [
            {
              platform: 'SMS',
              icon: '📱',
              content: 'Hi Sarah! Your highlights appointment is confirmed for tomorrow at 2:00 PM. Reply STOP to cancel.',
              type: 'sms'
            },
            {
              platform: 'Google Calendar',
              icon: '📅',
              content: 'Sarah - Highlights Appointment\nTomorrow 2:00 PM - 3:30 PM\nHair Salon & Spa',
              type: 'calendar'
            },
            {
              platform: 'Dashboard',
              icon: '🖥️',
              content: 'New appointment: Sarah - Highlights - Tomorrow 2:00 PM\nStatus: Confirmed',
              type: 'dashboard'
            }
          ]
        },
        {
          id: '2',
          title: 'Reminder Sent',
          description: 'Automated reminder 24h before appointment',
          action: 'System: "Sending reminder to Sarah"',
          result: '📱 Reminder sent to Sarah: "Your highlights appointment is tomorrow at 2PM. Reply STOP to cancel."',
          status: 'pending' as const,
          duration: 1500,
          integrations: [
            {
              platform: 'WhatsApp',
              icon: '💬',
              content: 'Hi Sarah! Just a friendly reminder: your highlights appointment is tomorrow at 2:00 PM. Looking forward to seeing you! 💇‍♀️',
              type: 'whatsapp'
            },
            {
              platform: 'Email',
              icon: '📧',
              content: 'Subject: Appointment Reminder - Tomorrow 2:00 PM\nHi Sarah, this is a reminder for your highlights appointment tomorrow at 2:00 PM...',
              type: 'email'
            }
          ]
        },
        {
          id: '3',
          title: 'Service Completion',
          description: 'Mark service as completed',
          action: '"Complete Sarah\'s highlights service"',
          result: '✨ Service marked complete. Follow-up survey sent to Sarah.',
          status: 'pending' as const,
          duration: 1800,
          integrations: [
            {
              platform: 'Dashboard',
              icon: '🖥️',
              content: 'Service completed: Sarah - Highlights\nDuration: 1h 30m\nRevenue: $85\nNext: Follow-up survey sent',
              type: 'dashboard'
            },
            {
              platform: 'Email Survey',
              icon: '📊',
              content: 'Hi Sarah! How was your highlights experience? Rate us 1-5 stars and share your feedback...',
              type: 'email'
            }
          ]
        },
        {
          id: '4',
          title: 'Invoice Generation',
          description: 'Generate and send invoice',
          action: '"Generate invoice for Sarah, $85"',
          result: '📄 Invoice generated: $85 for highlights service. Payment link sent to Sarah.',
          status: 'pending' as const,
          duration: 1600,
          integrations: [
            {
              platform: 'PDF Invoice',
              icon: '📄',
              content: 'INVOICE #2024-001\nSarah Johnson\nHighlights Service: $85\nDue: Immediately\nPayment Link: pay.chatops.com/abc123',
              type: 'pdf'
            },
            {
              platform: 'Payment Link',
              icon: '💳',
              content: 'Payment Request: $85\nService: Highlights\nDue: Now\nClick to pay securely',
              type: 'notification'
            }
          ]
        }
      ],
      stats: [
        { label: 'Time Saved', value: '15 min', icon: Clock },
        { label: 'Automations', value: '4', icon: Zap },
        { label: 'Customer Touchpoints', value: '3', icon: Users }
      ]
    },
    clinic: {
      title: "Medical Clinic Workflow Demo",
      description: "Streamline patient care with intelligent automation",
      steps: [
        {
          id: '1',
          title: 'Patient Scheduling',
          description: 'Schedule new patient appointment',
          action: '"Schedule John for annual checkup Friday 10AM"',
          result: '🏥 Appointment scheduled: John Smith, Annual Checkup, Friday 10:00 AM. Intake form sent.',
          status: 'pending' as const,
          duration: 2000,
          integrations: [
            {
              platform: 'Outlook Calendar',
              icon: '📅',
              content: 'John Smith - Annual Checkup\nFriday 10:00 AM - 11:00 AM\nMedical Clinic\nRoom: 2A',
              type: 'calendar'
            },
            {
              platform: 'Patient Portal',
              icon: '🏥',
              content: 'Appointment confirmed: Friday 10:00 AM\nPlease complete intake form before arrival',
              type: 'dashboard'
            }
          ]
        },
        {
          id: '2',
          title: 'Intake Form',
          description: 'Patient completes digital intake',
          action: 'System: "John completed intake form"',
          result: '📋 Intake form completed. Medical history reviewed. Ready for appointment.',
          status: 'pending' as const,
          duration: 1500,
          integrations: [
            {
              platform: 'Patient Database',
              icon: '💾',
              content: 'John Smith - Intake Complete\nMedical History: Updated\nAllergies: None\nReady for appointment',
              type: 'dashboard'
            },
            {
              platform: 'Email Confirmation',
              icon: '📧',
              content: 'Hi John, your intake form has been received and reviewed. You\'re all set for Friday\'s appointment!',
              type: 'email'
            }
          ]
        },
        {
          id: '3',
          title: 'Follow-up Care',
          description: 'Schedule follow-up appointment',
          action: '"Schedule John for 3-month follow-up"',
          result: '📅 Follow-up scheduled: John Smith, 3-month follow-up, March 15th.',
          status: 'pending' as const,
          duration: 1800,
          integrations: [
            {
              platform: 'SMS Reminder',
              icon: '📱',
              content: 'Hi John, your 3-month follow-up is scheduled for March 15th at 10:00 AM. Reply to confirm.',
              type: 'sms'
            },
            {
              platform: 'Doctor Dashboard',
              icon: '👨‍⚕️',
              content: 'Follow-up scheduled: John Smith\nDate: March 15th\nTime: 10:00 AM\nNotes: Monitor progress',
              type: 'dashboard'
            }
          ]
        }
      ],
      stats: [
        { label: 'Time Saved', value: '20 min', icon: Clock },
        { label: 'Automations', value: '3', icon: Zap },
        { label: 'Patient Touchpoints', value: '2', icon: Users }
      ]
    },
    tutor: {
      title: "Private Tutor Workflow Demo",
      description: "Manage lessons and track student progress automatically",
      steps: [
        {
          id: '1',
          title: 'Lesson Scheduling',
          description: 'Schedule tutoring session',
          action: '"Schedule Emma for math lesson Tuesday 4PM"',
          result: '📚 Lesson scheduled: Emma, Math, Tuesday 4:00 PM. Reminder sent to parents.',
          status: 'pending' as const,
          duration: 2000,
          integrations: [
            {
              platform: 'Parent Email',
              icon: '📧',
              content: 'Hi Mr. & Mrs. Johnson, Emma\'s math lesson is scheduled for Tuesday at 4:00 PM. Please confirm attendance.',
              type: 'email'
            },
            {
              platform: 'Tutor Calendar',
              icon: '📅',
              content: 'Emma Johnson - Math Lesson\nTuesday 4:00 PM - 5:00 PM\nSubject: Fractions & Decimals',
              type: 'calendar'
            }
          ]
        },
        {
          id: '2',
          title: 'Progress Tracking',
          description: 'Update student progress',
          action: '"Update Emma\'s math progress: Fractions mastered"',
          result: '📊 Progress updated: Emma mastered fractions. Progress report generated for parents.',
          status: 'pending' as const,
          duration: 1500,
          integrations: [
            {
              platform: 'Progress Report',
              icon: '📊',
              content: 'Emma Johnson - Math Progress Report\nFractions: ✅ Mastered\nDecimals: 🔄 In Progress\nNext Goal: Percentages',
              type: 'pdf'
            },
            {
              platform: 'Parent Portal',
              icon: '👨‍👩‍👧‍👦',
              content: 'Emma\'s Progress Update\nFractions: Completed!\nNew goal: Percentages\nKeep up the great work!',
              type: 'dashboard'
            }
          ]
        },
        {
          id: '3',
          title: 'Invoice Generation',
          description: 'Generate monthly invoice',
          action: '"Generate invoice for Emma\'s lessons this month"',
          result: '💰 Invoice generated: $120 for 4 math lessons. Sent to parents via email.',
          status: 'pending' as const,
          duration: 1800,
          integrations: [
            {
              platform: 'Monthly Invoice',
              icon: '💰',
              content: 'INVOICE #TUT-2024-003\nEmma Johnson - Math Tutoring\n4 lessons × $30 = $120\nDue: March 31st',
              type: 'pdf'
            },
            {
              platform: 'Payment Reminder',
              icon: '💳',
              content: 'Payment due: $120 for Emma\'s math lessons\nDue date: March 31st\nClick to pay online',
              type: 'email'
            }
          ]
        }
      ],
      stats: [
        { label: 'Time Saved', value: '12 min', icon: Clock },
        { label: 'Automations', value: '3', icon: Zap },
        { label: 'Parent Touchpoints', value: '2', icon: Users }
      ]
    },
    carwash: {
      title: "Car Wash Service Workflow Demo",
      description: "Automate bookings and loyalty programs",
      steps: [
        {
          id: '1',
          title: 'Service Booking',
          description: 'Book car wash service',
          action: '"Book sedan wash for tomorrow 10AM"',
          result: '🚗 Booking confirmed: Sedan wash, tomorrow 10:00 AM. Confirmation SMS sent.',
          status: 'pending' as const,
          duration: 2000,
          integrations: [
            {
              platform: 'SMS Confirmation',
              icon: '📱',
              content: 'Your sedan wash is confirmed for tomorrow at 10:00 AM. Arrive 5 min early. Reply STOP to cancel.',
              type: 'sms'
            },
            {
              platform: 'Service Dashboard',
              icon: '🖥️',
              content: 'New booking: Sedan wash\nTime: Tomorrow 10:00 AM\nCustomer: Regular client\nStatus: Confirmed',
              type: 'dashboard'
            }
          ]
        },
        {
          id: '2',
          title: 'Loyalty Program',
          description: 'Apply loyalty discount',
          action: '"Apply loyalty discount to regular customer"',
          result: '🎯 Loyalty discount applied: 15% off for regular customer. Updated total: $17.',
          status: 'pending' as const,
          duration: 1500,
          integrations: [
            {
              platform: 'Loyalty App',
              icon: '🎯',
              content: 'Loyalty Reward Applied!\n15% discount on sedan wash\nNew total: $17\nPoints earned: +25',
              type: 'notification'
            },
            {
              platform: 'Customer Portal',
              icon: '👤',
              content: 'Welcome back, valued customer!\nLoyalty discount: 15% off\nCurrent points: 275\nNext reward: Free wash at 300 points',
              type: 'dashboard'
            }
          ]
        },
        {
          id: '3',
          title: 'Service Update',
          description: 'Send service completion update',
          action: '"Send service completion update"',
          result: '✨ Service completed! Update sent: "Your car wash is ready. Thank you for choosing us!"',
          status: 'pending' as const,
          duration: 1800,
          integrations: [
            {
              platform: 'WhatsApp Update',
              icon: '💬',
              content: '✨ Your car wash is complete and ready for pickup!\nThank you for choosing us. Rate your experience: ⭐⭐⭐⭐⭐',
              type: 'whatsapp'
            },
            {
              platform: 'Email Receipt',
              icon: '📧',
              content: 'Service Complete: Sedan Wash\nDate: Today\nTotal: $17 (with loyalty discount)\nThank you for your business!',
              type: 'email'
            }
          ]
        }
      ],
      stats: [
        { label: 'Time Saved', value: '8 min', icon: Clock },
        { label: 'Automations', value: '3', icon: Zap },
        { label: 'Customer Touchpoints', value: '2', icon: Users }
      ]
    }
  };

  return demos[templateId as keyof typeof demos] || demos.salon;
};

export function TemplateDemoModal({ isOpen, onClose, template }: TemplateDemoModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [isDemoComplete, setIsDemoComplete] = useState(false);

  const demoData = getTemplateDemoData(template.id);
  const IconComponent = template.icon;

  useEffect(() => {
    if (isOpen) {
      resetDemo();
    }
  }, [isOpen]);

  const resetDemo = () => {
    setCurrentStep(0);
    setIsPlaying(false);
    setCompletedSteps(new Set());
    setIsDemoComplete(false);
  };

  const startDemo = () => {
    setIsPlaying(true);
    runDemoStep(0);
  };

  const runDemoStep = (stepIndex: number) => {
    if (stepIndex >= demoData.steps.length) {
      setIsDemoComplete(true);
      setIsPlaying(false);
      return;
    }

    setCurrentStep(stepIndex);
    const step = demoData.steps[stepIndex];

    // Mark step as active
    setTimeout(() => {
      setCompletedSteps(prev => new Set([...prev, step.id]));
      
      // Move to next step
      setTimeout(() => {
        runDemoStep(stepIndex + 1);
      }, 1000);
    }, step.duration);
  };

  const pauseDemo = () => {
    setIsPlaying(false);
  };

  const resumeDemo = () => {
    setIsPlaying(true);
    runDemoStep(currentStep);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={demoData.title} className="max-w-4xl">
      <div className="space-y-6">
        {/* Template Header */}
        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
          <div className={`w-16 h-16 rounded-xl ${template.color} flex items-center justify-center text-white`}>
            <IconComponent className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{template.title}</h3>
            <p className="text-gray-600">{demoData.description}</p>
          </div>
        </div>

        {/* Demo Controls */}
        <div className="flex items-center justify-center gap-4">
          {!isPlaying && !isDemoComplete && (
            <Button onClick={startDemo} className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
              <Play className="w-4 h-4 mr-2" />
              Start Demo
            </Button>
          )}
          
          {isPlaying && (
            <Button onClick={pauseDemo} variant="outline">
              <Pause className="w-4 h-4 mr-2" />
              Pause
            </Button>
          )}
          
          {!isPlaying && currentStep > 0 && !isDemoComplete && (
            <Button onClick={resumeDemo} className="bg-green-600 hover:bg-green-700">
              <Play className="w-4 h-4 mr-2" />
              Resume
            </Button>
          )}
          
          <Button onClick={resetDemo} variant="outline">
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>

        {/* Demo Steps */}
        <div className="space-y-4">
          {demoData.steps.map((step, index) => (
            <Card 
              key={step.id} 
              className={`transition-all duration-500 ${
                completedSteps.has(step.id) 
                  ? 'border-green-200 bg-green-50' 
                  : currentStep === index && isPlaying
                  ? 'border-blue-300 bg-blue-50 animate-pulse'
                  : 'border-gray-200'
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      completedSteps.has(step.id) 
                        ? 'bg-green-500 text-white' 
                        : currentStep === index && isPlaying
                        ? 'bg-blue-500 text-white animate-pulse'
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {completedSteps.has(step.id) ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <span className="text-sm font-medium">{index + 1}</span>
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-900">{step.title}</CardTitle>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {completedSteps.has(step.id) && (
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      Completed
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">User Command:</span>
                  </div>
                  <div className="font-mono text-sm bg-white rounded p-2 border border-gray-200">
                    {step.action}
                  </div>
                </div>
                
                {completedSteps.has(step.id) && (
                  <div className="bg-green-100 rounded-lg p-3 border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-700">Result:</span>
                    </div>
                    <div className="text-sm text-green-800">
                      {step.result}
                    </div>
                  </div>
                )}

                {/* Integrations Display */}
                {completedSteps.has(step.id) && step.integrations && (
                  <div className="space-y-3">
                    <h5 className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-indigo-600" />
                      How it appears across platforms:
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.integrations.map((integration, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg">{integration.icon}</span>
                            <span className="text-sm font-medium text-gray-700">{integration.platform}</span>
                          </div>
                          <div className="text-xs text-gray-600 font-mono bg-gray-50 rounded p-2 border">
                            {integration.content}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Demo Complete */}
        {isDemoComplete && (
          <div className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Demo Complete!</h3>
            <p className="text-gray-600 mb-4">
              You've seen how {template.title} can automate your business workflows.
            </p>
            <Button 
              onClick={onClose}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            >
              Get Started with {template.title}
            </Button>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
          {demoData.stats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <StatIcon className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}
