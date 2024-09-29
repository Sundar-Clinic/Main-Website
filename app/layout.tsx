/**
 * Root Layout
 */

// Dependencies
import type { Metadata } from 'next';
import { Source_Sans_3, Poppins } from 'next/font/google';
import { WithContext, MedicalBusiness } from 'schema-dts';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Script from 'next/script';

import './globals.css';
import { CONTACTS } from '@/constants/clinic';

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

export async function generateMetadata(): Promise<Metadata> {
	return {
		metadataBase: new URL('https://sundarclinic.com'),
	};
}

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
	telephone: CONTACTS.phone,
	url: 'https://sundarclinic.com',
	email: CONTACTS.email,
};

export default async function RootLayout({
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
			<body>{children}</body>
		</html>
	);
}
