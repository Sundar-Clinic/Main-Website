/**
 * Terms & Conditions Page Layout
 */

// Dependencies
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
	title: 'Terms & Conditions - Sundar Clinic',
};

export default function TermsAndConditionsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Head>
				<link
					rel='canonical'
					href='https://sundarclinic.com/terms-and-conditions/'
				/>
			</Head>
			{children}
		</>
	);
}
