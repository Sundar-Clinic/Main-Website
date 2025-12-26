# Sundar Clinic Website

Welcome to the Sundar Clinic Website repository. This website is built using modern web technologies and serves as an online platform for Sundar Clinic, a healthcare provider located in Pappanchatiram on the Bangalore-Chennai highway. The website offers information about the clinic, its services, team members, FAQs, and more.

<p align="center">
  <img src="public/images/preview.gif" alt="Sundar Clinic Thumbnail" width="80%" height="auto" />
</p>

## Technologies Used

- Next.js 13
- App Router
- Sanity CMS
- Tailwind CSS
- Shadcn UI
- Material-UI Image List Component
- Zod
- Nodemailer
- Axios

## Pages

- Landing
- About
- Gallery
- Contact
- Terms and Conditions
- Privacy Policy
- Legal Page

## Features

- Dynamic content management through Sanity CMS for FAQs, team members, testimonials, and gallery images.
- Contact form with data collection and email notification using Nodemailer, Axios, and Next.js API routes.
- Responsive design with Tailwind CSS and Shadcn UI for a clean and intuitive user experience.

## Usage

1. Clone the repository: `git clone https://github.com/Sundar-Clinic/Main-Website.git`
2. Install dependencies: `npm install` or `pnpm install`
3. Create `.env.local` with reference to `.env.sample` variables before running the app (Sanity and gmail app password will be required)
4. Start the development server: `npm run dev`

## Testing

This project uses Cypress for both end-to-end and component tests.

- Run end-to-end tests (headless): `npm run test:e2e`
- Open Cypress for end-to-end tests (interactive): `npm run e2e`
- Run component tests (headless): `npm run test:component`
- Open Cypress for component tests (interactive): `npm run component`
- Open Cypress Test Runner (choose e2e or component): `npm run cypress:open`

## Contribution Guidelines

If you would like to contribute to this project, please read our [Contributing Guidelines](CONTRIBUTING.md) for more information.

### 🦸 Project Contributors

<a href="https://github.com/Sundar-Clinic/Main-Website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Sundar-Clinic/Main-Website" />
</a>

## License

This project is licensed under the [MIT License](LICENSE).

### 🗡️ Forking this Repo?

Many people have contacted us asking if they can use this code for their own websites. The answer to that question is usually "yes", with attribution. There are some cases, such as using this code for a business or something that is greater than a personal project, that we may be less comfortable saying yes to. If in doubt, please don't hesitate to ask us.

We value keeping this project open source, but as you all know, plagiarism is bad. We actively spend a non-negligible amount of effort developing, designing, and trying to perfect this iteration of our project, and we are proud of it! All we ask is to not claim this effort as your own.

So, feel free to fork this repo. If you do, please just give us proper credit by linking back to this repo, [https://github.com/Sundar-Clinic/Main-Website](https://github.com/Sundar-Clinic/Main-Website). Refer to this handy [quora](https://www.quora.com/Is-it-bad-to-copy-other-peoples-code) post if you're not sure what to do. Thanks!
