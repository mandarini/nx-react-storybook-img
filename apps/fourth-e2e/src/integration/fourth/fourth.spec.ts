describe('fourth: Fourth component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=fourth--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Fourth!');
    });
});
