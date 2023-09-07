import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav className='w-full'>
			<section className='max-w-7xl mx-auto p-4'>
				<Link href={'/'} className='block w-32'>
					<Image
						src='/logo/logo-fit.png'
						alt='Sundar Clinic'
						width={100}
						height={100}
						className='w-full h-auto object-contain'
					/>
				</Link>
				<div></div>
				<div></div>
			</section>
			<section className='w-full bg-secondary-clinic/5 px-4 py-2'>
				<ul>content</ul>
			</section>
		</nav>
	);
};

export default Navbar;
