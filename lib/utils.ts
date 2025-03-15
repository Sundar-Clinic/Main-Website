import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function dateFormatter(date: string) {
	let currentUserLocale = 'en-IN';
	if (typeof window !== 'undefined') {
		currentUserLocale = navigator.language;
	}
	const currentUserTimeZone =
		Intl.DateTimeFormat().resolvedOptions().timeZone;
	const formatter = new Intl.DateTimeFormat(currentUserLocale, {
		dateStyle: 'long',
		timeZone: currentUserTimeZone,
	});
	return formatter.format(new Date(date));
}
