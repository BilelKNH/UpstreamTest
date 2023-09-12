import User from '../support/user'

let submitButton = '#submit-button'
let gender = '#gender'
let firstName = 'first-name'
let lastName = 'last-name'
let phone = ':nth-child(6)'
let description = ':nth-child(8)'

describe('Test du formulaire de contact', () => {

  before(() => {
    cy.visit('/')
  })
  it('verification formulaire vide', () => {
    let verifForm = 'Validation errors occurred. Please confirm the fields and submit it again.'
    
    cy.get(submitButton).click().as('validateForm')

  })

  it('Vérifier les messages d erreur des champs requis', () => {
    let verifString = 'Please fill the required field.'
    
    //firstName
    cy.get(firstName).should('contain.text',verifString)
    //lastName
    cy.get(lastName).should('contain.text',verifString)
    //phone
    cy.get(phone).should('contain.text',verifString)

  })
  
  /*
  it("Remplir le formulaire correctement", () => {

    // Récupération de l'utilisateur
    let user = new User()
    user.getRandomUser()
    cy.log(user.id)


    let errorForm = 'Failed to send your message. Please try later or contact the administrator by another method.'
    //gender
    cy.get(gender).type({gender})

    //firstname
    cy.get(firstName).type('Bilel')

    //lastname
    cy.get(lastName).type('Khinache')
    
    //phone
    cy.get(phone).type('0777868102')

    //Description
    cy.get(description).type('Lorem ipsum')

    // Validation du formulaire
    cy.get(submitButton).click().as('validateForm')
    cy.get(submitButtonResponse).should('not.contain',errorForm)
 

  })
  */
})