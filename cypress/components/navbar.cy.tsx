import Navbar from '@/layouts/Navbar';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../locales/en.json';

describe('<Navbar />', () => {
	it('should render and display expected content', () => {
		// Mount the React component for the Home page
		cy.mount(
			<NextIntlClientProvider locale={'en'} messages={messages}>
				<Navbar locale='en' />
			</NextIntlClientProvider>
		);

		const button = cy.get('#nav-cta-button');
		button.should('contains.text', messages.layouts.navbar.cta);
	});
});
