/**
 * Contact Page Layout
 */

// Dependencies
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact Us',
	alternates: {
		canonical: 'https://sundarclinic.com/contact/',
	},
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
