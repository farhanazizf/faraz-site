# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my professional experience, projects, and skills as a software engineer and athlete.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Components**: Image carousels, contact forms, and navigation
- **Professional Sections**:
  - Hero section with quick contact links
  - About section highlighting engineer-athlete identity
  - Experience timeline with detailed work history
  - Portfolio grid with project showcases
  - Education background
  - Contact form with social media links

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build & Deployment

### Local Build
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect the Vite configuration
4. Deploy with one click!

### Alternative Deployment Options

- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Firebase Hosting**: Use Firebase CLI

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with contact info
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Work experience timeline
│   ├── Portfolio.tsx   # Projects showcase
│   ├── Education.tsx   # Education background
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
├── data/
│   └── resume.ts       # Portfolio data and content
├── types/
│   └── index.ts        # TypeScript type definitions
└── assets/             # Static assets
```

## 🎨 Customization

### Update Personal Information
Edit `src/data/resume.ts` to customize:
- Personal details and contact information
- Work experience and projects
- Education background
- Skills and technologies

### Modify Styling
- Update Tailwind classes in components
- Customize colors in `tailwind.config.js`
- Add custom CSS in component files

### Add New Sections
1. Create new component in `src/components/`
2. Import and add to `src/App.tsx`
3. Update data structure in `src/data/resume.ts`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]
- **Website**: [Your Website]

---

**Built with ❤️ by [Your Name]** - Engineer & Athlete
