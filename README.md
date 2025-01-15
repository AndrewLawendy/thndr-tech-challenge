# Thndr Tech Challenge - Nasdaq Stocks App

A web application that lists all stocks in the Nasdaq exchange. This project demonstrates the use of modern web development tools and best practices with React, TypeScript, and Vite.

---

## 📋 Features

### **Splash Screen**

- Displays the Nasdaq logo centered on the screen.
- Shows the developer's name at the bottom of the screen.

### **Explore Screen**

- Lists stocks with their ticker and full name from the Nasdaq exchange.
- Supports infinite scrolling to load more stocks dynamically.
- Allows searching for specific stocks via a backend search triggered while typing.
- Provides responsive and clean UI for better usability.

---

## 🚀 Getting Started

### Prerequisites

- Install [Node.js](https://nodejs.org/) version `22.11.0` (defined in `.nvmrc`).
- Install [Yarn](https://yarnpkg.com/) package manager.
- Obtain a Polygon.io API key by signing up at [Polygon.io](https://polygon.io/).

## Installation

### Clone the repository

```bash
  git clone https://github.com/AndrewLawendy/thndr-tech-challenge
  cd thndr-tech-challenge
```

### Create a `.env` file in the root directory and add your Polygon.io API key

```bash
VITE_POLY_API_KEY=your_api_key_here
```

### Install dependencies

```bash
yarn install
```

### Start the development server

```bash
yarn dev
```

## 🛠️ Technology Stack

### Core Dependencies

- **React (18.3.1):** For building the user interface.
- **React Query (3.39.3):** For managing server-state and API interactions.
- **Tailwind CSS (3.4.17):** Utility-first CSS framework for styling.
- **@polygon.io/client-js (7.3.2):** Official Polygon.io client for API integration.

### Dev Tools

- **Vite (6.0.5):** Build tool for fast development.
- **TypeScript (~5.6.2):** Adds type safety to JavaScript.
- **ESLint (9.17.0)** & **Prettier (3.4.2):** For consistent code quality and formatting.
- **Husky (9.1.7)** & **Lint-Staged (15.3.0):** For pre-commit checks.

### Testing Stack

- **Vitest (2.1.8):** Blazing fast unit testing framework.
- **@testing-library/react (16.1.0):** For testing React components.

---

## 📡 API Integration

### API Used

- **Polygon.io:**
  - Fetches stock data using the `GET /v3/reference/tickers` endpoint.

### Key Features

- **Backend Search:** Enables searching stocks dynamically while typing.
- **Pagination:** Infinite scrolling supported using the `cursor` parameter.
- **Rate Limiting Handling:** Handles API rate limits gracefully by retrying requests based on API-provided headers.

---

## 🧪 Testing

To run the test suite:

```bash
yarn test
```

### Pre-commit Hooks

This project uses **Husky** and **Lint-Staged** to ensure clean commits. Pre-commit hooks automatically run:

- **ESLint** for linting JavaScript/TypeScript files.
- **Prettier** for formatting all supported file types.

---

## 🌟 Features Under the Hood

### API Caching

- Uses **React Query** for efficient data-fetching and caching, minimizing redundant API calls.

### Responsive Design

- Built with **Tailwind CSS** to ensure usability across devices.

### Developer Productivity

- Configured with **ESLint**, **Prettier**, and **Husky** for clean, maintainable code.

### Testing

- Unit tests ensure critical features like searching, pagination, and error handling work as expected.

---

## 🖥️ Deployment

The app is deployed on **Netlify**.

### Deployed App

[Visit Live Demo](https://thndr-nasdaq-stock-explorer.netlify.app/)

### Build the App

To build the app for production:

```bash
yarn build
```

### To preview the build

```bash
yarn preview
```
