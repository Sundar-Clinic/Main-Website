'use client';

import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';
import { Button } from '@/components/ui/button';

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<html>
			<body>
				<Navbar />
				<section className='max-w-7xl mx-auto w-full p-4 mt-8 text-center'>
					<h2 className='text-2xl font-heading'>
						Something went wrong!
					</h2>
					<Button onClick={() => reset()} className='mt-2'>
						Try again
					</Button>
				</section>
				<Footer />
			</body>
		</html>
	);
}
