# Zerticraft - Project Guide

## Overview
Zerticraft is a React-based certificate generator application that allows users to create, customize, and distribute certificates. The application features a drag-and-drop interface for positioning certificate elements and supports bulk email distribution via custom API endpoints.

## Technology Stack
- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3 with PostCSS
- **Icons**: Lucide React
- **PDF Generation**: jsPDF
- **Package Manager**: pnpm

## Project Structure
```
zerticraft/
├── public/
│   ├── vite.svg
│   └── default-templates/
│       ├── community/
│       ├── elegant-blue/
│       ├── elegant-green/
│       ├── gold-and-brown/
│       └── honey/
├── src/
│   ├── assets/
│   ├── utils/
│   │   └── constants.js
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
- Typography studio with 110+ Google Fonts selection
- Overlay asset management (images/logos)
- Default template gallery with multiple categories
- Custom template upload functionality
- Text asset management with dynamic styling options

### 2. Participant Management
- Manual entry of participant names and emails
- CSV import functionality
- Individual record navigation
- Participant list management

### 3. Bulk Distribution
- Custom API endpoint configuration for email sending
- Bulk PDF generation
- Progress tracking
- Single certificate export/email functionality
- Email templating with variable substitution ({name}, {email}, {event})

### 4. Design Elements
- Dynamic participant name positioning
- Multiple text assets with individual styling
- Image overlay assets with resize functionality
- Font picker with search capability
- Color pickers and typography controls

## Code Architecture

### State Management
The application uses React hooks for state management:
- `useState` for component state
- `useRef` for DOM references
- `useEffect` for side effects
- `useCallback` for memoized callbacks

### Key Components
- **App.jsx**: Main application component with dual-tab interface (Design/Email)
- **constants.js**: Contains DEFAULT_TEMPLATES configuration
- **index.css**: Tailwind CSS directives and global styles
- **main.jsx**: Entry point that renders the App component

### Styling Approach
- Tailwind CSS utility-first methodology
- Responsive design with mobile-first approach
- Consistent color palette using indigo/purple for design tab and emerald/teal for email tab
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
- Uses Tailwind CSS v3
- Includes all necessary files for class detection

### PostCSS
- Uses standard tailwindcss plugin for Tailwind 3
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
- Implemented with mouse event handlers (mousedown, mousemove, mouseup)
- Tracks dragging and resizing states separately
- Calculates positions as percentages for responsiveness
- Separate handling for text elements and image assets
- Visual indicators during drag operations

### PDF Generation
- Uses jsPDF library for PDF creation
- Manual canvas rendering approach for high-quality output
- Renders at 2000px width for high-resolution output
- Maintains aspect ratio based on original template dimensions
- Generates individual PDFs for each participant
- Downloads PDFs with filename containing event name, participant name, and email

### Email Distribution
- Configurable API endpoint for email sending
- Supports custom headers and authentication
- Template variables for personalization ({name}, {email}, {event})
- Bulk email functionality with progress tracking
- Single email functionality for testing

### Typography System
- 110+ Google Fonts integration with dynamic loading
- Font search and filtering capability
- Real-time font preview in the picker
- Comprehensive typography controls (size, color, alignment)

## Default Templates
- Multiple template categories (Community, Elegant Blue/Green, Gold and Brown, Honey)
- Predefined template gallery with thumbnails
- Local storage of template selection

## Dual-Tab Interface
- Design tab for certificate creation and customization
- Email tab for API configuration and bulk distribution
- Tab state persistence and visual indicators

## Data Persistence
- Email API configuration stored in localStorage with versioning
- Template selection and design settings persistence

## Error Handling
- Comprehensive error messaging system
- Validation for required fields and inputs
- Network error handling for API calls

## Common Tailwind Classes Used
- Flexbox: `flex`, `flex-col`, `items-center`, `justify-center`
- Spacing: `p-*`, `m-*`, `gap-*`, `space-y-*`
- Sizing: `w-*`, `h-*`, `max-w-*`, `aspect-ratio-*`
- Typography: `text-*`, `font-*`, `leading-*`
- Colors: `bg-*`, `text-*`, `border-*` (with indigo/purple for design, emerald/teal for email)
- Borders: `rounded-*`, `border-*`, `shadow-*`
- Layout: `grid`, `grid-cols-*`, `col-span-*`
- States: `hover:*`, `focus:*`, `disabled:*`, `active:*`
- Responsive: `md:*`, `lg:*` prefixes

## Troubleshooting

### Common Issues
- Ensure all dependencies are installed with `pnpm install`
- Clear Vite cache if changes aren't appearing: `rm -rf node_modules/.vite`
- Check browser console for runtime errors
- Verify CORS settings when using external API endpoints
- Ensure Google Fonts are accessible in restricted networks

### Performance Tips
- The app dynamically loads Google Fonts in batches to improve performance
- Canvas rendering is optimized for high-resolution output
- Image assets are loaded efficiently for preview
- Consider reducing the number of elements on complex certificate designs