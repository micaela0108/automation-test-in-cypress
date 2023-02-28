describe('Automation Wikipedia Search', () => {
  it('Visits Google, searches for "automation", clicks on the Wikipedia link and verifies information on the page', () => {
    cy.visit('https://www.google.com');
    cy.get('button:contains("Aceptar todo")').click();
    cy.get('input[name="q"]').type('automatización{enter}');
    cy.wait(6000)
    cy.contains('Automatización - Wikipedia, la enciclopedia libre').click();
    //cy.screenshot('wikipedia-automation-page');
    });
  });

