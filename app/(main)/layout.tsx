/**
 * Root Layout
 */

// Dependencies
import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import Head from 'next/head';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Head>
				<link rel='canonical' href='https://sundarclinic.com/' />
			</Head>
			<TooltipProvider>
				<Navbar />
				{children}
				<Footer />
			</TooltipProvider>
			<Toaster />
		</>
	);
}
