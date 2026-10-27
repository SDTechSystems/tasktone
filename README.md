# TaskTone

TaskTone is a web application in development for connecting audio creators with audio engineers. The intended service lets a creator request audio work, receive a result and request revisions before approving the job.

## Current application

The repository contains a landing page, account registration and login, session handling, and separate creator and engineer roles. A PostgreSQL schema defines jobs, messages, payments and engineer payouts.

Audio uploads, job assignment, creator and engineer dashboards, messaging, payments and payouts are not implemented as complete working services. References to 24-hour delivery, automatic pricing and revenue sharing describe the proposed service, not an available service guarantee. Stripe, PayPal and storage settings are placeholders for future integrations.

## Run from source

Use Node.js 22 LTS, npm and a local PostgreSQL database.

```sh
git clone https://github.com/SDTechSystems/tasktone.git
cd tasktone
npm ci
cp .env.example .env
```

Set `DATABASE_URL` to a development database and replace `JWT_SECRET` with a private, randomly generated value. The authentication code has a development fallback secret; configure a real secret before using accounts outside a disposable local environment. Keep `.env` private.

```sh
npx prisma generate
npx prisma db push
npm run dev
```

`prisma db push` changes the selected database schema. Use a disposable development database. The application opens at `http://localhost:3000`.

The current account pages redirect to role dashboards that are not yet included. Registration and login can be inspected locally, but the application is not ready for customer jobs or live payments.

## Project structure

| Location | Contents |
| --- | --- |
| `src/app/page.tsx` | Service landing page |
| `src/app/auth/` | Login and registration pages |
| `src/app/api/auth/` | Registration, login, logout and account endpoints |
| `src/lib/auth.ts` | Password hashing and JWT sessions |
| `prisma/schema.prisma` | Accounts and proposed marketplace records |

The application uses Next.js 15, React 18, TypeScript, Tailwind CSS and Prisma. `npm run build` creates a production build; `npm start` serves it. A successful build alone does not establish that the proposed marketplace workflows are available.

## License

[MIT](LICENSE).
