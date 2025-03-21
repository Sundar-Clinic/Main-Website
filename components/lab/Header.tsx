import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Link } from '@/lib/routing';
import { LabTestQueryResult } from '@/@types/cms';
import { useTranslations } from 'next-intl';

interface Props extends React.ComponentProps<'header'> {
	test: NonNullable<LabTestQueryResult>;
	locale: LocaleLanguages;
}

const LabTestHeader: React.FC<Props> = ({ test, locale }) => {
	const t = useTranslations('pages.lab.slug');
	return (
		<header className='container mt-0 mb-8'>
			<Button variant='ghost' asChild className='mb-4'>
				<Link href='/lab/#tests' className='flex items-center gap-2'>
					<ChevronLeft className='h-4 w-4' />
					{t('cta.return')}
				</Link>
			</Button>
			<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
				{test.name?.[locale]}
			</h1>
			<p className='mt-4 text-xl text-muted-foreground'>
				{test.shortDescription?.[locale]}
			</p>
		</header>
	);
};

export default LabTestHeader;
