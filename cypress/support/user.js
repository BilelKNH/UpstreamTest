class User {
  constructor(id, title, firstname, lastname) {
    this.id = id;
    this.title = title;
    this.gender = this.convertGender()
    this.firstname = firstname;
    this.lastname = lastname;
  }
  
  getRandomUser(limit = 10) {
    // Récupération d'un élément aléatoire
    let randomElement = Math.floor(Math.random() * limit);
    cy.request({
      method: "GET",
      url: "https://dummyapi.io/data/v1/user?limit=" + limit,
      headers: {
        "app-id": "61f4248c9d9bb038eaf0c6c0",
      },
    }).then((resp) => {
      this.id = resp.body.data[randomElement].id;
      this.getUserFromId();
    });
  }
  
  getUserFromId() {
    // Récupération d'un élément et de son ID
    cy.request({
      method: "GET",
      url: "https://dummyapi.io/data/v1/user/" + this.id,
      headers: {
        "app-id": "61f4248c9d9bb038eaf0c6c0",
      },
    }).then((resp) => {
      this.title = resp.body.title
      this.gender = this.convertGender()
      this.firstname = resp.body.firstName;
      this.lastname = resp.body.lastName;
      cy.log(this.firstname).as("firstname");
      cy.log(this.lastname).as("lastname");
      cy.log(this.title).as("title");
      cy.log(this.gender).as("gender");
    });
  }
  
  convertGender() {
    if (this.title === "mr") {
      return "male";
    } else if (this.title === "mrs" || this.title === "ms") {
      return "female";
    } else {
      return "other";
    }
  }
}
export default User;
