describe('third: Third component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=third--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Third!');
    });
});
