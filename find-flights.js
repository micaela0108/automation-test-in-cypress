describe('search ticket', () => {
  beforeEach(() => {
    cy.visit('https://www.vueling.com/es') // visit the page
  })
it('find the flight', () => {
    cy.get('#onetrust-accept-btn-handler').click(); // accept the cookies
    cy.wait(4000); // wait 4 seconds
    cy.get('#originInput').click(); //click on input -- search by id
    cy.wait(4000);
    cy.get('div.searchbar-popup_header_search input[placeholder="Ciudad, país o aeropuerto"]').type('Madrid'); // type in the searchbar the word 'Madrid' for the origin
    cy.get('p.list-item').contains('Madrid').click(); // click on "Madrid"
    cy.wait(4000);
    cy.get('.searchbar-popup_header_search').click(); // click on the destiny searchbar
    cy.get('p.list-item').contains('Alicante').click(); // click on "Alicante" in the list
    cy.wait(4000);
    cy.get('#calendarDaysTable2023324[data-month="3"][data-year="2023"]').click() // select the 24-04-2023 for the start date -- search by id
    cy.wait(4000)//;
    cy.get('#calendarDaysTable2023329[data-month="3"][data-year="2023"]').click() // select the 29-04-2023 for the end date -- search by id
    cy.get('button.mv_button').contains('Aceptar').click(); 
    cy.get('#btnSubmitHomeSearcher').click();
  })
})

/
