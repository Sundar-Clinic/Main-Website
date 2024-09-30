'use client';

import React, { useState } from 'react';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { usePathname, useRouter } from '@/lib/routing';

interface Props extends React.ComponentProps<typeof Select> {
	locale: LocaleLanguages;
}

const LanguageSwitch: React.FC<Props> = ({ locale }) => {
	const router = useRouter();
	const pathname = usePathname();

	const locales: ReadonlyArray<{
		id: LocaleLanguages;
		title: string;
	}> = [
		{
			id: 'en',
			title: 'English',
		},
		{
			id: 'ta',
			title: 'தமிழ்',
		},
		{
			id: 'hi',
			title: 'हिंदी',
		},
	];

	const handleChange = (value: LocaleLanguages) => {
		router.push(pathname, { locale: value, scroll: false });
	};

	return (
		<Select onValueChange={handleChange} value={locale}>
			<SelectTrigger
				aria-label='language switch button'
				className={`w-fit bg-transparent text-black border-none ring-0`}
			>
				<SelectValue />
			</SelectTrigger>
			<SelectContent side='bottom'>
				{locales.map((item) => (
					<SelectItem key={`local-${item.id}`} value={item.id}>
						{item.title}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};

export default LanguageSwitch;
