import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CONTACTS } from '@/constants/clinic';

const Hero = () => {
	return (
		<section className='max-w-7xl mx-auto min-h-[60vh] grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-8 p-4 pt-12 md:pt-0'>
			<div className='flex flex-col justify-center items-center md:items-start gap-8'>
				<h1 className='text-4xl font-heading'>
					Not just a better healthcare, but a better healthcare
					experience.
				</h1>
				<h2 className='text-lg font-light'>
					In Pappanchatirma, Dr. Ekta Bharti (M.B.B.S) at Sundar
					Clinic is your trusted healthcare partner. With personalized
					care, your health is our priority. Experience exceptional
					healthcare with us today
				</h2>
				<div className='flex gap-4 items-center'>
					<Button asChild className=''>
						<Link href={CONTACTS.googleLocation} target='_blank'>
							Visit Now
						</Link>
					</Button>
					<Button asChild variant='outline'>
						<Link href='/about'>Learn more</Link>
					</Button>
				</div>
			</div>
			<div className='flex items-center justify-center'>
				<div className='max-w-[80%] relative'>
					<div className='overflow-hidden w-full rounded-lg z-20'>
						<Image
							src='/images/landing.jpg'
							alt='Sundar Clinic'
							width={100}
							height={100}
							className='w-full h-auto object-contain z-10 relative'
							priority
							unoptimized
						/>
					</div>
					<div className='absolute shadow shadow-black/20 rounded-full w-28 h-28 -bottom-12 -right-4 bg-white z-10' />
					<div className='absolute shadow shadow-black/20 rounded-full w-20 h-20 -bottom-4 -left-10 bg-white z-0' />
					<div className='absolute shadow shadow-black/20 rounded-full w-16 h-16 -top-10 left-1/2 bg-white z-10' />
				</div>
			</div>
		</section>
	);
};

export default Hero;
