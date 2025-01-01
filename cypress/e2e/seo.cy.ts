const locales = ['en', 'ta', 'hi'];

const seoChecks = () => {
	it('should contain exactly one H1 tag', () => {
		cy.get('h1').should('have.length', 1);
	});

	it('should have a title tag with text', () => {
		cy.title().should('not.be.empty');
	});

	it('should have a meta description tag with content', () => {
		cy.get('meta[name="description"]')
			.should('have.attr', 'content')
			.and('not.be.empty');
	});

	it('should have a canonical link tag', () => {
		cy.get('link[rel="canonical"]')
			.should('have.attr', 'href')
			.and('not.be.empty')
			.and('include', 'http'); // Ensure it's a valid URL
	});

	it('should have open graph tags (title, description, and URL)', () => {
		cy.get('meta[property="og:title"]')
			.should('have.attr', 'content')
			.and('not.be.empty');
		cy.get('meta[property="og:description"]')
			.should('have.attr', 'content')
			.and('not.be.empty');
		cy.get('meta[property="og:url"]')
			.should('have.attr', 'content')
			.and('not.be.empty');
	});

	it('should have Twitter card meta tags', () => {
		cy.get('meta[name="twitter:card"]')
			.should('have.attr', 'content')
			.and('not.be.empty');
		cy.get('meta[name="twitter:title"]')
			.should('have.attr', 'content')
			.and('not.be.empty');
		cy.get('meta[name="twitter:description"]')
			.should('have.attr', 'content')
			.and('not.be.empty');
	});

	it('should have a viewport meta tag for responsiveness', () => {
		cy.get('meta[name="viewport"]')
			.should('have.attr', 'content')
			.and('contain', 'width=device-width');
	});

	it('should have alt attributes for all images', () => {
		cy.get('img').each(($img) => {
			cy.wrap($img).should('have.attr', 'alt').and('not.be.empty');
		});
	});

	it('should have a favicon', () => {
		cy.get('link[rel="icon"]')
			.should('have.attr', 'href')
			.and('not.be.empty');
	});

	it('should have a correct HTML lang attribute', () => {
		cy.document()
			.its('documentElement')
			.should('have.attr', 'lang')
			.and('not.be.empty');
	});

	it('should have structured data (JSON-LD or microdata)', () => {
		cy.get('script[type="application/ld+json"]').should('exist');
	});

	it('should have a mobile-friendly design', () => {
		cy.viewport('iphone-6');
		cy.get('meta[name="viewport"]')
			.should('have.attr', 'content')
			.and('contain', 'width=device-width');
	});
};

describe('SEO Optimization Tests', () => {
	const pages = [
		{ name: 'Home Page', url: '/' },
		{ name: 'About Page', url: '/about' },
		{ name: 'Contact Page', url: '/contact' },
	];

	locales.forEach((locale: string) => {
		pages.forEach((page) => {
			describe(`${locale.toUpperCase()}: ${page.name}`, () => {
				beforeEach(() => {
					// Visit the page before each test
					cy.visit(`http://localhost:3000/${locale}${page.url}`);
				});
				seoChecks();
			});
		});
	});
});
