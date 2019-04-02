describe ('App', () => {
    it ('loads', () => {
        cy.visit ('/');
        cy.get('.main-header__title').contains('netflixroulette');
    });
});