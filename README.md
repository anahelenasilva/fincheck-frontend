# fincheck

A modern and intuitive personal finance management application built with React and TypeScript. The fincheck app helps users track their bank accounts, transactions, and financial activities with a clean and responsive interface.

## Features

- **User Authentication**: Secure login and registration system
- **Dashboard Overview**: Comprehensive view of financial data
- **Account Management**: Track multiple bank accounts (Checking, Investment, Cash)
- **Transaction Tracking**: Monitor income and expenses with categorization
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Updates**: Live data synchronization with backend services
- **Category Icons**: Visual categorization for different transaction types

## Technologies Used

### Core Technologies
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Headless UI** - Unstyled, accessible UI components
- **Radix UI** - Low-level UI primitives
- **Swiper** - Modern slider/carousel component

### State Management & Data Fetching
- **TanStack Query (React Query)** - Powerful data synchronization
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation
- **React Context** - Authentication state management

### Navigation & Routing
- **React Router DOM** - Client-side routing
- **Protected Routes** - Authentication-based route guards

### HTTP & API
- **Axios** - Promise-based HTTP client
- **RESTful API Integration** - Structured backend communication

### Development Tools
- **ESLint** - Code linting and quality
- **TypeScript ESLint** - TypeScript-specific linting rules
- **React Hot Toast** - Elegant notifications
- **PostCSS & Autoprefixer** - CSS processing

## Project Structure

```
src/
├── app/                          # Core application logic
│   ├── config/                   # Application configuration
│   │   ├── constants.ts          # Global constants
│   │   └── localStorageKeys.ts   # Local storage key definitions
│   ├── contexts/                 # React contexts
│   │   └── AuthContext.tsx       # Authentication context
│   ├── hooks/                    # Custom React hooks
│   │   ├── useAuth.ts            # Authentication hook
│   │   └── useWindowWidth.ts     # Responsive design hook
│   ├── services/                 # API service layer
│   │   ├── httpClient.ts         # Axios configuration
│   │   ├── authService/          # Authentication APIs
│   │   └── usersService/         # User management APIs
│   └── shared/                   # Shared utilities
│       ├── sleep.ts              # Utility functions
│       ├── number/               # Number formatting utilities
│       └── strings/              # String manipulation utilities
├── Router/                       # Application routing
│   ├── index.tsx                 # Main router configuration
│   └── AuthGuard.tsx             # Route protection component
├── view/                         # UI components and pages
│   ├── components/               # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Spinner.tsx
│   │   ├── UserMenu.tsx
│   │   └── icons/                # Icon components
│   ├── layouts/                  # Page layouts
│   │   └── AuthLayout.tsx
│   └── pages/                    # Application pages
│       ├── Dashboard/            # Main dashboard
│       ├── Login/                # Authentication pages
│       └── SignUp/
└── assets/                       # Static assets
```

## Architecture Patterns

### Component Organization
- **Atomic Design**: Components organized from simple to complex
- **Feature-based Structure**: Related components grouped by functionality
- **Separation of Concerns**: Business logic separated from UI components

### State Management
- **Context API**: Global authentication state
- **React Query**: Server state management and caching
- **Hook-based Logic**: Custom hooks for component logic

### API Integration
- **Service Layer**: Centralized API communication
- **Type Safety**: Full TypeScript integration for API responses
- **Error Handling**: Consistent error management across the application

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anahelenasilva/fincheck-frontend
cd fincheck-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Features Implementation

### Authentication Flow
- Protected routes with `AuthGuard` component
- JWT token management
- Persistent authentication state

### Dashboard
- Account overview with interactive cards
- Transaction list with filtering options
- Responsive slider navigation for mobile

### Transaction Management
- Categorized income and expense tracking
- Visual icons for different categories
- Real-time balance calculations

### Bank Account Types
- Support for multiple account types (Checking, Investment, Cash)
- Visual indicators and icons for each type
- Account-specific transaction filtering

## Design System

- **Color Palette**: Teal-based primary colors
- **Typography**: Consistent font sizing and weights
- **Spacing**: Tailwind CSS spacing scale
- **Components**: Reusable design system components
- **Icons**: Custom SVG icons for financial categories

## Configuration Files

- `vite.config.ts` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS customization
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules and settings

## Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices
- Different screen orientations

## License

This project is part of a learning course and is intended for educational purposes.

---

Built with ❤️ using modern React and TypeScript
