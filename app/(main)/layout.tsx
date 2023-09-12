import type { Metadata } from 'next';
import { Source_Sans_3, Poppins } from 'next/font/google';
import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';
import { TooltipProvider } from '@/components/ui/tooltip';

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
		'Not just a better healthcare, but a better healthcare experience.',
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
			</body>
		</html>
	);
}
