

class User {

    constructor(id, gender, firstname, lastname, phone) {
        this.id = id
        this.gender = gender
        this.firstname = firstname
        this.lastname = lastname
        this.phone = phone
    }

    getRandomUser(limit=10) {
        // Récupération d'un élément aléatoire 
        let randomElement = Math.floor(Math.random() * limit)
        cy.request({
            method: 'GET',
            url: 'https://dummyapi.io/data/v1/user?limit='+ limit,
            headers: {
                'app-id': '61f4248c9d9bb038eaf0c6c0'
              },
          }).then((resp) => {
            this.id = resp.body.data[randomElement].id
            this.getUserFromId()
          })
      }

    getUserFromId() {
        // Récupération d'un élément et de son ID
        cy.request({
            method: 'GET',
            url: 'https://dummyapi.io/data/v1/user/'+ this.id,
            headers: {
                'app-id': '61f4248c9d9bb038eaf0c6c0'
              },
          }).then((resp) => {
            this.firstname = resp.body.firstName
            this.lastname = resp.body.lastName
            cy.log(this.firstname).as('firstname')
            cy.log(this.lastname).as('lastname')
          })
      }
}
export default User