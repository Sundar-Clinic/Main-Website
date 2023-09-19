import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Terms & Conditions - Sundar Clinic',
};

export default function TermsAndConditionsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
