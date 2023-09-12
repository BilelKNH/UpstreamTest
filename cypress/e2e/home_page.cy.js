import User from "../support/user";

let gender = "#gender";
let firstName = "#first-name";
let lastName = "#last-name";
let company = "#company";
let phone = "#phone";
let message_title = "#message-title";
let message = "#message";

let contact_form = "#contact-form";

let popin = ".popin";
let popin_message = "#popin-message";
let popin_success = ".popin-success";
let popin_success_msg = "Le message a été envoyé.";
let popin_error_msg = "Veuillez remplir tous les champs obligatoires.";

let phone_value = "0102030405";
let company_value = "Microsoft";
let message_title_value = "Objet : tester le formulaire";
let message_value = "Message de test";

let user;

describe("Test du formulaire", () => {
  beforeEach(() => {
    cy.visit("/");
    
    user = new User();
    user.getRandomUser();
    
    cy.log(user.id);
  });
  
  it("Vérifie que le formulaire est invalide sans genre", () => {
    cy.get(firstName).type(user.firstname);
    cy.get(lastName).type(user.lastname);
    cy.get(message).type(message_value);
    
    cy.get(contact_form).submit();
    
    cy.get(popin).should("be.visible");
    
    cy.get(popin_message).should("contain", popin_error_msg);
    
    cy.get(popin_success).should("not.exist");
  });
  
  it("Vérifie que le formulaire est invalide sans prénom", () => {
    cy.get(gender).select(user.gender);
    cy.get(lastName).type(user.lastname);
    cy.get(message).type(message_value);
    
    cy.get(contact_form).submit();
    
    cy.get(popin).should("be.visible");
    
    cy.get(popin_message).should("contain", popin_error_msg);
    
    cy.get(popin_success).should("not.exist");
  });
  
  it("Vérifie que le formulaire est invalide sans nom", () => {
    cy.get(gender).select(user.gender);
    cy.get(firstName).type(user.lastname);
    cy.get(message).type(message_value);
    
    cy.get(contact_form).submit();
    
    cy.get(popin).should("be.visible");
    
    cy.get(popin_message).should("contain", popin_error_msg);
    
    cy.get(popin_success).should("not.exist");
  });
  
  it("Vérifie que le formulaire est invalide sans message personnel", () => {
    cy.get(gender).select(user.gender);
    cy.get(firstName).type(user.firstname);
    cy.get(lastName).type(user.lastname);
    
    cy.get(contact_form).submit();
    
    cy.get(popin).should("be.visible");
    
    cy.get(popin_message).should("contain", popin_error_msg);
    
    cy.get(popin_success).should("not.exist");
  });
  
  it("Vérifie que le formulaire est valide (sans champs optionels)", () => {
    cy.get(gender).select(user.gender);
    cy.get(firstName).type(user.firstname);
    cy.get(lastName).type(user.lastname);
    cy.get(message).type(message_value);
    
    cy.get(contact_form).submit();
    
    cy.get(popin).should("be.visible");
    
    cy.get(popin_message).should("contain", popin_success_msg);
    
    cy.get(popin_success).should("exist");
  });
  
  it("Vérifie que le formulaire est valide (avec champs optionels)", () => {
    cy.get(gender).select(user.gender);
    cy.get(firstName).type(user.firstname);
    cy.get(lastName).type(user.lastname);
    cy.get(message).type(message_value);
    
    cy.get(message_title).type(message_title_value),
    cy.get(company).type(company_value);
    cy.get(phone).type(phone_value);
    
    cy.get(contact_form).submit();
    
    cy.get(popin).should("be.visible");
    
    cy.get(popin_message).should("contain", popin_success_msg);
    
    cy.get(popin_success).should("exist");
  });
});
