/**
 * Legal Page Layout
 */

// Dependencies
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Legal Information ',
	alternates: {
		canonical: 'https://sundarclinic.com/legal/',
	},
};

export default function LegalLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
