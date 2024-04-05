// Instance Files for new Instances of classes and funcCall()

import Employee, { getName, getEmail, getPhone, fetchMe } from "./app.mjs";
import { getPhotos, grabSprints, getCats, getDogs } from "./helper.mjs";

let testEmployee = new Employee("Chester Tester", "@biz.gov", "000-000-0000");

console.log(getName(testEmployee));
console.log(getPhone(testEmployee));
console.log(getEmail(testEmployee));
// ----------------------------------------[INSTANCES]
fetchMe();
grabSprints()
getPhotos()

// ----------------------------------------[Initialized_Funcs()]
const selector = () => {
    const myBtn = document.querySelector('.click-me');
    myBtn.addEventListener('click', () => {
        const userInput = window.prompt('Cat or Dog?').toLocaleLowerCase();
        if (userInput === 'dog') getDogs();
        else if (userInput === 'cat') getCats();
        else window.alert('Please select dog or cat.');
    });

}
selector();