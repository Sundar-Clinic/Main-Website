// Test for 404 page
describe('404 Page', () => {
	let locales = ['en', 'ta', 'hi'];
	it('should have 404 handling for non-existent pages', () => {
		cy.visit('http://localhost:3000/non-existent-page', {
			failOnStatusCode: false,
		});
		cy.contains('404').should('exist');
	});
	locales.forEach((locale) => {
		it(`should have 404 handling for non-existent pages with ${locale} locale route`, () => {
			cy.visit(`http://localhost:3000/${locale}/non-existent-page`, {
				failOnStatusCode: false,
			});
			cy.contains('404').should('exist');
		});
	});
});
