# AI Future Summit 2026 - Event Website

A modern, professional, and fully responsive event website for an AI-focused academic event hosted by Darshan University, targeting BCA students.

## 🎯 Project Overview

This website is designed to build trust, excitement, and subtly position MCA at Darshan University as the natural next step for BCA students in the AI era. The design follows modern web standards with a clean, professional aesthetic inspired by Vercel, Linear, and Figma.

## ✨ Features

### Design & UX
- **Modern, Clean Design**: Professional academic tone with subtle AI-themed gradients
- **Fully Responsive**: Mobile-first approach, works seamlessly on all devices
- **Smooth Animations**: Fade-in effects, hover transitions, and micro-interactions
- **Accessible**: Proper semantic HTML, ARIA labels, and readable contrast ratios
- **Sticky Header**: Easy navigation with mobile hamburger menu

### Sections

1. **Hero Section**
   - Compelling headline with gradient text effects
   - Event badge with live indicator
   - Dual CTA buttons (View Sessions / Register Free)
   - Animated background with gradient blobs
   - Event statistics cards

2. **Event Highlights**
   - 4 feature cards with icons
   - AI Without Fear, Hands-On Demos, Career Guidance, DU Ecosystem
   - Hover effects and smooth transitions

3. **Sessions Section**
   - Tabbed filtering (All, Beginner, Intermediate, Advanced, Career)
   - 8 detailed session cards with time, speaker, and descriptions
   - Level badges and speaker avatars

4. **Experts Section**
   - 6 speaker profiles with expertise areas
   - LinkedIn integration
   - Professional card layout with gradient backgrounds

5. **Venue & Schedule**
   - Split layout with venue details and timeline
   - Interactive map placeholder
   - Timeline-style schedule with 7 events
   - Important information callout
   - **QR Code for Quick Registration** with step-by-step instructions
   - Scannable QR code linking directly to registration form

6. **Registration Section**
   - Comprehensive form with validation
   - Fields: Name, College, Degree, Year, Email, Mobile, Interest
   - Real-time error handling
   - Loading states and success message
   - Radio buttons for area of interest

7. **About Darshan University**
   - 4 feature cards highlighting university strengths
   - Statistics showcase (15+ years, 10,000+ alumni, etc.)
   - Subtle MCA program CTA
   - Dark gradient background for visual contrast

8. **Footer**
   - University contact information
   - Quick links and program links
   - Social media icons (LinkedIn, Twitter, Instagram)
   - Copyright notice

9. **Floating QR Button** (NEW!)
   - Appears after scrolling 500px down the page
   - Fixed position for easy access from anywhere
   - Opens modal with registration QR code
   - Mobile-optimized for quick scanning

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Icons**: Heroicons (SVG)
- **QR Code**: qrcode library for production-quality QR codes

## 📁 Project Structure

```
BCA-Web/
├── app/
│   ├── globals.css          # Global styles with animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page assembling all sections
├── components/
│   ├── Header.tsx           # Sticky header with navigation
│   ├── Footer.tsx           # Footer with contact info
│   ├── QRCode.tsx           # QR code generator component
│   ├── FloatingQRButton.tsx # Floating QR button with modal
│   └── sections/
│       ├── HeroSection.tsx
│       ├── HighlightsSection.tsx
│       ├── SessionsSection.tsx
│       ├── ExpertsSection.tsx
│       ├── VenueSection.tsx
│       ├── RegistrationSection.tsx
│       └── AboutSection.tsx
├── public/                  # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd H:\Projects\BCA-Web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design Principles

1. **Professional Academic Tone**: No flashy colors or cluttered design
2. **Trust Building**: Real content, credible experts, clear information
3. **Subtle Marketing**: MCA positioning without aggressive sales tactics
4. **Modern Aesthetics**: Gradients, smooth animations, clean typography
5. **User-Centric**: Easy navigation, clear CTAs, accessible forms

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Components

### Header Component
- Sticky positioning with backdrop blur
- Responsive navigation with mobile menu
- Gradient CTA button
- Smooth scroll to sections

### Registration Form
- Client-side validation
- Error handling with user-friendly messages
- Email and mobile number format validation
- Loading states during submission
- Success message with confirmation

### Session Cards
- Filterable by difficulty level
- Speaker information with avatars
- Time and duration display
- Detailed descriptions

## 🔧 Customization

### Colors
The color scheme uses purple/indigo gradients. To customize, edit `tailwind.config.ts`:

```typescript
colors: {
  primary: '#667eea',    // Purple
  secondary: '#764ba2',  // Indigo
}
```

### Content
All content is in the respective section components. No lorem ipsum - all real, production-ready content.

### Animations
Custom animations are defined in `globals.css`:
- `fadeIn`: Fade in with upward motion
- `slideInLeft`: Slide from left
- `slideInRight`: Slide from right

## 📊 SEO Optimization

- Proper meta tags in `layout.tsx`
- Semantic HTML structure
- Descriptive headings (H1, H2, H3)
- Alt text for images
- Open Graph tags for social sharing

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is created for Darshan University's AI Future Summit 2026.

## 👥 Contact

For questions or support regarding this website:
- Email: events@darshan.ac.in
- Phone: +91 2822 255 700

---

**Built with ❤️ for BCA students exploring the AI-driven future**
