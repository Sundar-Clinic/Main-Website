import { Bookmark, CalendarDaysIcon, HandIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/routing';
import { CONTACTS } from '@/constants/clinic';
import { useTranslations } from 'next-intl';

export default function NewsLetterCTA() {
	const t = useTranslations('components.cards.cta.newsletter');
	return (
		<section className='container p-0 md:p-4'>
			<div className='relative isolate overflow-hidden bg-gray-900 py-16 md:rounded-lg'>
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>
					<div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2'>
						<div className='max-w-xl lg:max-w-lg'>
							<h2 className='text-4xl font-semibold tracking-tight text-white'>
								{t('heading')}
							</h2>
							<p className='mt-4 text-lg text-gray-300'>
								{t('description')}
							</p>
							<Button
								asChild
								className='inline-flex items-center gap-2 mt-6'
								size='lg'
								variant='secondary'
							>
								<Link
									href={CONTACTS.newsletterURL}
									target='_blank'
									rel='noopener noreferrer'
								>
									<Bookmark className='h-4 w-4' />
									{t('cta')}
								</Link>
							</Button>
						</div>
						<dl className='grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2'>
							<div className='flex flex-col items-start'>
								<div className='rounded-md bg-white/5 p-2 ring-1 ring-white/10'>
									<CalendarDaysIcon
										aria-hidden='true'
										className='w-6 h-6 text-white'
									/>
								</div>
								<dt className='mt-4 text-base font-semibold text-white'>
									{t('info.frequency.heading')}
								</dt>
								<dd className='mt-2 text-base/7 text-gray-400'>
									{t('info.frequency.description')}
								</dd>
							</div>
							<div className='flex flex-col items-start'>
								<div className='rounded-md bg-white/5 p-2 ring-1 ring-white/10'>
									<HandIcon
										aria-hidden='true'
										className='w-6 h-6 text-white'
									/>
								</div>
								<dt className='mt-4 text-base font-semibold text-white'>
									{t('info.spam.heading')}
								</dt>
								<dd className='mt-2 text-base/7 text-gray-400'>
									{t('info.spam.description')}
								</dd>
							</div>
						</dl>
					</div>
				</div>
				<div
					aria-hidden='true'
					className='absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6'
				>
					<div
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
						className='aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary-clinic/20 to-secondary-clinic/20 opacity-30'
					/>
				</div>
			</div>
		</section>
	);
}
