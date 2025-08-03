# Multi-Theme Switcher App

A React (Next.js + TypeScript) web application that allows users to switch between three distinct themes. Each theme changes the app’s colors, fonts, layout, and structure. The selected theme persists across page reloads.

---

## 🚀 Features

- **Three Unique Themes:**  
  - **Theme 1:** Minimalist, light background, sans-serif font  
  - **Theme 2:** Dark mode, sidebar layout, bold serif font  
  - **Theme 3:** Colorful, card-based grid, playful Google font (e.g., Pacifico)
- **Theme Switcher:** Dropdown in the header to change themes
- **Theme Persistence:** Remembers your choice using localStorage
- **Responsive Design:** Works on desktop and mobile
- **API Integration:** Fetches product data from [Fake Store API](https://fakestoreapi.com/products)
- **Multiple Pages:** Home, About, Contact (using React Router or Next.js pages)
- **Subtle Animations:** Smooth transitions when switching themes
- **TypeScript:** Type-safe codebase
- **No Large UI Libraries:** Built with Tailwind CSS (or CSS Modules/Styled-components)

---

## 🏗️ Project Structure

```
multi-theme-switcher/
├── src/
│   ├── components/        # Reusable UI components (Layouts, Header, ThemeSwitcher, ProductCard)
│   ├── contexts/          # ThemeContext for theme management
│   ├── lib/               # Types, constants, and utility functions
│   ├── app/               # App pages (Home, About, Contact) [Next.js]
│   ├──  styles/           # Global and theme-specific styles
│   └── ...                # layout and page .
├── public/                # Static assets (images, favicon, etc.)
├── next.config.ts         # Next.js configuration (image domains, etc.)
├── tailwind.config.js     # Tailwind CSS configuration
├── package.json
└── README.md
```

---

## 🧑‍💻 Getting Started

### 1. **Clone the repository**
```bash
git clone https://github.com/chittaranjan27/K.Chitta-Ranjan-Dora-React-Frontend-Developer-.git
cd K.Chitta-Ranjan-Dora-React-Frontend-Developer
```

### 2. **Install dependencies**
```bash
npm install
# or
yarn install
```

### 3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 Usage

- Use the **dropdown in the header** to switch between themes.
- The app will remember your selected theme even after you refresh or close the browser.
- Explore the Home, About, and Contact pages to see the theme applied everywhere.
- Product cards are loaded from the Fake Store API.

---

## 🛠️ Customization

- **Add/Edit Themes:**  
  Modify theme classes in your CSS/Tailwind config and update the ThemeContext if you want more themes.
- **Change Fonts:**  
  Update the font imports in your global CSS or Tailwind config.
- **API Source:**  
  Change the API endpoint in the relevant component if you want to use a different data source.

---

## 📁 Important Files

- `src/contexts/ThemeContext.tsx` – Theme context logic and persistence
- `src/components/Header.tsx` – Header with theme switcher dropdown
- `src/app/` – Main pages (Home, About, Contact)
- `src/components/Card.tsx` – Product card component
- `next.config.ts` – Image domain configuration for Next.js

---

## 🧑‍🎓 For Beginners

- **Context API** is used for global theme management.
- **localStorage** is used to remember your theme choice.
- **Tailwind CSS** (or CSS Modules/Styled-components) is used for styling and responsive design.
- **TypeScript** helps catch errors early and makes the code easier to understand.

---

## 📦 Dependencies

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) (or your chosen styling solution)

---

## 📄 License

This project is for educational/demo purposes.

Live:- https://k-chitta-ranjan-dora-react-frontend.vercel.app/

---

