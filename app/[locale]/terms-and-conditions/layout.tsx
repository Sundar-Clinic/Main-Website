/**
 * Terms & Conditions Page Layout
 */

// Dependencies
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Terms & Conditions',
	alternates: {
		canonical: 'https://sundarclinic.com/terms-and-conditions/',
	},
};

export default function TermsAndConditionsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
