// Main File for Classes and Functions and vars
let body = document.querySelector(".characterContainer .dashboard");

export default class Character {
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }
}

export const postChar = (char) => {
    let chrContainer = document.createElement('div')
    chrContainer.setAttribute('class', 'container')
        // -------parentContainer
    let nameHolder = document.createElement('div')
    nameHolder.setAttribute('class', "namer")
    nameHolder.innerHTML = char.name
        // job
    let jobHolder = document.createElement('div')
    jobHolder.setAttribute('class', "jober")
    jobHolder.innerHTML = char.job

    chrContainer.append(nameHolder)
    chrContainer.append(jobHolder)
    body.append(chrContainer)
    console.log(char)

}