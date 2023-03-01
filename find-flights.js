describe('search ticket', () => {
  it('find the flight', () => {
    cy.visit('https://www.vueling.com/es')
    cy.get('#onetrust-accept-btn-handler').click();
    cy.wait(4000);
    cy.get('#originInput').click();
    cy.wait(4000);
    cy.get('div.searchbar-popup_header_search input[placeholder="Ciudad, país o aeropuerto"]').type('Madrid'); 
    cy.get('p.list-item').contains('Madrid').click(); 
    cy.wait(4000);
    cy.get('.searchbar-popup_header_search').click();
    cy.get('p.list-item').contains('Alicante').click();
    cy.wait(4000);
    //cy.get('a.ui-state-default.searcbar-datepicker-day-prices--red').click();
    //cy.get('button.mv_button').contains('Aceptar').click();
  })
})