import type { Metadata } from 'next';
import { WEBSITE_URL } from '@/constants/clinic';

import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
	return {
		metadataBase: new URL(WEBSITE_URL),
	};
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
