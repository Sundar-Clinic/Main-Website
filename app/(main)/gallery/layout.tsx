/**
 * Gallery Page Layout
 */

// Dependencies
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
	title: 'Gallery - Sundar Clinic',
};

export default function GalleryLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Head>
				<link
					rel='canonical'
					href='https://sundarclinic.com/gallery/'
				/>
			</Head>
			{children}
		</>
	);
}
