/**
 * Navbar Component
 */

'use client';

// Dependencies
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Clock, Menu, Phone } from 'lucide-react';
import { NAVBAR_NAVIGATION } from '@/constants/navigation';
import { CONTACTS } from '@/constants/clinic';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetFooter,
} from '@/components/ui/sheet';
import { Link, usePathname } from '@/lib/routing';
import { useTranslations } from 'next-intl';

interface NavbarProps extends React.ComponentProps<'nav'> {
	locale: LocaleLanguages;
}

const Navbar: React.FC<NavbarProps> = ({ locale }) => {
	const pathname = usePathname();
	const [sheetOpen, setSheetOpen] = useState(false);

	const t = useTranslations();

	const handleCloseSheet = () => setSheetOpen(false);

	return (
		<nav className='w-full'>
			<section className='max-w-7xl mx-auto p-4 flex w-full items-center justify-between flex-col md:flex-row gap-4'>
				<div className='flex items-center justify-between w-full md:w-fit'>
					<Link href={'/'} className='block w-28' prefetch={false}>
						<Image
							src='/logo/logo-fit.png'
							alt='Sundar Clinic'
							width={100}
							height={100}
							className='w-full h-auto object-contain'
							loading='lazy'
						/>
					</Link>
					<Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
						<SheetTrigger asChild className='md:hidden'>
							<Button
								variant={'outline'}
								aria-label={t('sr-menu')}
							>
								<Menu />
								<span className='sr-only'>{t('sr-menu')}</span>
							</Button>
						</SheetTrigger>
						<SheetContent className='flex flex-col h-full md:hidden'>
							<SheetHeader>
								<SheetTitle>{t('company.name')}</SheetTitle>
								<SheetDescription>
									{t('company.tagline')}
								</SheetDescription>
							</SheetHeader>
							<div>
								<ul className='flex gap-4 flex-col font-heading'>
									{NAVBAR_NAVIGATION.map((link) => {
										const isActive = pathname === link.url;
										return (
											<li
												key={`nav-${link.name[locale]}`}
												className='font-medium w-fit'
												onClick={handleCloseSheet}
											>
												<Link
													prefetch={false}
													href={link.url}
													target={link.target}
													className={`${
														isActive
															? 'text-primary-clinic'
															: ''
													} w-full hover:text-primary-clinic transition-all`}
												>
													{link.name[locale]}
												</Link>
											</li>
										);
									})}
								</ul>
								<Button
									asChild
									className='mt-4 md:mt-0 w-full'
									onClick={handleCloseSheet}
									id='sheet-nav-cta-button'
								>
									<Link
										href={CONTACTS.googleLocation}
										target='_blank'
									>
										{t('layouts.navbar.cta')}
									</Link>
								</Button>
							</div>
							<SheetFooter className='mt-auto text-xs'>
								{CONTACTS.address}
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</div>
				<div className='flex items-center justify-between w-full md:w-1/2'>
					<div className='flex items-center justify-center gap-4'>
						<Clock strokeWidth={1.5} size={20} />
						<p className='flex flex-col text-sm md:text-base'>
							<span>{t('company.timings.morning')}</span>
							<span>{t('company.timings.evening')}</span>
						</p>
					</div>
					<div className='flex items-center justify-center gap-4'>
						<Phone strokeWidth={1.5} size={20} />
						<Link
							href={`tel:${CONTACTS.phone}`}
							className='text-sm md:text-base underline underline-offset-2 hover:text-primary-clinic transition-all'
						>
							{CONTACTS.phone}
						</Link>
					</div>
				</div>
				<Button asChild className='hidden md:flex'>
					<Link
						href={CONTACTS.googleLocation}
						target='_blank'
						id='nav-cta-button'
					>
						{t('layouts.navbar.cta')}
					</Link>
				</Button>
			</section>
			<section className='w-full bg-secondary-clinic/5 px-4 py-2 hidden md:block'>
				<ul className='max-w-7xl mx-auto flex gap-8 items-center justify-center font-heading'>
					{NAVBAR_NAVIGATION.map((link) => {
						const isActive = pathname === link.url;
						return (
							<li
								key={`nav-${link.name[locale]}`}
								className='font-medium w-fit'
							>
								<Link
									prefetch={false}
									href={link.url}
									target={link.target}
									className={`${
										isActive ? 'text-primary-clinic' : ''
									} hover:text-primary-clinic transition-all`}
								>
									{link.name[locale]}
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
