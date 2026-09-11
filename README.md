# Aryan Karmur — Developer Portfolio

A responsive personal portfolio website built with React.js, JavaScript, and modern CSS. This project showcases my frontend development skills, featured projects, technical background, and contact information in a clean, interactive single-page interface.

[View Live Portfolio](https://aryankarmur.netlify.app) &nbsp;|&nbsp; [GitHub Repository](https://github.com/Aryankarmur/aryan-portfolio)

---

## About the Portfolio

This portfolio serves as a central hub to demonstrate my capabilities as a fresher entering the frontend development space. It incorporates modern web design patterns including glassmorphism, smooth section navigation, and theme customization.

The website contains the following verified sections:
- **Hero / Introduction:** Overview of my role, quick call-to-action buttons, and social links.
- **About:** Background summary, education details (BCA), location, and direct resume access.
- **Skills:** Categorized display of core frontend technologies, libraries, and development tools.
- **Selected Projects:** Showcase of built applications with descriptions, tech tags, live demos, and code repositories.
- **Contact:** Direct contact details including email, phone, location, and social profiles.
- **Resume Access:** In-browser viewing and direct PDF download functionality.
- **Theme Toggle:** Persistent dark and light mode switcher.

---

## Purpose

The primary goals of this repository and portfolio website are to:
- Present my core frontend engineering skills in React.js and JavaScript.
- Showcase real-world personal projects with verified source code and live deployments.
- Provide recruiters and hiring managers with a quick, transparent review of my work.
- Offer direct communication channels for job opportunities.

---

## Featured Projects

The portfolio highlights four primary personal projects:

### 1. YWatch — YouTube-Inspired Video Platform
- **Description:** A video browsing web application featuring search functionality, REST API integration, video playback, and responsive layouts.
- **Tech Highlights:** React.js, REST APIs, React Router, CSS3
- **Links:** [Live Demo](https://ywatch-aryan.netlify.app/) | [GitHub Repository](https://github.com/Aryankarmur/YouTube-clone)

### 2. DevBlog — Full-Stack Blog Application
- **Description:** A blogging platform featuring user authentication with JWT, protected routing, and CRUD operations for blog posts.
- **Tech Highlights:** React.js, Express.js, MongoDB, JWT
- **Links:** [Live Demo](https://devblo.netlify.app/) | [GitHub Repository](https://github.com/Aryankarmur/devblog)

### 3. Mini Mart — React E-Commerce Application
- **Description:** An e-commerce web application with product listing, dynamic detail views, shopping cart management, and state persistence.
- **Tech Highlights:** React.js, Context API, CSS3
- **Links:** [Live Demo](https://mini-mart-bajar.netlify.app/) | [GitHub Repository](https://github.com/Aryankarmur/mini_mart)

### 4. MeghDarshan — Weather Forecast Application
- **Description:** A weather forecasting app leveraging a third-party weather API to display location-based weather statistics and dynamic conditions.
- **Tech Highlights:** React.js, REST APIs, CSS3
- **Links:** [Live Demo](https://meghadarshan.netlify.app/) | [GitHub Repository](https://github.com/Aryankarmur/meghadarshan)

---

## Tech Stack

The portfolio application itself is built using the following stack:

- **Frontend Core:** React.js (v19), JavaScript (ES6+), HTML5, CSS3
- **Styling & Icons:** Custom CSS (Variables & Glassmorphism), Lucide React (`lucide-react`), React Icons (`react-icons`)
- **Build System:** Vite, Oxlint
- **Deployment:** Netlify

---

## Key Features

- **Responsive Layout:** Optimized for mobile, tablet, and desktop viewports.
- **Dark & Light Mode:** Toggleable theme with user preference saved in `localStorage`.
- **Scroll Spy Navigation:** Active section highlighting using `IntersectionObserver`.
- **Direct Resume Access:** Quick buttons to view or download the PDF resume (`Aryan_Resume.pdf`).
- **Accessible UI:** Built with semantic HTML elements, ARIA properties, and visible keyboard focus states.
- **Smooth Interaction:** CSS-driven micro-interactions and transitions respecting `prefers-reduced-motion`.

---

## Responsive Design

The portfolio layout dynamically adjusts to different screen sizes:
- **Desktop:** Full horizontal navigation bar, multi-column grid layouts for projects and skills cards.
- **Tablet & Mobile:** Collapsible mobile navigation drawer, single-column stacked card layouts, and responsive font sizing adjusted via media queries (`@media (max-width: 768px)`).

---

## Accessibility

The project implements web accessibility best practices:
- **Semantic Tags:** Uses HTML5 structural elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **ARIA Attributes:** Employs `aria-label`, `aria-expanded`, `aria-controls`, `aria-hidden`, and `aria-current="page"` on interactive controls and icons.
- **Keyboard Focus:** Custom focus outlines defined via `:focus-visible` for keyboard navigation.
- **Reduced Motion:** CSS rule `@media (prefers-reduced-motion: reduce)` disables non-essential animations for users with motion sensitivity.

---

## SEO & Performance

- **Metadata:** Configured `<title>`, `<meta name="description">`, `<meta name="author">`, and Open Graph tags in `index.html`.
- **Favicon:** Custom PNG icon (`/man.png`) linked in document head.
- **Fast Load Time:** Minimal third-party dependencies bundled using Vite for optimal performance.

---

## Project Structure

```
aryan-portfolio/
├── public/
│   └── man.png               # Site favicon
├── src/
│   ├── assets/
│   │   └── Resume/
│   │       └── Aryan_Resume.pdf  # PDF Resume artifact
│   ├── components/
│   │   ├── About.css
│   │   ├── About.jsx         # Detailed background & resume view
│   │   ├── Contact.css
│   │   ├── Contact.jsx       # Contact channels & details card
│   │   ├── Footer.css
│   │   ├── Footer.jsx        # Footer navigation & copyright
│   │   ├── Hero.css
│   │   ├── Hero.jsx          # Landing section with bio & actions
│   │   ├── Navbar.css
│   │   ├── Navbar.jsx        # Header navigation & theme toggle
│   │   ├── Projects.css
│   │   ├── Projects.jsx      # Featured project showcase cards
│   │   ├── Skills.css
│   │   └── Skills.jsx        # Categorized skills grid
│   ├── App.jsx               # Root component managing theme state
│   ├── index.css             # Global styles, CSS variables & theme tokens
│   └── main.jsx              # React application entry point
├── index.html                # HTML entry point with metadata
├── package.json              # Project dependencies and scripts
└── vite.config.js            # Vite configuration
```

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) installed.

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aryankarmur/aryan-portfolio.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd aryan-portfolio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

7. **Run linter:**
   ```bash
   npm run lint
   ```

---

## Deployment

The portfolio is deployed on **Netlify** with automatic deployment on commits to the main branch.

- **Live URL:** [https://aryankarmur.netlify.app/](https://aryankarmur.netlify.app/)
- **Build Output:** `dist/`

---

## Skills Demonstrated

- **React Architecture:** Functional components, state hooks (`useState`), side-effects hook (`useEffect`), and prop passing.
- **Modern CSS Styling:** Design tokens using CSS custom variables, dark/light theme switching, glassmorphism UI, and responsive breakpoint design.
- **DOM & Browser APIs:** `IntersectionObserver` for active menu tracking and `localStorage` for persisting UI preferences.
- **Accessibility & UX:** Keyboard navigation styling, ARIA roles, and smooth scrolling offsets.

---

## Future Improvements

- Add high-resolution screenshots for each featured project.
- Implement project filter tabs based on technology stack.
- Include unit/integration tests for components.

---

## Author

### Aryan Karmur
**Frontend Developer | React.js & JavaScript**

- **Live Portfolio:** [aryankarmur.netlify.app](https://aryankarmur.netlify.app)
- **GitHub:** [@Aryankarmur](https://github.com/Aryankarmur)
- **LinkedIn:** [Aryan Karmur](https://www.linkedin.com/in/aryankaramur/)
- **Email:** [aryankaramur@gmail.com](mailto:aryankaramur@gmail.com)
