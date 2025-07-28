# Resources Dashboard

A modern dashboard application built with SvelteKit and TypeScript, showcasing key metrics and visualizations for educational resource management.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation & Setup

```bash
# Clone the repository
git clone https://github.com/matteobu/pack-dashboard.git
cd pack-dashboard

# Install dependencies and start development server
npm install && npm run dev
```

That's it! The application will be available at `http://localhost:5173`

## 📋 Features

### Core Dashboard Components

- **📊 Metrics Summary**: Active users, resource utilization, completion rates, and unique access statistics
- **📈 Interactive Charts**:
  - Circular progress indicators (horseshoe-style) for key metrics
  - Pie chart for resource categorization
  - Line chart for usage trends over time
- **📚 Resource Tables**: Most-used resources with trending indicators
- **👥 User Access Logs**: Comprehensive table with filtering and pagination
- **⬆️ Upload Modal**: Complete form for adding new resources

### Technical Features

- **🎯 TypeScript**: Fully typed application with comprehensive type definitions
- **🎨 Chart.js Integration**: Professional charts with smooth animations
- **📱 Responsive Design**: Mobile-friendly layout that adapts to all screen sizes
- **🔗 Nested Routing**: Clean URL structure with `/resources/metrics` and `/resources/all` views
- **🎛️ Interactive Filtering**: Real-time table filtering by provider and date range
- **📦 Component Architecture**: Modular, reusable components with proper separation of concerns


## 🎨 Design & User Experience

### Dashboard Views

- **Metrics View** (`/resources/metrics`): Primary dashboard with charts and key statistics
- **All Resources View** (`/resources/all`): Comprehensive table of all resources with search functionality
- **Navigation**: Tab-based navigation with visual indicators for active routes

### Interactive Elements

- **Upload Workflow**: Modal-based resource upload with form validation
- **Data Filtering**: Multi-criteria filtering for user access logs
- **Responsive Tables**: Adaptive layouts with proper truncation and scrolling
- **Hover Effects**: Interactive feedback throughout the interface

## 📊 Mock Data

The application includes comprehensive mock data:

- **20 Educational Resources** across 7 categories
- **15 Users** with realistic activity patterns
- **20 Content Access Records** with filtering capabilities
- **Time-series Data** for usage analytics
- **Trending Indicators** for resource popularity

## 🛠️ Technology Stack

- **Framework**: SvelteKit 2.0+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Chart.js with custom integrations
- **Icons**: Lucide Svelte
- **Development**: Vite, ESLint, Prettier

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run dev -- --open # Start dev server and open browser

# Building
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run check        # Type checking
npm run check:watch  # Type checking in watch mode
npm run lint         # ESLint
npm run format       # Prettier formatting
```

## 🔧 Development Notes

### Component Organization

- **Route-specific components** in `src/routes/[route]/components/`
- **Reusable components** in `src/lib/components/`
- **Type definitions** centralized in `src/lib/types.ts`
- **Mock data** organized by entity type in `src/lib/data/mock/`

### Key Implementation Details

- **Chart.js Integration**: Custom Svelte wrappers for Chart.js components
- **State Management**: Svelte stores for complex state, local state for simple interactions
- **Routing**: File-based routing with nested layouts for shared UI elements
- **TypeScript**: Strict type checking with comprehensive interface definitions

## 🎯 Challenge Requirements Met

✅ **Dashboard with key metrics and visualizations**  
✅ **Interactive charts** (pie, line, circular progress)  
✅ **Resource and user access tables**  
✅ **TypeScript implementation**  
✅ **SvelteKit framework**  
✅ **Chart.js integration**  
✅ **Mock data implementation**  
✅ **Responsive design**  
✅ **1-2 command setup**

### Bonus Features Implemented

- Advanced routing with nested views
- Real-time filtering and search
- Professional upload workflow
- Smooth animations and transitions
- Mobile-first responsive design
- Comprehensive TypeScript coverage

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

This is a technical challenge project. For production use, consider:

- Adding proper authentication
- Implementing real API endpoints
- Adding comprehensive testing
- Setting up CI/CD pipelines
- Adding error boundaries and loading states

---

Built with ❤️ using SvelteKit and TypeScript
