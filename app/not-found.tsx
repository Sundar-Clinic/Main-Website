/* eslint-disable no-restricted-imports */
/* eslint-disable react/jsx-no-literals */

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Poppins, Source_Sans_3 } from 'next/font/google';
import { ArrowRight } from 'lucide-react';

const sourceSans3 = Source_Sans_3({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-source-sans-3',
	style: ['italic', 'normal'],
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-poppins',
	style: ['italic', 'normal'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function NotFound() {
	return (
		<html
			lang='en'
			className={`${sourceSans3.variable} ${poppins.variable} font-sans`}
		>
			<body>
				<main className='grid min-h-screen w-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
					<div className='text-center'>
						<p className='text-base font-semibold text-red-500'>
							404
						</p>
						<h1 className='mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl'>
							Page not found
						</h1>
						<p className='mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'>
							Sorry, we couldn&apos;t find the page you&apos;re
							looking for.
						</p>
						<div className='mt-10 flex items-center justify-center gap-x-6'>
							<Button asChild>
								<Link href='/'>Go back home</Link>
							</Button>
							<Button asChild variant='link'>
								<Link href='/en/contact'>
									Contact Us{' '}
									<span aria-hidden='true'>
										<ArrowRight
											size={16}
											className='ml-2'
										/>
									</span>
								</Link>
							</Button>
						</div>
					</div>
				</main>
			</body>
		</html>
	);
}
