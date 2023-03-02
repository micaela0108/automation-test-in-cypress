describe('add a product the cart', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/') //visitar la pagina
   })
   it('add to cart', () => {
    cy.wait(1000); //wait 4 seconds
    cy.get('.container img:eq(1)').trigger('mouseover'); //posicionar el mouse sobre la primera imagen
    cy.get('.container img:eq(2)').trigger('mouseover'); //posicionar el mouse sobre la segunda imagen
    cy.get('.container img:eq(3)').click(); // //posicionar el mouse sobre la tercera imagen
    cy.get('.btn.btn-success.btn-lg').click(); //hacer click en boton
    cy.get('.nav-item.active').click();
    cy.wait(1000); //hacer click en boton
    cy.get('a#itemc.list-group-item[onclick="byCat(\'notebook\')"]').click(); //hacer click en la categoria notebooks
    cy.get('a#itemc.list-group-item[onclick="byCat(\'monitor\')"]').click(); //hacer click en la categoria monitores
    cy.wait(1000); // esperar1 segundo
    cy.get('#next2').click(); // pasar a la siguiente pagina
    cy.get('#prev2').click(); // retroceder a la pagina anterior
    cy.get('a.nav-link[href="index.html"]').click(); // hacer click en el seguiente link
    cy.get('a.nav-link[data-toggle="modal"][data-target="#exampleModal"]').click(); // hacer click en el seguiente link
    cy.get('input#recipient-email').click().type('m@ejemplo.com'); //hacer click en el imput y escribir m@ejemplo.com
    cy.wait(1000); // esperar 1 segundo
    cy.get('input#recipient-name').click().type('mica'); // escribir "mica" en el campo name
    cy.wait(1000); // esperar 1 segundo
    cy.get('textarea#message-text').type('test'); // escribir "test" en el campo message
    cy.get('button[onclick="send()"]').click(); // hacer click en enviar
    cy.wait(1000);  // esperar 1 segundo
    cy.get('#cartur').click(); // hacer click en la categoria cartur
    cy.get('#login2').click(); // hacer click en login
    cy.get('body').type('{ctrl+w}') // cerrar browser
    });
  })

    





 
