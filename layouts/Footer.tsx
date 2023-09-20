import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import { FOOTER_NAVIGATION } from '@/constants/navigation';
import { CONTACTS, SOCIALS } from '@/constants/clinic';

export default function Footer() {
	return (
		<footer>
			<section className='max-w-7xl mx-auto p-4 text-center md:text-left mt-8'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center w-full justify-between gap-8'>
					<div className='flex flex-col items-center justify-center gap-2 w-fit'>
						<div className='w-28'>
							<Image
								src='/logo/logo-fit.png'
								alt='Sundar Clinic'
								width={100}
								height={100}
								className='w-full h-auto object-contain'
								priority
							/>
						</div>
						<p className='text-slate-500 text-sm'>
							2013 - {new Date().getFullYear()}
						</p>
					</div>
					<div className='max-w-[40ch]'>
						<p className='font-semibold'>Address</p>
						<p>{CONTACTS.address}</p>
					</div>
					<div>
						<p className='font-semibold'>Contacts</p>
						<Link
							href={`tel:${CONTACTS.phone}`}
							className='underline underline-offset-2 hover:text-primary-clinic transition-all'
						>
							{CONTACTS.phone}
						</Link>
						<p>Reception, Sundar Clinic</p>
						<Link
							href={`mailto:${CONTACTS.phone}`}
							className='underline underline-offset-2 hover:text-primary-clinic transition-all'
						>
							{CONTACTS.email}
						</Link>
					</div>
					<div className='flex gap-4 flex-col w-fit'>
						<div className='flex items-center justify-center gap-4'>
							<Clock />
							<p className='flex flex-col'>
								<span>Morning ‣ 9 a.m. - 1:30 p.m.</span>
								<span>Evening ‣ 4:00 p.m. - 9:30 p.m.</span>
							</p>
						</div>
						<Button asChild className=''>
							<Link
								href={CONTACTS.googleLocation}
								target='_blank'
							>
								Visit Now
							</Link>
						</Button>
					</div>
				</div>
			</section>
			<section>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124429.51674082068!2d80.0030849!3d12.9448011!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528ba6ba597489%3A0x266f1a52d95c4f1e!2sSundar%20Clinic!5e0!3m2!1sen!2sin!4v1694196169153!5m2!1sen!2sin'
					width='100%'
					height='320'
					style={{ border: 0 }}
					allowFullScreen
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				></iframe>
			</section>
			<section className='max-w-7xl mx-auto my-4'>
				<div className='grid grid-cols-1 sm:grid-cols-2 place-items-center gap-4'>
					<ul className='grid grid-cols-3 gap-2 place-items-center'>
						{FOOTER_NAVIGATION.map((link) => (
							<li key={`footer-${link.name}`}>
								<Link
									href={link.url}
									target={link.target}
									className='w-full hover:text-primary-clinic transition-all hover:underline underline-offset-2'
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
					<ul className='flex gap-2 items-center w-fit'>
						{SOCIALS.map((link) => (
							<Link
								href={link.url}
								target={'_blank'}
								key={`footer-social-${link.name}`}
								title={link.name}
								className='group'
							>
								<Button asChild size='icon' variant={'ghost'}>
									<li>
										<link.Icon
											strokeWidth={1.5}
											size={20}
											className='group-hover:text-primary-clinic transition-all'
										/>
									</li>
								</Button>
							</Link>
						))}
					</ul>
				</div>
				<hr className='border-b mb-2 mt-4 border-b-slate-300 mx-auto' />
				<p className='text-center'>
					2023. &copy; Sundar Clinic. All rights reserved
				</p>
			</section>
		</footer>
	);
}
