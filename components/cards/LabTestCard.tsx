import React from 'react';
import { LabTestsQueryResult } from '@/@types/cms';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { urlForImage } from '@/sanity/lib/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/routing';

interface Props extends React.ComponentProps<typeof Card> {
	test: LabTestsQueryResult[number];
	locale: LocaleLanguages;
}

const LabTestCard: React.FC<Props> = ({
	test,
	locale,
	className,
	...props
}) => {
	const t = useTranslations('components.cards.test');
	return (
		<Card
			{...props}
			className={cn(
				'flex flex-col overflow-hidden transition-all hover:shadow-lg',
				className
			)}
		>
			<div className='relative aspect-video overflow-hidden'>
				<Image
					src={
						(test.thumbnail &&
							urlForImage(test.thumbnail).format('webp').url()) ??
						''
					}
					alt={test.thumbnail?.alt ?? ''}
					fill
					className='object-cover transition-all hover:scale-105'
				/>
			</div>
			<CardHeader>
				<CardTitle>
					<h3>{test.name?.[locale]}</h3>
				</CardTitle>
				<CardDescription>
					{test.shortDescription?.[locale]}
				</CardDescription>
			</CardHeader>
			<CardContent className='flex-1'>
				<p className='text-muted-foreground'>
					{test.description?.[locale]}
				</p>
			</CardContent>
			<CardFooter>
				<Button
					variant='outline'
					className='w-full'
					asChild
					aria-label={`Learn more about ${test.name?.[locale]}`}
				>
					<Link
						href={`/lab/tests/${test.slug?.current}`}
						prefetch={false}
					>
						{t('cta')}{' '}
						<span className='sr-only'>{test.name?.[locale]}</span>
					</Link>
				</Button>
			</CardFooter>
		</Card>
	);
};

export default LabTestCard;
