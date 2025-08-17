import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Scissors, Stethoscope, GraduationCap, Car, MessageCircle } from "lucide-react";

const niches = [
  {
    id: 'salon',
    title: 'Hair Salon & Spa',
    description: 'Automate appointments, reminders, and customer follow-ups',
    icon: Scissors,
    features: ['Appointment booking', 'SMS reminders', 'Receipt generation'],
    color: 'bg-pink-500',
    examples: [
      '"Book Maria for highlights at 2PM"',
      '"Send reminder to tomorrow\'s clients"',
      '"Generate receipt for Sarah, $85"'
    ]
  },
  {
    id: 'clinic',
    title: 'Medical Clinic',
    description: 'Streamline patient intake, appointments, and follow-ups',
    icon: Stethoscope,
    features: ['Patient scheduling', 'Appointment follow-ups', 'Intake forms'],
    color: 'bg-blue-500',
    examples: [
      '"Schedule John for checkup Friday"',
      '"Send post-visit survey to patients"',
      '"Remind patients about lab results"'
    ]
  },
  {
    id: 'tutor',
    title: 'Private Tutor',
    description: 'Manage lessons, track progress, and handle invoicing',
    icon: GraduationCap,
    features: ['Lesson scheduling', 'Progress tracking', 'Invoice automation'],
    color: 'bg-green-500',
    examples: [
      '"Schedule Emma for math lesson Tuesday"',
      '"Send progress report to parents"',
      '"Generate invoice for this month"'
    ]
  },
  {
    id: 'carwash',
    title: 'Car Wash Service',
    description: 'Automate bookings, loyalty programs, and confirmations',
    icon: Car,
    features: ['Booking confirmations', 'Loyalty reminders', 'Service updates'],
    color: 'bg-purple-500',
    examples: [
      '"Book sedan wash for tomorrow 10AM"',
      '"Send loyalty discount to regulars"',
      '"Confirm all bookings for today"'
    ]
  }
];

function NicheCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {niches.map((niche) => {
        const IconComponent = niche.icon;
        return (
          <Card key={niche.id} className="group hover:shadow-lg transition-all duration-300 border-indigo-200 hover:border-indigo-400">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-lg ${niche.color} flex items-center justify-center text-white`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg text-gray-900">{niche.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">{niche.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {niche.features.map((feature) => (
                  <Badge key={feature} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Example Commands:
                </h4>
                <div className="space-y-1">
                  {niche.examples.map((example, index) => (
                    <div key={index} className="text-xs bg-gray-100 rounded p-2 font-mono text-gray-700">
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
export default NicheCards;