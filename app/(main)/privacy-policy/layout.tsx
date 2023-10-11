/**
 * Privacy Policy Page Layout
 */

// Dependencies
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
	title: 'Privacy Policy - Sundar Clinic',
};

export default function PrivacyPolicyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Head>
				<link
					rel='canonical'
					href='https://sundarclinic.com/privacy-policy/'
				/>
			</Head>
			{children}
		</>
	);
}
