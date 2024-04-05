// Fetch Request -> JSON placeholder
// https://jsonplaceholder.typicode.com/

export async function getPhotos() {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((json) => {
            let photoContainer = document.querySelector('.photoContainer')
            console.log(json.thumbnailUrl)
            let count = 0;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++, count++) {
                    let image = document.createElement('img')
                    image.setAttribute('src', json[count].thumbnailUrl)
                    image.setAttribute('class', 'photo')
                    photoContainer.appendChild(image)
                    image.onclick = function() {
                        let rand = Math.floor(Math.random() * 4999)
                        image.setAttribute('src', json[rand].thumbnailUrl)
                    }
                }
                photoContainer.appendChild(document.createElement('br'))
            }
        });
}

export async function grabSprints() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            json.forEach((element, index) => {
                let sprinna = document.querySelector(".sprintContainer");
                let newTodo = document.createElement("div");
                newTodo.setAttribute("class", "todo");
                newTodo.innerHTML = `${index + 1}: ${element.title}`;
                sprinna.append(newTodo);
            });
        });
}

export const getCats = async() => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    console.log(data);
    const url = data[0].url;

    const cat = document.querySelector('.animal');
    cat.src = url;

}

export const getDogs = async() => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonData = await response.json();
    console.log(jsonData);
    const url = jsonData.message;

    const dog = document.querySelector('.animal');
    dog.src = url;
}