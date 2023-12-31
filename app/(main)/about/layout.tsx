/**
 * About Page Layout
 */

// Dependencies
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About - Sundar Clinic',
	alternates: {
		canonical: 'https://sundarclinic.com/about/',
	},
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
