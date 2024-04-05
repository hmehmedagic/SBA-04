// Main File for Classes and Functions and vars
let body = document.querySelector(".dashboard");

export default class Employee {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}
// ----------------------------------------[CLASSES]
export const getName = (user) => {
    console.log(`Good Evening Welcome to TechBiz. My name is ${user.name}`);
}
export const getEmail = (user) => {
    console.log(`At TechBiz my Official email is ${user.name} ${user.email} `);
}

export const getPhone = (user) => {
    console.log(`I can be Contacted at ${user.phone}`);
}


export const postUser = (user) => {
    let empContainer = document.createElement('div')
    empContainer.setAttribute('class', 'container')
        // -------parentContainer
    let nameHolder = document.createElement('div')
    nameHolder.setAttribute('class', "namer")
    nameHolder.innerHTML = user.name
        // email
    let emailHolder = document.createElement('div')
    emailHolder.setAttribute('class', "emailer")
    emailHolder.innerHTML = user.email
        // phone
    let phoneHolder = document.createElement('div')
    phoneHolder.setAttribute('class', "caller")
    phoneHolder.innerHTML = user.phone

    empContainer.append(nameHolder)
    empContainer.append(emailHolder)
    empContainer.append(phoneHolder)
    body.append(empContainer)
    console.log(user)

}

export const fetchMe = async() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                json.forEach((element) => {
                    let user = new Employee(element.name, element.website, element.phone);
                    console.log(user)
                    postUser(user)
                });
            });
    }
    // ----------------------------------------[FUNCTIONS]