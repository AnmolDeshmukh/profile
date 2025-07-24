# Modern Next.js Developer Portfolio

A modern, responsive, and feature-rich developer portfolio built with Next.js and Tailwind CSS. Designed to showcase projects, skills, and experience, with a fully functional contact form for seamless communication.

**[Live Demo](https://your-render-url.onrender.com)** &mdash; (Replace with your actual Render URL after deployment)

![Portfolio Screenshot](https://place-your-screenshot-url-here.com/screenshot.png) 
> **Note:** Add a screenshot of your portfolio and replace the URL above.

---

## ✨ Features

- **Framework**: Built with the latest Next.js and the App Router.
- **Styling**: Styled with Tailwind CSS for a utility-first, modern design.
- **Contact Form**: A serverless API route handles form submissions securely.
- **Dual Notifications**: Instantly receive new messages via both **Email** (using Nodemailer) and **Telegram**.
- **Fully Responsive**: A mobile-first design that looks great on all screen sizes.
- **SEO Optimized**: Built with best practices for search engine visibility.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- `npm`, `yarn`, or `pnpm`

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AnmolDeshmukh/profile.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd profile
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Set up environment variables:**
    - Create a new file named `.env.local` in the root of your project.
    - Copy the contents from `.env.example` into `.env.local`.
    - Fill in the values for each variable. See the table below for details.

5.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open http://localhost:3000 with your browser to see the result.

## ⚙️ Environment Variables

These variables are required for the contact form and other services to function correctly.

| Variable             | Description                                                                                             |
| -------------------- | ------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_GTM`    | (Optional) Your Google Tag Manager ID for analytics.                                                    |
| `NEXT_PUBLIC_APP_URL`| The public, canonical URL of your deployed application (e.g., `https://my-portfolio.com`).              |
| `TELEGRAM_BOT_TOKEN` | The token for your Telegram bot, obtained from BotFather.                                               |
| `TELEGRAM_CHAT_ID`   | The ID of the Telegram chat where the bot should send notifications.                                    |
| `GMAIL_PASSKEY`      | A Google Mail **"App Password"** for sending emails via Nodemailer. This is *not* your regular password. |
| `EMAIL_ADDRESS`      | The Gmail address used to send email notifications (from and to yourself).                              |

## 🚢 Deployment

This project is ready for deployment on any platform that supports Next.js, such as **Render** or **Vercel**.

- **Build Command**: `npm run build`
- **Start Command**: `npm start`

Remember to set up the same environment variables in your hosting provider's dashboard to ensure all features work in production.

## 📄 License

This project is licensed under the MIT License.