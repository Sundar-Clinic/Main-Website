import type { Metadata } from 'next';

import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
	return {
		metadataBase: new URL('https://sundarclinic.com'),
	};
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
