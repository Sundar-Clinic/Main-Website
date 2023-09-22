/**
 * Contact Page Layout
 */

// Dependencies
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact Us - Sundar Clinic',
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
