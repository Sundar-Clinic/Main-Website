/**
 * Gallery Page Layout
 */

// Dependencies
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Gallery - Sundar Clinic',
	alternates: {
		canonical: 'https://sundarclinic.com/gallery/',
	},
};

export default function GalleryLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
