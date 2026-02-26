<div align="center">
  
  # 🍔 Food Delivery Landing Page (Swiggy UI Clone)
  
  **A frontend UI clone focusing on dynamic data rendering and React component architecture.**

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](#)
  [![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](#)

  [**View Live Demo**](https://food-delivery-landing-page-neon.vercel.app/) 

</div>

---

## 📸 Project Sneak Peek

> **Note:** *Insert a desktop screenshot of your landing page here. Example: `![Desktop View](./public/screenshot.png)`*

---

## 🚀 About The Project

This project is a React-based frontend clone of a popular food delivery application. The primary goal of this build was to practice dynamic UI rendering, component reusability, and handling asynchronous data in React, without relying on hardcoded HTML elements.

*(Note: This application is currently optimized for desktop viewing.)*

### ✨ Technical Implementation

* **Mock API Integration:** Instead of hardcoding data directly into components, the application data (restaurants, categories) is stored in a local `.json` file within the `public` directory.
* **Asynchronous Data Fetching:** Utilized the native `fetch()` API inside a `useEffect` hook to retrieve the mock data, effectively simulating the behavior and latency of a real network request.
* **Dynamic Rendering:** Leveraged JavaScript's `.map()` function to iterate over the fetched data arrays, dynamically generating reusable React components like Service Cards and Food Categories.
* **Component Architecture:** The UI is modular, keeping the codebase clean and maintainable.

---

## 🛠️ Getting Started Locally

### Prerequisites
* [Node.js](https://nodejs.org/) installed
* npm or yarn
