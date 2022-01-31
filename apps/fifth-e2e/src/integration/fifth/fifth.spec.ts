describe('fifth: Fifth component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=fifth--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Fifth!');
    });
});
