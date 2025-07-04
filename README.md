# TaskTone - Audio Processing Marketplace

## 🎵 Overview

TaskTone is a modern web-based marketplace that connects audio content creators with professional audio engineers. Users can upload audio files and receive professionally processed results within 24 hours, while skilled workers earn money by providing high-quality audio processing services.

## ✨ Features

### For Audio Creators (Users)
- **Easy Upload**: Simple drag-and-drop audio file upload with instant price quotes
- **Automatic Pricing**: Dynamic pricing based on audio duration (per minute)
- **Real-time Tracking**: Live status updates on task progress
- **Quality Assurance**: Review and request revisions before approval
- **Secure Payments**: Pay only after approving the final result
- **Communication**: Direct messaging with assigned audio engineers

### For Audio Engineers (Workers)
- **Task Marketplace**: Browse and claim available audio processing tasks
- **24-Hour Deadline**: Clear time constraints with countdown timers
- **Fair Compensation**: 50% revenue share with weekly PayPal payouts
- **Professional Tools**: Download original files for processing in preferred DAW
- **Client Communication**: Direct messaging for clarifications and updates
- **Performance Tracking**: Dashboard showing completed tasks and earnings

## 🛠️ Technology Stack

- **Frontend**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with HTTP-only cookies, bcrypt password hashing
- **Payments**: Stripe for user payments, PayPal for worker payouts
- **File Storage**: AWS S3 (configurable)
- **Real-time**: Socket.io for live updates
- **Deployment**: Vercel-ready configuration

## 🏗️ Architecture

### Database Schema
- **Users**: Role-based system (USER/WORKER) with authentication
- **Tasks**: Complete workflow from creation to completion
- **Messages**: Real-time communication between users and workers
- **Payments**: Secure transaction tracking with Stripe integration
- **Worker Payouts**: Automated weekly payment distribution

### Task Workflow
1. User uploads audio file → Automatic price quote generated
2. Task becomes available in worker marketplace
3. Worker claims task → 24-hour countdown begins
4. Worker downloads, processes, and uploads result
5. User reviews and can request revisions
6. User approves and pays → Worker receives 50% payout

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tasktone.git
   cd tasktone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Configure your database URL, JWT secrets, and API keys in `.env`

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
tasktone/
├── src/
│   ├── app/                 # Next.js 13+ app directory
│   │   ├── api/            # API routes
│   │   ├── auth/           # Authentication pages
│   │   ├── user/           # User dashboard
│   │   ├── worker/         # Worker dashboard
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable React components
│   ├── lib/               # Utility functions and configurations
│   └── types/             # TypeScript type definitions
├── prisma/
│   └── schema.prisma      # Database schema
├── public/                # Static assets
└── package.json
```

## 🔧 Configuration

### Environment Variables
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/tasktone"

# Authentication
JWT_SECRET="your-jwt-secret"
NEXTAUTH_SECRET="your-nextauth-secret"

# Payments
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
PAYPAL_CLIENT_ID="your-paypal-client-id"

# File Storage
AWS_ACCESS_KEY_ID="your-aws-access-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret-key"
AWS_S3_BUCKET="tasktone-audio-files"
```

## 🎯 Roadmap

- [x] User authentication and role management
- [x] Database schema and API foundation
- [x] Responsive UI with Tailwind CSS
- [ ] File upload and audio processing workflow
- [ ] Real-time messaging system
- [ ] Payment integration (Stripe + PayPal)
- [ ] Worker dashboard and task management
- [ ] User dashboard and task tracking
- [ ] Email notifications
- [ ] Advanced audio format support
- [ ] Mobile app (React Native)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Database powered by [Prisma](https://prisma.io/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)
- Payment processing by [Stripe](https://stripe.com/)

---

**TaskTone** - *Professional Audio Processing Made Simple* 🎵
