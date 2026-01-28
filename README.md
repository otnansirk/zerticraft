# Zerticraft - Certificate Generator

Zerticraft is a powerful, web-based certificate generator that allows users to create, customize, and distribute certificates with ease. The application features a drag-and-drop interface for positioning certificate elements and supports bulk email distribution via custom API endpoints.

## Features

- 🎨 **Drag-and-Drop Editor**: Intuitive interface for positioning and customizing certificate elements
- 📝 **Rich Typography**: 110+ Google Fonts with styling options (bold, italic, underline)
- 🖼️ **Template Management**: Upload custom certificate templates or use default templates
- 👥 **Participant Management**: Add participants manually or import from CSV
- 📧 **Email Distribution**: Configure custom API endpoints for bulk email distribution
- 📄 **PDF Generation**: High-quality PDF export for individual or bulk certificates
- 🔍 **Preview Mode**: Full-screen preview with zoom functionality
- 📊 **Email Status Tracking**: Monitor email delivery status and retry failed emails
- 🛡️ **Privacy Focused**: All data stored locally in browser, no server storage

## Technology Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3 with PostCSS
- **Icons**: Lucide React
- **PDF Generation**: jsPDF
- **Package Manager**: pnpm

## Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zerticraft
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and visit `http://localhost:5173`

### Environment Setup

The application doesn't require any environment variables for basic operation. For email distribution, you'll need to configure your own API endpoint.

### Code Standards

- Use functional components with React Hooks
- Follow the existing component structure and naming conventions
- Use Tailwind CSS utility classes for styling
- Maintain consistent color palette using primary color (#0cc0df)
- Write descriptive variable and function names
- Use JSDoc-style comments for complex functions

## API Integration

For email distribution, Zerticraft supports custom API endpoints. Your API must:

- Accept POST requests
- Support the following request body format:
```json
{
  "to": "recipient@example.com",
  "name": "John Doe",
  "event": "Webinar on Digital Marketing",
  "subject": "Certificate for {name} - {event}",
  "body": "Hi {name},\n\nPlease find your certificate for {event} attached.\n\nBest regards.",
  "fileName": "Webinar_on_Digital_Marketing__John_Doe__john.doe@example.com.pdf",
  "pdf": "base64_encoded_pdf_data_here..."
}
```

## Contributing

We welcome contributions! Please see our [Code of Conduct](CODE_OF_CONDUCT.md) and [Contributing Guidelines](CONTRIBUTING.md) for more details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.

## Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Icons from Lucide React
- PDF generation with jsPDF