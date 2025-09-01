This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Intern-Project

Firebase ==> Firebase vaneko aauta cloud based platform ho jasley ready to use backend service provides garcha, like authentication, real-time database, storage, hosting, cloud functions, and analytics.

✅ Key Features

Firebase Authentication → Sign-in using Email/Password, Google, Facebook, etc.

Cloud Firestore & Realtime Database → Store and sync data across clients in real time.

Firebase Hosting → Deploy web apps quickly with SSL and CDN.

Cloud Storage → Store user-generated files like images and videos.

Firebase Cloud Messaging (FCM) → Send push notifications.

Crashlytics & Analytics → Track performance and user behavior.

.

📅 Day-by-Day React Course (Single Project: ShopEasy)
Week 1 → Setup + Core React

Goal: Understand JSX, components, props, state.

Day 1 → Setup project (Vite/CRA) + clean boilerplate → Build simple <App />

Day 2 → Create Header + Footer components → add site name/logo

Day 3 → Create ProductCard component (static product info) → learn props

Day 4 → Add ProductList component → render multiple ProductCard with .map()

Day 5 → Learn useState → create a “like product” button on ProductCard

Day 6 → Learn event handling → add “Add to Cart” button (just console.log for now)

Day 7 → Weekly Review → Clean project, refactor, push code to GitHub

Week 2 → Lists & Forms

Goal: Learn forms, inputs, search filtering.

Day 8 → Add SearchBar component → learn controlled input

Day 9 → Implement product filtering (search by name)

Day 10 → Create LoginForm UI → learn form state management

Day 11 → Create SignupForm UI → handle multiple inputs (email, password)

Day 12 → Add form validation (basic: empty fields check)

Day 13 → Store user login state in useState

Day 14 → Weekly Review → Mini demo: login → see “Welcome User”

Week 3 → Hooks & Context

Goal: Work with APIs, context, advanced hooks.

Day 15 → Install Axios → fetch products from dummyjson API

Day 16 → Handle loading & error states with useEffect

Day 17 → Create ThemeContext → Dark/Light mode toggle

Day 18 → Create CartContext → manage cart globally

Day 19 → Add product to cart using Context → display cart count in Navbar

Day 20 → Remove product from cart → update total count dynamically

Day 21 → Weekly Review → Now you have working Cart + Theme

Week 4 → Routing

Goal: Multi-page navigation with React Router.

Day 22 → Install React Router → Setup Home, Products, Cart, Login pages

Day 23 → Add Navbar links with <Link>

Day 24 → Create ProductDetails page → learn dynamic routes (useParams)

Day 25 → Show product details when user clicks ProductCard

Day 26 → Add NotFound Page (404)

Day 27 → Add protected routes (redirect to login if not authenticated)

Day 28 → Weekly Review → Full navigation working

Week 5 → State Management & Features

Goal: Strengthen app with cart, auth, redux (optional).

Day 29 → Improve Cart Page → show cart items with quantity

Day 30 → Add increase/decrease quantity in cart

Day 31 → Add total price calculation

Day 32 → Implement fake login/logout system with Context

Day 33 → Save user/cart in localStorage (persist state)

Day 34 → (Optional) Replace Context with Redux Toolkit for cart

Day 35 → Weekly Review → Cart + Auth fully working

Week 6 → Final Touch + Deployment

Goal: Complete app & deploy it online.

Day 36 → Add Checkout page (form with address, payment info)

Day 37 → Add “Place Order” success page

Day 38 → Style entire app (Tailwind / CSS modules)

Day 39 → Add responsiveness (mobile-friendly)

Day 40 → Optimize (React.memo, useMemo, lazy loading)

Day 41 → Prepare for deployment (clean code, remove console.logs)

Day 42 → Deploy to Vercel/Netlify + final walkthrough 🎉

🚀 By the End

You’ll have a full E-commerce Store with:
✔ Routing (multi-page app)
✔ Authentication (fake login/logout)
✔ API data fetching with Axios
✔ Cart system (add/remove/quantity/total)
✔ Context/Redux state management
✔ Dark/Light theme
✔ Deployment

📂 ShopEasy React File Structure

shop-easy/
│── public/ # static files (favicon, images, etc.)
│── src/
│ │── assets/ # images, logos, icons
│ │ └── logo.png
│ │
│ │── components/ # reusable UI components
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ ├── ProductCard.jsx
│ │ ├── SearchBar.jsx
│ │ ├── Button.jsx
│ │ └── Loader.jsx
│ │
│ │── pages/ # full pages (used in React Router)
│ │ ├── Home.jsx
│ │ ├── Products.jsx
│ │ ├── ProductDetails.jsx
│ │ ├── Cart.jsx
│ │ ├── Login.jsx
│ │ ├── Signup.jsx
│ │ └── Checkout.jsx
│ │
│ │── context/ # React Context API (global state)
│ │ ├── CartContext.jsx
│ │ └── ThemeContext.jsx
│ │
│ │── services/ # API-related files
│ │ └── api.js # Axios instance setup
│ │
│ │── styles/ # global CSS/Tailwind configs
│ │ └── global.css
│ │
│ │── App.jsx # main app (routes, layout)
│ │── main.jsx # entry point (ReactDOM)
│ │
│── package.json
│── vite.config.js # or CRA config

🔹 Explanation
components/ → Reusable UI parts (cards, buttons, navbar).

pages/ → Full pages shown by routes (Home, Products, Cart, etc.).

context/ → Global state management (Cart, Theme, Auth).

services/ → API setup (axios.create) so you don’t repeat base URL everywhere.

assets/ → Images, icons, and static files.

styles/ → CSS/Tailwind configs.

App.jsx → Main component with Router + layout.

main.jsx → React entry point (renders <App />).
