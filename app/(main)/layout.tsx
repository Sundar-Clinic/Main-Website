import type { Metadata } from 'next';
import { Source_Sans_3, Poppins } from 'next/font/google';
import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { WithContext, MedicalBusiness } from 'schema-dts';
import Script from 'next/script';

import './globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';

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
	metadataBase: new URL('https://sundarclinic.com'),
	title: 'Sundar Clinic',
	description:
		'Not just a better healthcare, but a better healthcare experience in Pappanchatiram, situated on the Bangalore-Chennai highway. Led by Dr. Ekta Bharti, a trusted general physician.',
	openGraph: {
		title: 'Sundar Clinic',
		description:
			'Not just a better healthcare, but a better healthcare experience in Pappanchatiram, situated on the Bangalore-Chennai highway. Led by Dr. Ekta Bharti, a trusted general physician. Sundar Clinic is your partner in well-being.',
		url: '/',
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

const jsonLd: WithContext<MedicalBusiness> = {
	'@context': 'https://schema.org',
	'@type': 'MedicalBusiness',
	name: 'Sundar Clinic',
	description:
		'Not just a better healthcare, but a better healthcare experience in Pappanchatiram, situated on the Bangalore-Chennai highway. Led by Dr. Ekta Bharti, a trusted general physician.',
	image: 'https://sundarclinic.com/opengraph-image.jpg',
	address: {
		'@type': 'PostalAddress',
		streetAddress: '1195A, Nehru Street',
		addressLocality: 'Chennai',
		addressRegion: 'Tamil Nadu',
		postalCode: '600123',
		addressCountry: 'India',
	},
	telephone: '+918939881702',
	url: 'https://sundarclinic.com',
	email: 'sundarclinic@gmail.com',
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
			<GoogleAnalytics GA_TRACKING_ID='G-4PGSJ6BVZ2' />
			<Script
				id='json-ld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
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
