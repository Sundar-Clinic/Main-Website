/**
 * Legal Page Layout
 */

// Dependencies
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
	title: 'Legal Information - Sundar Clinic',
};

export default function LegalLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Head>
				<link rel='canonical' href='https://sundarclinic.com/legal/' />
			</Head>
			{children}
		</>
	);
}
