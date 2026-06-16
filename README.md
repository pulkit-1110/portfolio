# 3D Developer Portfolio

A modern, interactive 3D portfolio website built with **React**, **Three.js**, and **Tailwind CSS**. It showcases my experience, skills, and projects through animated 3D models, smooth scroll-based transitions, and a working contact form.

🔗 **Live site:** [pulkituppal.com](https://pulkituppal.com/)

![Portfolio preview](https://pulkituppal.vercel.app/social-preview.png)

## ✨ Features

- **Interactive 3D scenes** — a rotating computer model, floating tech-stack balls, an orbiting Earth, and an animated star field, all rendered with React Three Fiber.
- **Smooth motion** — page and section animations powered by Framer Motion with scroll-triggered reveals.
- **Sections** — Hero, About, Experience (vertical timeline), Skills, Tech, Projects, Testimonials, and Contact.
- **Working contact form** — sends email directly via EmailJS, no backend required.
- **Fully responsive** — adapts across mobile, tablet, and desktop.
- **Fast tooling** — built and bundled with Vite.

## ⚙️ Tech Stack

| Area        | Technologies                                                                 |
| ----------- | ---------------------------------------------------------------------------- |
| Framework   | React 18, React Router DOM                                                   |
| 3D / Visual | Three.js, React Three Fiber, React Three Drei, maath, react-parallax-tilt    |
| Animation   | Framer Motion, react-vertical-timeline-component                             |
| Styling     | Tailwind CSS, PostCSS, Autoprefixer                                          |
| Email       | EmailJS                                                                      |
| Build Tool  | Vite                                                                         |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pulkit-1110/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add your EmailJS credentials (see below):

   ```env
   VITE_EMAIL_SERVICE_ID=your_service_id
   VITE_TEMPLATE_NAME=your_template_id
   VITE_EMAIL_ID=your_email_id
   VITE_EMAIL_JS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

## 📜 Available Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the Vite development server            |
| `npm run build`   | Build the production bundle into `dist/`     |
| `npm run preview` | Preview the production build locally         |

## 🔐 Environment Variables

The contact form uses [EmailJS](https://www.emailjs.com/). Create a free account, set up a service and template, then add these to your `.env` file:

| Variable                   | Description                          |
| -------------------------- | ------------------------------------ |
| `VITE_EMAIL_SERVICE_ID`    | Your EmailJS service ID              |
| `VITE_TEMPLATE_NAME`       | Your EmailJS template ID             |
| `VITE_EMAIL_ID`            | The recipient email / template field |
| `VITE_EMAIL_JS_PUBLIC_KEY` | Your EmailJS public key              |

> These are `VITE_*` variables, so they are bundled into the client. The EmailJS public key is safe to expose by design — restrict allowed domains in your EmailJS dashboard to prevent misuse.

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets (resume, social preview, etc.)
├── conf/                # App configuration (reads env vars)
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # UI sections (Hero, About, Works, Contact, ...)
│   │   └── canvas/      # 3D scenes (Computers, Ball, Earth, Stars)
│   ├── constants/       # Content data (projects, experiences, skills)
│   ├── hoc/             # Higher-order components (SectionWrapper)
│   ├── utils/           # Motion/animation helpers
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.js
├── index.html
├── tailwind.config.cjs
├── vite.config.js
└── vercel.json
```

## 🌐 Deployment

The site is deployed on [Vercel](https://vercel.com/). To deploy your own:

1. Push the repo to GitHub.
2. Import the project into Vercel.
3. Add the environment variables listed above in the Vercel project settings.
4. Vercel auto-detects Vite and deploys on every push.

## 📬 Contact

**Pulkit Uppal**

- Portfolio: [pulkituppal.com](https://pulkituppal.com/)
- GitHub: [@pulkit-1110](https://github.com/pulkit-1110)

---

⭐ If you like this project, consider giving it a star!
