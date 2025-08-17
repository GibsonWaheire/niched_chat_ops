# ChatOps – Chat-Based Workflow Automation

Automate appointments, reminders, and invoices with simple chat.

## Features

- **Chat-first interface**
- **Pre-built business templates** (Salon, Clinic, Tutor, Car Wash)
- **Multi-channel messaging**
- **Smart document generation & simple analytics**
- **Complete authentication system** with sign up, sign in, and password reset
- **Interactive navigation** with smooth scrolling to sections

## Vision

Lightweight SaaS that replaces complex dashboards with natural chat.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/GibsonWaheire/niched_chat_ops.git
cd niched_chat_ops
```

2. Install dependencies
```bash
npm install
```

3. Start the JSON server (in a separate terminal)
```bash
npm run server
```

4. Start the development server
```bash
npm run dev
```

5. Open [http://localhost:5174](http://localhost:5174) in your browser

## Authentication System

The app includes a complete authentication system with:

- **Sign Up**: Password validation (8+ chars, numbers, letters, special chars)
- **Sign In**: Remember username functionality
- **Password Reset**: Email-based password recovery
- **Google OAuth**: Ready for integration
- **Session Management**: JWT-based authentication

### Demo Credentials
- Email: `demo@chatops.com`
- Password: Any password (demo mode)

## Project Structure

```
src/
├── components/
│   ├── auth/           # Authentication modals
│   ├── ui/             # Reusable UI components
│   └── ...             # Page sections
├── lib/
│   └── auth.ts         # Authentication service
└── ...
```

## Next Steps

Connect backend for real automations:
- **Twilio** for SMS/WhatsApp
- **Supabase** for database and auth
- **Stripe** for payments
- **Email service** (SendGrid, Mailgun)
- **Calendar integration** (Google Calendar, Outlook)

## Development

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: JSON Server (development)
- **Authentication**: Custom service with JWT
- **Styling**: Tailwind CSS with custom components

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run server` - Start JSON server
- `npm run preview` - Preview production build
