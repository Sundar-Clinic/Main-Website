import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Legal Information - Sundar Clinic',
};

export default function LegalLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
