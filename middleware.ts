import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/i18n';

export default async function middleware(request: NextRequest) {
	try {
		const handleI18nRouting = createMiddleware({
			locales,
			defaultLocale: 'en',
		});
		const response = handleI18nRouting(request);
		return response;
	} catch (error) {
		console.log(error);
	}
}

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', `/(en|ta|hi)/:path*`],
};
