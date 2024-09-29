/**
 * Privacy Policy Page Layout
 */

// Dependencies
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Privacy Policy',
	alternates: {
		canonical: 'https://sundarclinic.com/privacy-policy/',
	},
};

export default function PrivacyPolicyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
