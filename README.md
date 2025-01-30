Developed with Next.js and leveraging its server-side rendering capabilities, the Car Showcase website presents various car types, showcasing comprehensive information in a well-designed format with advanced filtering and pagination support for an enhanced user experience.

If you're getting started and need assistance or face any bugs, join our active Discord community with over 27k+ members. It's a place where people help each other out.



⚙️ Tech Stack
Next.js
TypeScript
Tailwind CSS
🔋 Features
👉 Home Page: Showcases a visually appealing display of cars fetched from a third-party API, providing a captivating introduction to the diverse range of vehicles available.

👉 Exploration and Filtering: Explore a wide variety of cars from around the world, utilizing a search and filter system based on criteria such as model, manufacturer, year, fuel type, and make.

👉 Transition to Server-Side Rendering: A seamless transition from client-side rendering to server-side rendering, enhancing performance and providing a smoother browsing experience.

👉 Pagination: For easy navigation through a large dataset of cars, allowing users to explore multiple pages effortlessly.

👉 Metadata Optimization and SEO: Optimize metadata for car listing, enhancing search engine optimization (SEO) and ensuring better visibility on search engine results pages.

👉 TypeScript Types: Utilize TypeScript to provide robust typing for enhanced code quality and better development

👉 Responsive Website Design: The website is designed to be visually pleasing and responsive, ensuring an optimal user experience across various devices.

and many more, including code architecture and reusability

🤸 Quick Start
Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:

Git
Node.js
npm (Node Package Manager)
Cloning the Repository

git clone https://github.com/adrianhajdin/project_next13_car_showcase.git
cd project_next13_car_showcase
Installation

Install the project dependencies using npm:

npm install
Set Up Environment Variables

Create a new file named .env in the root of your project and add the following content:

NEXT_PUBLIC_RAPID_API_KEY=
NEXT_PUBLIC_IMAGIN_API_KEY=hrjavascript-mastery
Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on the corresponding websites from Rapid API to Imagin Cars

Running the Project

npm run dev
Open http://localhost:3000 in your browser to view the project.

🕸️ Snippets
constants.ts
globals.css
tailwind.config.js



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
