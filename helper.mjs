// Fetch Request -> Moogle API
// https://www.moogleapi.com/

export const getPictures = async() => {
    const picCont = document.querySelector('.picture-container');
    picCont.style.display = 'flex';
    const photoContainer = document.querySelector('.photoContainer');
    photoContainer.innerHTML = '';
    const header = document.querySelector('.moogleAPI');
    header.style.display = 'none';
    const particles = document.querySelector('#particles-js');
    particles.style.display = 'none';
    await fetch("https://www.moogleapi.com/api/v1/characters")
        .then((response) => response.json())
        .then((json) => {
            let photoContainer = document.querySelector('.photoContainer')
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let rando = Math.floor(Math.random() * 276)
                    let image = document.createElement('img')
                    image.setAttribute('src', json[rando].pictures[0].url);
                    image.setAttribute('class', 'photo')
                    image.style.width = '150px';
                    image.style.height = '150px';
                    photoContainer.appendChild(image)
                    image.onclick = function() {
                        let rand = Math.floor(Math.random() * 276)
                        image.setAttribute('src', json[rand].pictures[0].url)
                    }
                }
                photoContainer.appendChild(document.createElement('br'))
            }
        });
}


/*export async function getPhotos() {
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

export const getCats = async() => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    console.log(data);
    const url = data[0].url;

    const cat = document.querySelector('.animal');
    cat.src = url;

}*/