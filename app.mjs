// Main File for Classes and Functions and vars
let body = document.querySelector(".characterContainer .dashboard");

export default class Character {
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }
}
// ----------------------------------------[CLASSES]
export const getName = (user) => {
    console.log(`Good Evening Welcome. My name is ${user.name}`);
}
export const getJob = (user) => {
    console.log(`My role is ${user.job} `);
}

export const postUser = (user) => {
        let chrContainer = document.createElement('div')
        chrContainer.setAttribute('class', 'container')
            // -------parentContainer
        let nameHolder = document.createElement('div')
        nameHolder.setAttribute('class', "namer")
        nameHolder.innerHTML = user.name
            // job
        let jobHolder = document.createElement('div')
        jobHolder.setAttribute('class', "jober")
        jobHolder.innerHTML = user.job

        chrContainer.append(nameHolder)
        chrContainer.append(jobHolder)
        body.append(chrContainer)
        console.log(user)

    }
    // ----------------------------------------[FUNCTIONS]