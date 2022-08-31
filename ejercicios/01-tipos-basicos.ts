// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//

let nombre: string = 'Strider';
let hp: number | string = 95;
let estaVivo: boolean = true;

hp = 'FULL';

console.log(nombre, hp);
