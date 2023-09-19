import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Gallery - Sundar Clinic',
};

export default function GalleryLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
