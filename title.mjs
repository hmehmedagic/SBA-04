// Main File for Classes and Functions and vars
let body = document.querySelector(".titleContainer .dashboard");

export default class Title {
    constructor(title, src, platform, releaseDate, description) {
        this.title = title;
        this.src = src;
        this.platform = platform;
        this.releaseDate = releaseDate;
        this.description = description;
    }
}

export const postTitle = (title) => {
    // -------parentContainer
    let titleContainer = document.createElement('div');
    titleContainer.setAttribute('class', 'container');
    // title
    let titleHolder = document.createElement('div');
    titleHolder.setAttribute('class', "titler");
    // titleHolder.innerHTML = `Title: ${title.title}`;
    // src
    let srcHolder = document.createElement('img');
    srcHolder.setAttribute('class', "srcer");
    srcHolder.src = title.src;
    // platform
    let platHolder = document.createElement('div');
    platHolder.setAttribute('class', "platformer");
    platHolder.innerHTML = `Platform: ${title.platform}`;
    // release date
    let rDHolder = document.createElement('div');
    rDHolder.setAttribute('class', "releaser");
    rDHolder.innerHTML = `Release Date: ${title.releaseDate}`;
    // description
    let descHolder = document.createElement('div');
    descHolder.setAttribute('class', "descripter");
    descHolder.innerHTML = title.description;

    titleContainer.append(titleHolder);
    titleContainer.append(srcHolder);
    titleContainer.append(platHolder);
    titleContainer.append(rDHolder);
    titleContainer.append(descHolder);
    body.append(titleContainer);
    console.log(title);

}