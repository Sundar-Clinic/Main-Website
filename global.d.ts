import en from './locales/en.json';

type Messages = typeof en;

declare global {
	// Use type safe message keys with next-intl
	interface IntlMessages extends Messages {}
	type LocaleLanguages = 'en' | 'ta' | 'hi';
	interface PageProps {
		params: { locale: LocaleLanguages };
	}
}
