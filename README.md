# 🚀 ProjectElevate

**AI-Powered Automation & Modern Web Solutions**

ProjectElevate is the official website and service platform for **Project Elevate** — an AI automation and development studio focused on helping startups, small businesses, and entrepreneurs scale faster through intelligent workflows, modern web experiences, and seamless integrations.

---

## ✨ What is ProjectElevate?

ProjectElevate combines **AI automation**, **workflow orchestration**, and **high-performance web development** into one cohesive platform.

This repository powers the public-facing ProjectElevate website, showcasing:
- Automation use cases
- Service offerings
- Pricing packages
- Integrations
- Lead capture & contact flows

Built with scalability, performance, and clean architecture in mind.

---

## 🧠 Core Features

### 🤖 AI & Automation
- Business workflow automation (Make.com / Zapier style logic)
- CRM & lead management integrations
- Social, email, and data synchronization workflows
- AI-powered process optimization

### 🌐 Modern Web Experience
- High-performance **Next.js 15 (App Router)**
- Fully responsive & mobile-first design
- Clean UI with **shadcn/ui** + **Tailwind CSS**
- Component-driven architecture

### 📩 Lead Capture & Forms
- Embedded Tally & GoHighLevel forms
- Floating CTA & popup workflows
- Server actions for form submissions
- Supabase-backed storage

### 🔌 Integrations
- Google Workspace (Drive, Sheets)
- Slack, Discord, Microsoft Teams
- Salesforce, HubSpot-style CRMs
- Stripe, PayPal, Calendly, QuickBooks
- Instagram, Facebook, LinkedIn & more

---

## 🛠️ Tech Stack

| Layer | Technology |
|-----|-----------|
| Framework | **Next.js 15 (App Router)** |
| Language | **TypeScript** |
| UI | **Tailwind CSS**, **shadcn/ui**, **Radix UI** |
| State & Hooks | React Hooks |
| Backend | Next.js Server Actions |
| Database | **Supabase** |
| Forms | Tally, GoHighLevel |
| Icons | Lucide Icons |
| Package Manager | pnpm |
| Deployment | Vercel |

---

## 📂 Project Structure

```txt
.
├── app/                 # Next.js App Router
│   ├── actions.ts       # Server actions
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   └── contact/         # Contact page
│
├── components/
│   ├── sections/        # Page sections (Hero, Services, FAQ, etc.)
│   ├── ui/              # shadcn/ui components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── carousel.tsx
│   └── FloatingButton.tsx
│
├── lib/
│   ├── supabase.ts
│   └── utils.ts
│
├── styles/
│   └── globals.css
│
├── tailwind.config.js
├── tsconfig.json
├── next.config.mjs
└── package.json
