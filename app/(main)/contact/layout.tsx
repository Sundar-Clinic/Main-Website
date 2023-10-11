/**
 * Contact Page Layout
 */

// Dependencies
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
	title: 'Contact Us - Sundar Clinic',
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Head>
				<link
					rel='canonical'
					href='https://sundarclinic.com/contact/'
				/>
			</Head>
			{children}
		</>
	);
}
