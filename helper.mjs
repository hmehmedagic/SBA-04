// Fetch Request -> Moogle API
// https://www.moogleapi.com/
import { PLACEHOLDER_IMG } from "./data.mjs";

export const getPictures = async() => {
    const picCont = document.querySelector('.picture-container');
    picCont.style.display = 'flex';
    const photoContainer = document.querySelector('.photoContainer');
    photoContainer.innerHTML = '';
    const header = document.querySelector('.moogleAPI');
    header.style.display = 'none';
    const particles = document.querySelector('#particles-js');
    particles.style.display = 'none';
    const dash = document.querySelector('.characterContainer');
    dash.style.display = 'none';
    const dash2 = document.querySelector('.titleContainer');
    dash2.style.display = 'none';
    await fetch("https://www.moogleapi.com/api/v1/characters")
        .then((response) => response.json())
        .then((json) => {
            let photoContainer = document.querySelector('.photoContainer')
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let rando = Math.floor(Math.random() * 276)
                    let image = document.createElement('img')
                    try {
                        image.setAttribute('src', json[rando].pictures[0].url);
                    } catch (error) {
                        image.setAttribute('src', PLACEHOLDER_IMG);
                    }
                    image.setAttribute('class', 'photo')
                    image.style.width = '150px';
                    image.style.height = '150px';
                    photoContainer.appendChild(image)
                    image.onclick = function() {
                        let rand = Math.floor(Math.random() * 275)
                        image.setAttribute('src', json[rand].pictures[0].url)
                    }
                }
                photoContainer.appendChild(document.createElement('br'))
            }
        });
}

export const getCharacterInfo = async() => {
    const response = await fetch("https://www.moogleapi.com/api/v1/characters");
    const data = await response.json();
    console.log(data);
    const nameInput = window.prompt('Select name of character.');
    const ffInput = window.prompt('Select which Final Fantasy Title they are from.');

    try {
        const chars = Object.values(data).filter(value => value.origin ===
            ffInput).filter(value => value.name === nameInput);
        console.log(chars);
        const char = document.querySelector('.a-char-container');
        char.querySelector('.a-char').src = chars[0].pictures[0].url;
        char.querySelector('.namer').innerHTML = nameInput;
    } catch (error) {
        window.alert('Character does not exist in this api.');
    }
}