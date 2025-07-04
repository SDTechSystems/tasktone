TaskTone - Audio Processing Marketplace

🎵 Overview
TaskTone is a modern web-based marketplace that connects audio content creators with professional audio engineers. Users can upload audio files and receive professionally processed results within 24 hours, while skilled workers earn money by providing high-quality audio processing services.

✨ Features
For Audio Creators (Users)
Easy Upload: Simple drag-and-drop audio file upload with instant price quotes
Automatic Pricing: Dynamic pricing based on audio duration (per minute)
Real-time Tracking: Live status updates on task progress
Quality Assurance: Review and request revisions before approval
Secure Payments: Pay only after approving the final result
Communication: Direct messaging with assigned audio engineers
For Audio Engineers (Workers)
Task Marketplace: Browse and claim available audio processing tasks
24-Hour Deadline: Clear time constraints with countdown timers
Fair Compensation: 50% revenue share with weekly PayPal payouts
Professional Tools: Download original files for processing in preferred DAW
Client Communication: Direct messaging for clarifications and updates
Performance Tracking: Dashboard showing completed tasks and earnings

🛠️ Technology Stack
Frontend: Next.js 15, React 18, TypeScript, Tailwind CSS
Backend: Next.js API Routes, Node.js
Database: PostgreSQL with Prisma ORM
Authentication: JWT with HTTP-only cookies, bcrypt password hashing
Payments: Stripe for user payments, PayPal for worker payouts
File Storage: AWS S3 (configurable)
Real-time: Socket.io for live updates
Deployment: Vercel-ready configuration

🏗️ Architecture
Database Schema
Users: Role-based system (USER/WORKER) with authentication
Tasks: Complete workflow from creation to completion
Messages: Real-time communication between users and workers
Payments: Secure transaction tracking with Stripe integration
Worker Payouts: Automated weekly payment distribution
Task Workflow
User uploads audio file → Automatic price quote generated
Task becomes available in worker marketplace
Worker claims task → 24-hour countdown begins
Worker downloads, processes, and uploads result
User reviews and can request revisions
User approves and pays → Worker receives 50% payout

🚀 Getting Started
Prerequisites
Node.js 18+
PostgreSQL database
npm or yarn package manager
