import React from 'react';
import { LabTestQueryResult } from '@/@types/cms';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/routing';
import { Mail, Phone } from 'lucide-react';
import { CONTACTS } from '@/constants/clinic';

interface Props extends React.ComponentProps<'div'> {
	test: NonNullable<LabTestQueryResult>;
	locale: LocaleLanguages;
}

const TestInformation: React.FC<Props> = ({ test, locale }) => {
	const t = useTranslations('pages.lab.slug');
	return (
		<div className='lg:col-span-1'>
			<Card className='sticky top-24 p-6'>
				<h2 className='text-xl font-bold'>{t('sections.heading')}</h2>
				<div className='mt-4 space-y-4 divide-y'>
					<div className='pt-4'>
						<h3 className='font-medium'>
							{t('sections.description')}
						</h3>
						<p className='mt-1 text-muted-foreground'>
							{test.description?.[locale]}
						</p>
					</div>
					<div className='pt-4'>
						<h3 className='font-medium'>
							{t('sections.preparation')}
						</h3>
						<p className='mt-1 text-muted-foreground'>
							{test.preparation?.[locale]}
						</p>
					</div>
					<div className='pt-4'>
						<h3 className='font-medium'>
							{t('sections.turnaround')}
						</h3>
						<p className='mt-1 text-muted-foreground'>
							{test.turnaround?.[locale]}
						</p>
					</div>

					<div className='pt-4'>
						<div className='space-y-3'>
							<Link
								target={'_blank'}
								href={`mailto:${CONTACTS.email}`}
								className='flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors'
							>
								<Mail className='h-4 w-4' />
								{CONTACTS.email}
							</Link>
							<Link
								target={'_blank'}
								href={`tel:${CONTACTS.phone}`}
								className='flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors'
							>
								<Phone className='h-4 w-4' />
								{CONTACTS.phone}
							</Link>
						</div>
					</div>

					<Button
						variant='outline'
						size='lg'
						className='w-full'
						asChild
					>
						<Link href='/contact'>{t('cta.contact')}</Link>
					</Button>
				</div>
			</Card>
		</div>
	);
};

export default TestInformation;
