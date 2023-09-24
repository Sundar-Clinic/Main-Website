/**
 * Legal Page
 */

// Dependencies
import Link from 'next/link';

export default function Legal() {
	const relaventLinks = [
		{ name: 'Terms & Conditions', href: '/terms', target: '_self' },
		{ name: 'Privacy Policy', href: '/privacy', target: '_self' },
	];
	return (
		<main>
			<section className='max-w-5xl mx-auto w-full p-4 mt-8'>
				<h1 className='text-2xl font-heading font-medium'>
					Legal Information
				</h1>
				<hr className='border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mt-2' />
			</section>
			<section className='max-w-5xl mx-auto w-full p-4'>
				<h2 className='text-xl font-heading font-medium'>
					Clinic Registration
				</h2>
				<hr className='border-b-2 max-w-[10rem] border-b-primary-clinic rounded-lg mt-2' />
				<p className='mt-4'>
					Sundar Clinic is a duly registered medical facility. Our
					registration number is [NUMBER]. You can verify our
					registration by visiting [LINK].
				</p>
			</section>
			<section className='max-w-5xl mx-auto w-full p-4'>
				<h2 className='text-xl font-heading font-medium'>
					Registered Doctor
				</h2>
				<hr className='border-b-2 max-w-[10rem] border-b-primary-clinic rounded-lg mt-2' />
				<p className='mt-4'>
					Sundar Clinic is operated by a qualified and registered
					medical practitioner. Our doctor&apos;s registration number
					is <strong>68812</strong>, which can be verified on the
					Indian Medical Register maintained by the National Medical
					Commission (NMC) by visiting{' '}
					<Link
						href={
							'https://www.nmc.org.in/information-desk/indian-medical-register/'
						}
						className='text-secondary-clinic/80 transition-all hover:text-secondary-clinic underline underline-offset-2'
						target='_blank'
					>
						https://www.nmc.org.in/information-desk/indian-medical-register/
					</Link>
					.
				</p>
				<p className='mt-4'>
					Please feel free to{' '}
					<Link
						href='/contact'
						className='text-secondary-clinic/80 transition-all hover:text-secondary-clinic underline underline-offset-2'
					>
						contact us
					</Link>{' '}
					if you have any questions or require additional information
					regarding our legal status and the qualifications of our
					medical practitioner.
				</p>
			</section>
			<section className='max-w-5xl mx-auto w-full p-4'>
				<h2 className='text-xl font-heading font-medium'>
					Other relavent links
				</h2>
				<hr className='border-b-2 max-w-[10rem] border-b-primary-clinic rounded-lg mt-2' />
				<ul className='mt-4 list-disc ml-4'>
					{relaventLinks.map((link) => (
						<li key={`legal-other-links-${link.href}`}>
							<Link
								href={link.href}
								target={link.target}
								className='text-secondary-clinic/80 transition-all hover:text-secondary-clinic underline underline-offset-2'
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
