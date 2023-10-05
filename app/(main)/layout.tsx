/**
 * Root Layout
 */

// Dependencies
import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<TooltipProvider>
				<Navbar />
				{children}
				<Footer />
			</TooltipProvider>
			<Toaster />
		</>
	);
}
