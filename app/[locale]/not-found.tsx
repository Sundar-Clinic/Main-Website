import { Button } from '@/components/ui/button';
import { Link } from '@/lib/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
	const t = useTranslations('layouts.not-found');

	return (
		<main className='grid min-h-full w-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
			<div className='text-center'>
				<p className='text-base font-semibold text-red-500'>{404}</p>
				<h1 className='mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl'>
					{t('heading')}
				</h1>
				<p className='mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'>
					{t('description')}
				</p>
				<div className='mt-10 flex items-center justify-center gap-x-6'>
					<Button asChild>
						<Link href='/'>{t('cta.home')}</Link>
					</Button>
					<Button asChild variant='link'>
						<Link href='/contact'>
							{t('cta.contact')}{' '}
							<span aria-hidden='true'>
								<ArrowRight size={16} className='ml-2' />
							</span>
						</Link>
					</Button>
				</div>
			</div>
		</main>
	);
}
