'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAVBAR_NAVIGATION } from '@/constants/navigation';
import { usePathname } from 'next/navigation';

const Navbar = () => {
	const pathname = usePathname();

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
				<ul className='max-w-7xl mx-auto flex gap-8 items-center justify-center font-heading'>
					{NAVBAR_NAVIGATION.map((link) => {
						const isActive = pathname === link.url;
						return (
							<li
								key={`nav-${link.name}`}
								className='font-medium'
							>
								<Link
									href={link.url}
									target={link.target}
									className={`${
										isActive ? 'text-primary-clinic' : ''
									}`}
								>
									{link.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</section>
		</nav>
	);
};

export default Navbar;
