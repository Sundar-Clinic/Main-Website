import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
	return (
		<section className='max-w-7xl mx-auto w-full p-4 mt-8 relative min-h-[50vh] grid grid-cols-1 gap-8 md:grid-cols-2'>
			<div className='flex flex-col gap-4'>
				<p className='font-medium text-lg md:text-xl'>About Us</p>
				<h1 className='font-heading font-medium text-2xl md:text-4xl max-w-3xl'>
					Welcome to Sundar Clinic: Where Healthcare Meets Exceptional
					Experience
				</h1>
				<p className='text-lg md:text-xl text-justify max-w-5xl text-slate-500'>
					At Sundar Clinic, we&apos;re not just about healthcare;
					we&apos;re about crafting a better healthcare experience.
					Since our establishment in 2013, we&apos;ve been a
					cornerstone of wellness in the vibrant community of
					Pappanchatiram. Our guiding individual is Dr. Ekta Bharti
					M.B.B.S., a dedicated general physician who has been leading
					the way to better health for our community.
				</p>
				<Button asChild size={'lg'}>
					<Link href='#history'>Learn more</Link>
				</Button>
			</div>
			<div className='flex items-center justify-center'>
				<div className='md:max-w-[80%] rounded-lg overflow-hidden'>
					<Image
						src='/images/about.svg'
						alt='Sundar Clinic'
						width={100}
						height={100}
						className='w-full h-auto object-contain z-10 relative'
						priority
						unoptimized
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
