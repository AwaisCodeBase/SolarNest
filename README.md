# SolarNest 🌞

A modern, multilingual web application for SolarNest - a leading solar energy solutions provider. This full-stack project features a responsive frontend built with React and a Node.js backend for handling contact form submissions.

🌐 **Live Website**: [blackemerald.net](https://blackemerald.net)

## 📋 Table of Contents

- [🌐 Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🌐 Live Demo

The application is live and accessible at: **[blackemerald.net](https://blackemerald.net)**

Visit the live website to explore all features including:
- Multilingual interface (English/Arabic)
- Interactive project gallery
- Contact form functionality
- Team and services showcase
- Responsive design across all devices

## ✨ Features

- 🌐 **Multilingual Support**: Full English and Arabic language support with seamless language switching
- 📱 **Responsive Design**: Fully responsive design that works on all devices
- 🎨 **Modern UI/UX**: Beautiful, professional interface with smooth animations
- 🗺️ **Interactive Maps**: Integrated Leaflet maps for location services
- 🎭 **3D Graphics**: Spline-powered 3D visualizations for enhanced user experience
- 📧 **Contact Form**: Functional contact form with email notifications
- 🏗️ **Project Showcase**: Dynamic project gallery and portfolio
- 👥 **Team Section**: Team member profiles and information
- 💼 **Services Display**: Comprehensive services catalog
- 🏢 **Client Showcase**: Client testimonials and logo gallery

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern UI library
- **Vite 6.3.5** - Fast build tool and dev server
- **React Router DOM 7.6.0** - Client-side routing
- **Leaflet & React Leaflet** - Interactive maps
- **Spline Tool** - 3D graphics integration
- **React Fast Marquee** - Smooth scrolling animations
- **CSS Modules** - Scoped styling

### Backend
- **Node.js** - JavaScript runtime
- **Express 4.18.2** - Web framework
- **Nodemailer 6.9.7** - Email service
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
SolarNest/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── AboutBanner/
│   │   │   ├── Contact/
│   │   │   ├── Footer/
│   │   │   ├── Hero/
│   │   │   ├── Navbar/
│   │   │   ├── Projects/
│   │   │   ├── Services/
│   │   │   └── ...
│   │   ├── context/         # React context (Language)
│   │   ├── pages/           # Page components
│   │   ├── translations/    # Language files (en, ar)
│   │   └── App.jsx          # Main App component
│   ├── public/              # Static assets
│   └── package.json
│
├── backend/                 # Node.js backend application
│   ├── src/
│   │   ├── config/          # Configuration files
│   │   ├── controllers/     # Route controllers
│   │   ├── routes/          # API routes
│   │   └── server.js        # Express server
│   └── package.json
│
└── dist/                    # Production build files
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (v8 or higher) or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SolarNest
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

### Configuration

1. **Backend Environment Variables**

   Create a `.env` file in the `backend/` directory:
   ```env
   PORT=8000
   NODE_ENV=development
   
   # Email Configuration (Gmail)
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ADMIN_EMAIL=admin@solarnest.com
   ```

   > **Note**: For Gmail, you'll need to generate an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password.

2. **Frontend Configuration**

   Update the backend API URL in your frontend if needed (check `frontend/src/components/Contact/Contact.jsx` or similar).

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev    # Development mode with nodemon
   # or
   npm start      # Production mode
   ```
   The backend will run on `http://localhost:8000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

3. **Build for Production**
   ```bash
   cd frontend
   npm run build
   ```
   The production build will be in the `dist/` directory.

## 📡 API Documentation

### Contact Form API

**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'm interested in solar solutions",
  "interests": ["residential", "commercial"]
}
```

**Success Response** (200):
```json
{
  "status": "success",
  "message": "Contact form submitted successfully"
}
```

**Error Response** (400/500):
```json
{
  "status": "error",
  "message": "Error message here"
}
```

### Health Check

**Endpoint**: `GET /health`

**Response** (200):
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## 🚢 Deployment

### Frontend Deployment

The frontend can be deployed to various platforms:

1. **Vercel**
   ```bash
   cd frontend
   npm run build
   vercel deploy
   ```

2. **Netlify**
   - Connect your repository
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **GitHub Pages**
   ```bash
   cd frontend
   npm run deploy
   ```

### Backend Deployment

The backend can be deployed to:

1. **Vercel** (configured with `vercel.json`)
2. **Heroku**
3. **AWS EC2**
4. **DigitalOcean**
5. **Railway**

Ensure environment variables are set in your hosting platform's configuration.

## 🌍 Language Support

The application supports two languages:
- **English** (default)
- **Arabic** (RTL support)

Language files are located in `frontend/src/translations/`:
- `en.jsx` - English translations
- `ar.jsx` - Arabic translations

To add a new language, create a new translation file and update the `LanguageContext.jsx`.

## 🎨 Customization

### Adding New Components

1. Create a new component in `frontend/src/components/YourComponent/`
2. Create corresponding CSS module file
3. Import and use in `App.jsx` or desired page

### Modifying Styles

- Component-specific styles: `*.module.css` files
- Global styles: `frontend/src/index.css` and `App.css`

### Updating Content

- Text content: Update translation files in `frontend/src/translations/`
- Images: Add to `frontend/public/assets/`
- Projects/Team: Update respective component files

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Scripts

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 🐛 Troubleshooting

### Common Issues

1. **Email not sending**
   - Verify Gmail App Password is correct
   - Check SMTP configuration in `backend/src/config/config.js`
   - Ensure CORS is properly configured

2. **Frontend not connecting to backend**
   - Verify backend is running on port 8000
   - Check CORS settings in `backend/src/server.js`
   - Update API URL in frontend components

3. **Build errors**
   - Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
   - Check Node.js version compatibility

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 👥 Team

SolarNest Development Team

## 📞 Contact

For inquiries and support, please use the contact form on the website or reach out directly.

---

**Built with ❤️ for a sustainable future** 🌱
