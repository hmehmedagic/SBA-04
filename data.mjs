import Character, { postUser } from "./app.mjs";

const homeScreen = () => {
    const dash = document.querySelector('.characterContainer');
    dash.style.display = 'none';
    const header = document.querySelector('.moogleAPI');
    header.style.display = 'block';
    const particles = document.querySelector('#particles-js');
    particles.style.display = 'block';
}

const fetchMe = async(id) => {
    const charCont = document.querySelector('.characterContainer');
    charCont.style.display = 'block';
    const dash = document.querySelector('.dashboard');
    dash.style.display = 'block';
    dash.innerHTML = '';
    const header = document.querySelector('.moogleAPI');
    header.style.display = 'none';
    const particles = document.querySelector('#particles-js');
    particles.style.display = 'none';
    await fetch("https://www.moogleapi.com/api/v1/characters")
        .then((response) => response.json())
        .then((json) => {
            const chars = Object.values(json).filter(value => value.origin === id);
            chars.forEach(char => {
                let user = new Character(char.name, char.job);
                console.log(user);
                postUser(user);
            });
        });
}
const buttons = document.querySelectorAll('.dropdown-content a');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        fetchMe(event.target.id);
    });
});

const homeBtn = document.querySelector('#mainbtn');
homeBtn.addEventListener('click', (event) => {
    homeScreen();
});

// Particles
particlesJS('particles-js',

    {
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

);