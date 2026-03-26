# Kidz & Kash – Financial Literacy Made Fun 🦁💰

Kidz & Kash is an interactive, gamified financial literacy platform designed for Kenyan youth (ages 10–24). It aligns with CBC and IGCSE curricula, uses local context (M‑Pesa, SACCOs, NSE), and rewards progress with XP and badges. This repository contains the **interactive prototype** (a self‑contained HTML/React file) and a **full build plan** to take it to production.

![Kidz & Kash Demo](https://via.placeholder.com/800x400?text=Interactive+Kenya+Map+%26+80%2B+Lessons)

## 🚀 Live Prototype
The prototype is a single HTML file that runs entirely in the browser – no backend needed.  
**Deploy it for free on GitHub Pages** by following the [Deployment Instructions](#-deployment).

## ✨ Features (Current Prototype)
- **80+ financial literacy lessons** drawn from CFP® handbook, Jubilee Insurance materials, and Shillings & Sense.
- **Interactive Kenya map** – each county unlocks a module.
- **XP & badge system** – earn points, level up, collect badges.
- **Quizzes after each lesson** with instant feedback and XP rewards.
- **Curriculum alignment** – CBC strands and IGCSE subject codes clearly shown.
- **Partner & revenue model** section for investors.
- **Fully responsive** – works on mobile, tablet, desktop.

## 🧩 Tech Stack (Prototype)
- React (via CDN) + Babel for JSX
- Pure CSS with inline styles
- No build step – just HTML, CSS, JS

## 📦 Deployment (Zero Cost)
1. **Fork or clone this repository** (or create a new one).
2. **Upload `index.html`** (the prototype file) to your repo.
3. **Enable GitHub Pages**:
   - Go to **Settings** → **Pages**.
   - Under **Branch**, select `main` and `/ (root)`.
   - Click **Save**.
4. Your site will be live at `https://yourusername.github.io/repo-name/` within a minute.

*Note: Make sure the file is named exactly `index.html`.*

---

# 📊 Build Plan – From Prototype to Production

## 1. Vision & Core Value
- **Mission:** Make financial literacy fun and accessible for Kenyan youth (10–24) through gamified, curriculum‑aligned learning.
- **Target Users:** Students, parents, teachers, schools, and corporate partners.
- **Differentiators:** Hyper‑local content (M‑Pesa, SACCOs, NSE), CBC/IGCSE alignment, gamification, and M‑Pesa integration.

## 2. Recommended Tech Stack (Production)

| Layer          | Technology Choices                                                                 |
|----------------|------------------------------------------------------------------------------------|
| Frontend       | React + Vite, Tailwind CSS, TypeScript                                             |
| Backend        | Node.js + Express (or Python Django)                                               |
| Database       | PostgreSQL (or Firebase for quick MVP)                                             |
| Authentication | Auth0 / Firebase Auth / Custom JWT with email/phone                                |
| Hosting        | Vercel (frontend), Railway / Heroku / AWS (backend)                                |
| Mobile         | React Native (iOS/Android) – after web MVP                                         |
| Payments       | M‑Pesa API (Safaricom), Stripe for international                                   |

## 3. Development Phases

### Phase 1: MVP (2–3 months)
- [ ] User accounts (email/phone, parent consent for minors)
- [ ] Progress saved to backend (XP, completed lessons, badges)
- [ ] Admin panel to manage lessons, quizzes, badges
- [ ] Persistent leaderboards (schools, counties)
- [ ] M‑Pesa integration for premium subscriptions
- [ ] School licensing form

**Deliverable:** Hosted web app with 20 pilot schools or 500 active users.

### Phase 2: Scale & Engagement (3–4 months)
- [ ] 50+ additional lessons (video, audio, interactive scenarios)
- [ ] Group challenges (class vs class)
- [ ] Discussion forums / mentor Q&A
- [ ] Mobile apps (React Native)
- [ ] Advanced analytics (learning outcomes, certificates)
- [ ] Monetization: premium subscriptions, school licenses, sponsored badges

**Deliverable:** 10,000+ active users, 50+ paying schools, revenue > KES 1M/year.

### Phase 3: Expansion & Sustainability (6+ months)
- [ ] Swahili translation, regional adaptation (Uganda, Tanzania, Nigeria)
- [ ] AI recommendations & WhatsApp chatbot
- [ ] Real savings challenges (M‑Shwari API)
- [ ] Impact research and publications
- [ ] Government and NGO partnerships

## 4. Team & Roles (Initial)

| Role               | Responsibility                                                                 |
|--------------------|--------------------------------------------------------------------------------|
| Founder / PM       | Product vision, partnerships, fundraising                                     |
| Full‑Stack Dev     | Build MVP, integrate M‑Pesa, deploy                                             |
| Content Lead       | Adapt financial literacy materials, create quizzes, work with teachers         |
| UI/UX Designer     | Polish prototype, design mobile app                                            |
| Growth Lead        | School outreach, social media, partnerships                                    |

## 5. Estimated Costs (MVP)

| Item                         | Cost (KES)      | Notes                                   |
|------------------------------|-----------------|-----------------------------------------|
| Developer (3 months)         | 300,000 – 600k  | Freelance or junior + senior            |
| Content writer/curriculum    | 100,000         | 80 lessons → 200+                       |
| Hosting & services (3 months)| 20,000          | Vercel, DB, Firebase                    |
| M‑Pesa integration           | 30,000          | Developer time + testing                |
| Marketing (pilots)           | 50,000          | School visits, flyers                   |
| **Total**                    | **500k – 800k** | ~$4,000 – $6,500 USD                    |

*Fundraising target: KES 1.5M ($12,000) for MVP + 6 months runway.*

## 6. Milestones & Timeline

| Milestone                   | Target Date        |
|-----------------------------|--------------------|
| Prototype (already done)    | ✅                 |
| MVP backend + accounts      | 8 weeks from funding|
| Pilot with 5 schools        | 12 weeks           |
| Full launch (open to public)| 16 weeks           |
| Mobile app (iOS/Android)    | 24 weeks           |
| Break‑even (paid users)     | 12 months          |

## 7. Risk Mitigation
- **User engagement:** Test early with small groups, iterate quickly.
- **Content accuracy:** Partner with CFP® professionals and Jubilee Insurance.
- **Technical debt:** Use well‑documented frameworks, maintain clean code.
- **Competition:** Focus on hyper‑localization and gamification that larger players overlook.

## 8. Investor Pitch Materials
- **One‑pager:** Problem → solution → market size (15M+ Kenyan youth) → traction → ask.
- **Demo video:** 2‑minute walkthrough of the prototype.
- **Financial projections:** Subscription/licensing revenue + partner sponsorship.
- **Impact metrics:** Financial literacy improvement, gender inclusion, SDG alignment.

---

# 🧪 Running the Prototype Locally
1. Download `index.html` from this repository.
2. Open it in any modern web browser (Chrome, Firefox, Safari).
3. That's it! No server or installation needed.

# 🤝 Contributing
We welcome contributions! If you'd like to help:
- Report bugs or suggest features via [Issues](../../issues).
- Submit pull requests with improvements (content, UI, bug fixes).
- Reach out for partnership discussions.

# 📄 License
This project is open source under the MIT License – feel free to use the prototype for educational and non‑commercial purposes. For commercial licensing, please contact the maintainer.

---

**Made with ❤️ for Kenyan youth – because financial literacy is the key to freedom.**  
Contact: [your email / website]