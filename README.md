# AnjanaTrans

This is the official website for AnjanaTrans, a heavy-duty transport company operating throughout Madagascar. The project is built with Next.js and Tailwind CSS, providing a modern and responsive user experience.

## Key Features

- **Services Showcase:** Detailed descriptions of the services offered, including all-terrain transport, national delivery, and truck rental with a driver.
- **Contact Information:** Easy access to the company's phone number and email address for inquiries and quotes.
- **Responsive Design:** The website is fully responsive and accessible on all devices, from desktops to mobile phones.
- **Modern UI:** Built with Shadcn/ui components for a clean and consistent user interface.

## Technologies Used

- **[Next.js](https://nextjs.org/):** A React framework for building server-side rendered and static web applications.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid UI development.
- **[Shadcn/ui](https://ui.shadcn.com/):** A collection of re-usable UI components.
- **[Lucide React](https://lucide.dev/):** A library of simply designed, beautiful icons.
- **[Genkit](https://firebase.google.com/docs/genkit):** Google's open-source framework for building AI-powered applications (integration in progress).

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18.17 or later)
- npm, yarn, or pnpm

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/sitrakaherivalisoagithub/anjanatrans.git
   ```
2. Navigate to the project directory:
   ```sh
   cd anjanatrans
   ```
3. Install NPM packages:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows the standard Next.js `app` directory structure:

```
.
├── src/
│   ├── app/                # Main application pages
│   ├── components/         # Reusable UI components (including Shadcn/ui)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── ai/                 # AI-related logic (using Genkit)
├── public/                 # Static assets (images, fonts, etc.)
└── ...                     # Configuration files
