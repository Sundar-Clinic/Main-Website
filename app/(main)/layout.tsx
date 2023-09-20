import type { Metadata } from 'next';
import { Source_Sans_3, Poppins } from 'next/font/google';
import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';

import './globals.css';

const sourceSans3 = Source_Sans_3({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-source-sans-3',
	style: ['italic', 'normal'],
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-poppins',
	style: ['italic', 'normal'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'Sundar Clinic',
	description:
		'Not just a better healthcare, but a better healthcare experience in Pappanchatiram, situated on the Bangalore-Chennai highway. Led by Dr. Ekta Bharti, a trusted general physician.',
	openGraph: {
		title: 'Sundar Clinic',
		description:
			'Not just a better healthcare, but a better healthcare experience in Pappanchatiram, situated on the Bangalore-Chennai highway. Led by Dr. Ekta Bharti, a trusted general physician. Sundar Clinic is your partner in well-being.',
		url: 'https://sundarclinic.vercel.app',
		type: 'website',
		siteName: 'Sundar Clinic',
	},
	twitter: {
		title: 'Sundar Clinic',
		description:
			'Discover better healthcare and a superior healthcare experience at Sundar Clinic in Pappanchatiram, located on the Bangalore-Chennai highway. Led by Dr. Ekta Bharti, your trusted general physician. #Healthcare #SundarClinic',
		site: '@SundarClinic',
		creator: '@SundarClinic',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={`${sourceSans3.variable} ${poppins.variable} font-sans`}
		>
			<body>
				<TooltipProvider>
					<Navbar />
					{children}
					<Footer />
				</TooltipProvider>
				<Toaster />
			</body>
		</html>
	);
}
