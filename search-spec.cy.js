describe('Automation Wikipedia Search', () => {
  it('Visits Google, searches for "automation", clicks on the Wikipedia link and verifies information on the page', () => {
    cy.visit('https://www.google.com'); // visita la pagina
    cy.get('button:contains("Aceptar todo")').click(); // hace click en el boton " aceptar todo" 
    cy.get('input[name="q"]').type('automatización{enter}'); // esbribe "automarizacion" en el buscador
    cy.wait(4000) // espera 4 segundos
    cy.contains('Automatización - Wikipedia, la enciclopedia libre').click(); // hace click en la pagina de Wikipedia
    //cy.screenshot('wikipedia-automation-page'); // hace screenshot a la pagina
    });
  });

