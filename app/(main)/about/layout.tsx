/**
 * About Page Layout
 */

// Dependencies
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
	title: 'About - Sundar Clinic',
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Head>
				<link rel='canonical' href='https://sundarclinic.com/about/' />
			</Head>
			{children}
		</>
	);
}
