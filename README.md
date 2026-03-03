# PayAttitude Dashboard 📊

A modern, responsive, and robust React dashboard application built using Vite, TypeScript, and Tailwind CSS. The dashboard is designed to visualize critical tokenization data, track recent transactions, map merchant activity, and provide a unified administrative interface using a clean compositional component architecture.

---

## ✨ Key Features

- **Comprehensive Overview:** At-a-glance statistics for Token requests, successful, failed, and removed tokens.
- **Interactive Data Visualization:** Tokenization vs. Detokenization performance charts and historical Entries over time line charts.
- **Merchant Management:** Detailed list of top merchants, their revenue streams, and associated emails.
- **Transaction Monitoring:** Searchable and paginated table detailing recent token transactions, statuses, and values.
- **Advanced Filtering:** Custom-built React portal Date Picker and predefined Quick Filters (Today, Last 7 days, etc.).

---

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) for strict type safety and better developer experience.
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) for utility-first responsive styling and flexible layout.
- **Icons:** [Lucide React](https://lucide.dev/) for clean, consistent SVG iconography.
- **Charts:** [Recharts](https://recharts.org/) for declarative, responsive, and fast rendering data visualizations.
- **Utility:** `clsx` and `tailwind-merge` for dynamic className resolutions.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- **npm** or **yarn** (npm is assumed in the commands below).

### Installation & Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **View the dashboard:** Open [http://localhost:5173](http://localhost:5173) in your default web browser.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This command compiles the TypeScript files and bundles the optimized application into the `dist` directory.

---

## 📂 Project Structure

A brief overview of the core application structure:

```text
src/
├── assets/         # Static assets (images, fonts, etc.)
├── components/     # Reusable UI primitives and dashboard sections
│   ├── BottomSheet/  # Portal-based overlay
│   ├── Button/       # Reusable button component
│   ├── Card/         # Compound compositional Card component
│   ├── DatePicker/   # Custom React DatePicker portal
│   ├── FilterTab/    # Controlled UI filter tabs
│   └── ...           # Other dashboard-specific components
├── data/           # Mock data used to hydrate the dashboard UI
├── hooks/          # Custom React hooks (useDashboard, useTransactions)
├── types/          # Global TypeScript interfaces and type definitions
├── utils/          # Helper utilities (e.g., class merging)
├── App.tsx         # Main application assembly and layout composition
└── main.tsx        # Application entry point
```

---

## 🏗️ Architecture & Tradeoffs

While conceptualizing and building this dashboard, deliberate architectural choices and tradeoffs were made to balance speed of development with codebase maintainability.

### 1. State Management

- **Approach:** Lifted state up to `App.tsx` and partitioned business logic into bespoke custom hooks (`useDashboard`, `useTransactions`). No global state management libraries (like Redux or Zustand) were introduced.
- **Tradeoff:** For a dashboard of this immediate scale, React context or standard prop drilling remains highly performant and keeps the bundle size lean. However, if the application scales to include complex global states like user permissions or multi-page filtering, a global store might become necessary to prevent excessive component re-renders and messy prop drilling.

### 2. Custom UI Primitives vs. UI Component Libraries

- **Approach:** Core layout primitives (Cards, Bottom Sheets, Buttons, Badges) were built entirely from scratch utilizing Tailwind CSS.
- **Tradeoff:** Building from scratch grants pixel-perfect control over the design, ensuring it matches the exact UI mockups without fighting a heavy external component library's default styles (e.g., MUI, Ant Design). The tradeoff is increased initial development time—writing custom logic for structures like the DatePicker and Portals takes longer, but yields a significantly lighter and bespoke application.

### 3. Data Flow & Mock Data Integration

- **Approach:** The application safely relies on static mock data definitions (`src/data/index.ts`).
- **Tradeoff:** This enables rapid UI layout, structuring, and component development without being blocked by API readiness. Transitioning this to a full-stack environment will require minor refactoring to accommodate asynchronous loading states, robust error boundaries, and integration of real API pagination.

---

## 🔮 Future Improvements (If given more time)

If given more runway to extend this application, here are the primary areas I would tackle next:

1. **Real API Integration & Data Fetching:**
   - Swap the static mock data for a robust data fetching library like **React Query** or **SWR**. This provides out-of-the-box caching mechanisms, background updates, deduplication, and elegant handling of complex loading and error states.

2. **Accessibility (a11y) Polish:**
   - While the semantic HTML structure is solid, a thorough audit utilizing VoiceOver/Screen readers is necessary. I would ensure full keyboard navigability—especially mapping complex interactive elements like the custom `DatePicker` and drop-downs. Implementing focus traps inside the Portals (like the `BottomSheet`) and comprehensive `aria-labels` are crucial steps for production-grade accessibility.

3. **Advanced Charting Interactivity:**
   - The current `Recharts` implementation is visually pleasing, but I'd enhance user interactivity by introducing advanced tooltips, brush functionality for granular zooming on the `EntriesChart`, and custom SVG patterns to elevate the data visualization strictly to executive standards.

4. **Themeing / Dark Mode Implementation:**
   - The design is currently optimized for a light theme. Leveraging Tailwind's native `dark:` modifier and CSS variables to engineer a seamless dark mode toggle would be an immediate UX enhancement highly requested in modern dashboards.

5. **Testing Suite:**
   - The application currently lacks automated tests. I would configure **Jest** and **React Testing Library** for rigorous unit testing of the complex logic residing in custom hooks (e.g., transaction filtering, pagination). Additionally, introducing **Playwright** or **Cypress** to test full end-to-end dashboard interactions would cement the application's reliability.
