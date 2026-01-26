# CertifyGen Pro - Project Guide

## Overview
CertifyGen Pro is a React-based certificate generator application that allows users to create, customize, and distribute certificates. The application features a drag-and-drop interface for positioning certificate elements and supports bulk email distribution via custom API endpoints.

## Technology Stack
- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.18 with PostCSS
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Project Structure
```
certipro/
├── public/
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── eslint.config.js
└── guide.md
```

## Application Features

### 1. Certificate Design
- Drag-and-drop interface for positioning elements
- Real-time preview of certificate templates
- Typography studio for font selection and styling
- Overlay asset management (images/logos)

### 2. Participant Management
- Manual entry of participant names and emails
- CSV import functionality
- Individual record navigation

### 3. Bulk Distribution
- Custom API endpoint configuration for email sending
- Bulk PDF generation
- Progress tracking

## Code Architecture

### State Management
The application uses React hooks for state management:
- `useState` for component state
- `useRef` for DOM references
- `useEffect` for side effects
- `useCallback` for memoized callbacks

### Key Components
- **App.jsx**: Main application component with dual-tab interface (Design/Email)
- **index.css**: Tailwind CSS directives and global styles
- **main.jsx**: Entry point that renders the App component

### Styling Approach
- Tailwind CSS utility-first methodology
- Responsive design with mobile-first approach
- Consistent color palette using indigo as primary color
- Gradient backgrounds and subtle shadows for depth

## Code Style Guidelines

### Naming Conventions
- **Components**: PascalCase (e.g., `App.jsx`)
- **Functions**: camelCase (e.g., `handleTemplateUpload`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `GOOGLE_FONTS`)
- **Variables**: camelCase (e.g., `eventName`)

### Component Structure
- Use functional components with hooks
- Organize state near the top of the component
- Group related functionality in logical sections
- Use descriptive variable and function names

### Styling Patterns
- Apply Tailwind CSS utility classes directly in JSX
- Use template literals for conditional styling
- Maintain consistent spacing and sizing scales
- Follow mobile-first responsive design principles

### JavaScript/React Best Practices
- Use destructuring for props and state
- Implement proper error handling
- Use memoization where appropriate
- Follow accessibility best practices
- Implement proper cleanup for effects

## Configuration Files

### Tailwind CSS
- Configured with content paths for automatic class purging
- Includes all necessary files for class detection

### PostCSS
- Uses `@tailwindcss/postcss` plugin for Tailwind 4.1.18
- Includes autoprefixer for cross-browser compatibility

### Vite
- Standard React plugin configuration
- Optimized for development and production builds

## Development Workflow

### Starting the Development Server
```bash
pnpm dev
```

### Building for Production
```bash
pnpm build
```

### Dependencies
- All dependencies managed via pnpm
- Development dependencies include build tools and linters
- Production dependencies include React and UI utilities

## Key Functionalities

### Drag and Drop
- Implemented with mouse event handlers
- Tracks dragging and resizing states separately
- Calculates positions as percentages for responsiveness

### PDF Generation
- Uses html2canvas and jsPDF libraries
- Generates certificates at high resolution (2000px wide)
- Downloads individual PDFs for each participant

### Email Distribution
- Configurable API endpoint for email sending
- Supports custom headers and authentication
- Template variables for personalization

## Common Tailwind Classes Used
- Flexbox: `flex`, `flex-col`, `items-center`, `justify-center`
- Spacing: `p-*`, `m-*`, `gap-*`, `space-y-*`
- Sizing: `w-*`, `h-*`, `max-w-*`, `aspect-ratio-*`
- Typography: `text-*`, `font-*`, `leading-*`
- Colors: `bg-*`, `text-*`, `border-*` (with indigo, slate, and green palettes)
- Borders: `rounded-*`, `border-*`, `shadow-*`
- Layout: `grid`, `grid-cols-*`, `col-span-*`
- States: `hover:*`, `focus:*`, `disabled:*`, `active:*`
- Responsive: `md:*`, `lg:*` prefixes

## Troubleshooting

### Common Issues
- Ensure all dependencies are installed with `pnpm install`
- Clear Vite cache if changes aren't appearing: `rm -rf node_modules/.vite`
- Check browser console for runtime errors

### Performance Tips
- Use React.memo for components that render frequently
- Implement proper key props for lists
- Optimize image assets for faster loading