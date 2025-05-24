# Simca Cleaning Company Website (v1)

A professional and modern website for Simca Cleaning Company, built to showcase their services, locations, gallery, blog, and provide an easy way for clients to get in touch. This project emphasizes a clean visual design, smooth animations, and a great user experience across all devices.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About the Project

This project is the initial version of the official website for Simca Cleaning Company. It's designed to provide potential and existing clients with comprehensive information about the company, its services, operational areas, and portfolio. The website is built with a focus on modern web design principles, including responsive layouts, engaging animations, and a user-friendly interface.

## Features

The website includes the following major sections and features:

*   **Hero Sections:** Engaging and visually appealing hero sections on key pages (Home, About, Services, Locations, Gallery, Blog, Contact) with animated backgrounds, floating elements, and prominent calls to action.
*   **About Page:**
    *   **Our Growth Story:** A timeline-style section detailing the company's journey with enhanced visual design and animations.
    *   **Our National Footprint:** Highlights the company's presence across Kenya with improved content, messaging, visual design, and an interactive map overview.
    *   **A Message from Our CEO:** A personalized message from the CEO with refined content, messaging, and visual presentation, including an improved image layout.
*   **Services Page:**
    *   **Hero Section:** Showcasing professional cleaning services with consistent styling and quick stats.
    *   **Services Overview:** A dedicated section highlighting the range of cleaning solutions offered, featuring a mobile-only carousel for easy browsing on smaller devices.
    *   **Individual Service Details:** Detailed sections for each service type with enhanced content, messaging, and visual design, including layout and animation improvements.
*   **Locations Page:**
    *   **Hero Section:** Presenting the company's service locations with consistent styling.
    *   **Kenya Map Overview:** An interactive map displaying markers for service locations across Kenya, including Kisumu and Nakuru. Features a mobile-only carousel for browsing location cards.
    *   **Individual Locations:** Detailed sections for each specific location with improved content, messaging, and refined visual design for cards and information display.
*   **Gallery Page:**
    *   **Hero Section:** Showcasing the work gallery with consistent styling and quick stats.
    *   **Gallery Section:** Displays a portfolio of completed projects organized by categories. Features category tabs with icons and a lightbox for viewing full-size images.
*   **Blog Page:**
    *   **Hero Section:** Introduction to the blog with quick stats about articles.
    *   **Featured Post:** Highlights a prominent blog article with enhanced visual design and animations.
    *   **Blog Posts Grid:** Displays blog articles in a responsive grid layout with filtering by categories. Features relevant icons for categories and a mobile-only carousel for browsing articles.
*   **Contact Page:**
    *   **Hero Section:** Encouraging users to get in touch with consistent styling and quick stats.
    *   **Contact Form and Info Section:** A section with a functional contact form and quick contact details (phone, email, hours), visually enhanced with improved spacing and card design. Features a custom select dropdown for service selection.
    *   **Map Section:** An interactive map displaying all service locations, using the same map component as the locations page. Includes a mobile-only carousel for browsing location cards with full navigation controls and a page counter.
*   **Responsive Design:** The website is fully responsive and optimized for display on desktops, tablets, and mobile devices.
*   **Animations:** Utilizes Framer Motion for smooth scroll-triggered animations, hover effects, transitions, and other micro-interactions throughout the site.
*   **Dark Mode Support:** Includes styling for both light and dark modes.
*   **Accessibility:** Designed with accessibility considerations in mind, including ARIA labels and focus states.

## Technologies Used

*   **Next.js:** React framework for server-side rendering, static site generation, and routing.
*   **React:** JavaScript library for building user interfaces.
*   **TypeScript:** Typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS:** A utility-first CSS framework for rapid styling.
*   **Framer Motion:** A library for creating animations in React.
*   **Lucide React:** A collection of open-source icons for React projects.
*   **React Leaflet & Leaflet:** Libraries for integrating interactive maps (OpenStreetMap) into the React application.

## Getting Started

Follow these steps to get a local copy of the project up and running.

### Prerequisites

*   Node.js installed on your machine.
*   npm or yarn package manager.
*   Git installed.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/t-simwa/simca-cleaning-website-v1.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd simca-cleaning-website-v1
    ```
3.  Install dependencies using npm or yarn:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Project

To run the project in development mode:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The website will hot-reload as you make changes to the source code.

## Project Structure

```
simca-cleaning-website-v1/
├── app/                 # Next.js App Router directory
│   ├── api/             # API routes
│   ├── about/           # About page route
│   ├── blog/            # Blog page route
│   ├── contact/         # Contact page route
│   ├── gallery/         # Gallery page route
│   ├── locations/       # Locations page route
│   ├── services/        # Services page route
│   ├── globals.css      # Global CSS file (Tailwind directives)
│   ├── layout.tsx       # Root layout
│   ├── manifest.ts      # Web app manifest (optional)
│   └── page.tsx         # Home page route
├── components/          # Reusable React components
│   ├── ui/              # UI components (e.g., from Shadcn UI or custom)
│   ├── contact-form.tsx # Contact form component
│   ├── openstreet-map.tsx # Interactive map component
│   ├── home/            # Components specific to the home page (e.g., Services Overview, Contact Form)
│   └── ...              # Other components
├── public/              # Static assets (images, fonts, etc.)
│   ├── images/          # Images used in the project
│   └── ...
├── README.md            # This file
├── package.json         # Project dependencies and scripts
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── ...                  # Other configuration files (.gitignore, etc.)
```

## Deployment

You can deploy this Next.js application to various hosting platforms. Some popular options include:

*   **Vercel:** The recommended deployment platform for Next.js.
*   **Netlify:** Another excellent platform for deploying Jamstack applications.
*   **或其他Node.js兼容的托管服务。**

Simply connect your GitHub repository to the hosting platform of your choice, and it will typically handle the build and deployment process automatically.

## Contributing

Contributions are welcome! If you find a bug or have a suggestion for an improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file (if applicable, you might need to add one) for more details.

## Contact

*   **Your Name/Username:** [Your GitHub Username or Name]
*   **Project Link:** [https://github.com/t-simwa/simca-cleaning-website-v1](https://github.com/t-simwa/simca-cleaning-website-v1)

---

*(Note: Remember to replace bracketed placeholders like `[Your GitHub Username or Name]` and add a LICENSE file if desired.)* 