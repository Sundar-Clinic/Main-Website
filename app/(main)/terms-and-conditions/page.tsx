/**
 * Terms & Conditions Page
 */

// Dependencies
import { TERMS_AND_CONDITIONS } from '@/constants/clinic';

export default function TermsAndConditions() {
	return (
		<main>
			<section className='max-w-5xl mx-auto w-full p-4 mt-8'>
				<h1 className='text-2xl font-heading font-medium'>
					Terms & Conditions
				</h1>
				<hr className='border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mt-2' />
				<p className='mt-4'>Effective Date: 19th Sept. 2023</p>
				<h2 className='text-lg'>
					Welcome to Sundar Clinic&apos;s website. By accessing and
					using this website, you agree to comply with and be bound by
					these Terms and Conditions. Please read the following terms
					carefully.
				</h2>
			</section>
			<section className='max-w-5xl mx-auto w-full p-4'>
				<ul className='list-disc ml-4'>
					{TERMS_AND_CONDITIONS.map((toc, index) => (
						<li key={`toc-${index} block`}>
							<h3 className='text-lg font-medium font-heading'>
								{toc.title}
							</h3>
							<ul className='ml-4'>
								{toc.descriptions.map((desc, index2) => (
									<li key={`toc-${index}-${index2}`}>
										{desc}
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
				<p className='text-lg mt-4'>
					By using our website, you acknowledge that you have read,
					understood, and agreed to these Terms and Conditions. If you
					do not agree to these terms, please do not use our website.
				</p>
			</section>
		</main>
	);
}
