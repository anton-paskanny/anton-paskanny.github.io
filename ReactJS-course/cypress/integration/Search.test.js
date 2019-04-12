xdescribe ('Search', () => {
    it ('Search exact movie', () => {
        const strToSearch = 'Spider-Man 2';
        const regExp = new RegExp(strToSearch, '');
        cy.visit ('/');
        cy.get('.search-panel__input').type('Spider-Man 2');
        cy.get('.search-filter__search-btn').click();
        cy.get('.main-spinner').should('exist');
        cy.wait(1000);
        cy.get('.movie__title').each($el => cy.wrap($el).invoke('text').should('match', regExp));
    });

    it ('Click exact movie', () => {
        cy.get('.movie__title').first().click();
        cy.wait(500);
        cy.url().should('include', '/movie/');
    });
});