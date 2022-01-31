describe('second: Second component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=second--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Second!');
    });
});
