import Character, { postChar } from "./character.mjs";
import { getPictures, getCharacterInfo } from "./pictures.mjs";
import Title, { postTitle } from "./title.mjs";

export const PLACEHOLDER_IMG = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a5d33edf-89e4-4be4-a15f-f15058b4d04d/d6vxp07-64a915bb-dce1-42a2-a7b4-b80f72c454c3.png/v1/fill/w_1024,h_1445/chocobo_rider___final_fantasy_chocobo_moogle_chibi_by_pinkplaidrobot_d6vxp07-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1ZDMzZWRmLTg5ZTQtNGJlNC1hMTVmLWYxNTA1OGI0ZDA0ZFwvZDZ2eHAwNy02NGE5MTViYi1kY2UxLTQyYTItYTdiNC1iODBmNzJjNDU0YzMucG5nIiwiaGVpZ2h0IjoiPD0xNDQ1Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvYTVkMzNlZGYtODllNC00YmU0LWExNWYtZjE1MDU4YjRkMDRkXC9waW5rcGxhaWRyb2JvdC00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.dmZ4D6sVcOGhOF5nPytZdyjfqMBIO1SFEipHI_RAH1Q";

const homeScreen = () => {
    const dash = document.querySelector('.characterContainer');
    dash.style.display = 'none';
    const dash2 = document.querySelector('.titleContainer');
    dash2.style.display = 'none';
    const pics = document.querySelector('.picture-container');
    pics.style.display = 'none';
    const header = document.querySelector('.moogleAPI');
    header.style.display = 'block';
    const particles = document.querySelector('#particles-js');
    particles.style.display = 'block';
    document.querySelector('.a-char').src = PLACEHOLDER_IMG;
    document.querySelector('.namer').innerHTML = 'Character';
}

const fetchMe = async(id) => {
    const charCont = document.querySelector('.characterContainer');
    charCont.style.display = 'block';
    const dash = charCont.querySelector('.dashboard');
    dash.style.display = 'block';
    dash.innerHTML = '';
    const titleCont = document.querySelector('.titleContainer');
    titleCont.style.display = 'none';
    const dash2 = titleCont.querySelector('.dashboard');
    dash2.style.display = 'none';
    dash2.innerHTML = '';
    const header = document.querySelector('.moogleAPI');
    header.style.display = 'none';
    const particles = document.querySelector('#particles-js');
    particles.style.display = 'none';
    const pics = document.querySelector('.picture-container');
    pics.style.display = 'none';
    document.querySelector('.a-char').src = PLACEHOLDER_IMG;
    document.querySelector('.namer').innerHTML = 'Character';
    await fetch("https://www.moogleapi.com/api/v1/characters")
        .then((response) => response.json())
        .then((json) => {
            console.log('this is json' + json);
            const chars = Object.values(json).filter(value => value.origin === id);
            chars.forEach(char => {
                let user = new Character(char.name, char.job);
                console.log(user);
                postChar(user);
            });
        });
}

const fetchMe2 = async(id) => {
    const titleCont = document.querySelector('.titleContainer');
    titleCont.style.display = 'flex';
    const dash2 = titleCont.querySelector('.dashboard');
    dash2.style.display = 'block';
    dash2.innerHTML = '';
    const charCont = document.querySelector('.characterContainer');
    charCont.style.display = 'none';
    const dash = charCont.querySelector('.dashboard');
    dash.style.display = 'none';
    dash.innerHTML = '';
    const header = document.querySelector('.moogleAPI');
    header.style.display = 'none';
    const particles = document.querySelector('#particles-js');
    particles.style.display = 'none';
    const pics = document.querySelector('.picture-container');
    pics.style.display = 'none';
    await fetch("https://www.moogleapi.com/api/v1/games")
        .then((response) => response.json())
        .then((json) => {
            console.log('This is json' + json);
            const titles = Object.values(json).filter(value => value.title === id);
            titles.forEach(title => {
                let game = new Title(title.title, title.picture, title.platform, title.releaseDate, title.description);
                console.log(game);
                postTitle(game);
            });
        });
}

const chrbuttons = document.querySelectorAll('#char-content a');
chrbuttons.forEach(button => {
    button.addEventListener('click', (event) => {
        fetchMe(event.target.id);
    });
});


const titlebuttons = document.querySelectorAll('#title-content a');
titlebuttons.forEach(button => {
    button.addEventListener('click', (event) => {
        fetchMe2(event.target.id);
    });
});

const homeBtn = document.querySelector('#mainbtn');
homeBtn.addEventListener('click', () => {
    homeScreen();
});

const picBtn = document.querySelector('#endBtn');
picBtn.addEventListener('click', () => {
    getPictures();
})

const charBtn = document.querySelector('.click-me');
charBtn.addEventListener('click', () => {
    getCharacterInfo();
})

// Particles
const initialSettings = {
    "particles": {
        "number": {
            "value": 30,
            "density": {
                "enable": true,
                "value_area": 169.717
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 5,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 10,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
    }
}

particlesJS('particles-js', initialSettings);