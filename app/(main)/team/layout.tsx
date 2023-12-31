/**
 * Team Page Layout
 */

// Dependencies
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Team - Sundar Clinic',
	alternates: {
		canonical: 'https://sundarclinic.com/team/',
	},
};

export default function PrivacyPolicyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
