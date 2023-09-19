import { PRIVACY_POLICY } from '@/constants/clinic';

export default function PrivacyPolicy() {
	return (
		<main>
			<section className='max-w-5xl mx-auto w-full p-4 mt-8'>
				<h1 className='text-2xl font-heading font-medium'>
					Privacy Policy
				</h1>
				<hr className='border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mt-2' />
				<p className='mt-4'>Effective Date: 19th Sept. 2023</p>
				<h2 className='text-lg'>
					At Sundar Clinic, your privacy is of utmost importance to
					us. This Privacy Policy outlines how we collect, use,
					disclose, and protect your personal information when you
					visit our website or interact with us through our contact
					form. By using our website and providing your information,
					you consent to the practices described in this policy.
				</h2>
			</section>
			<section className='max-w-5xl mx-auto w-full p-4'>
				<ul className='list-disc ml-4'>
					{PRIVACY_POLICY.map((pp, index) => (
						<li key={`pp-${index} block`}>
							<h3 className='text-lg font-medium font-heading'>
								{pp.title}
							</h3>
							<ul className='ml-4'>
								{pp.descriptions.map((desc, index2) => (
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
