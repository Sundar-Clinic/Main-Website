import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Privacy Policy - Sundar Clinic',
};

export default function PrivacyPolicyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
