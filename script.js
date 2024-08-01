const buttonA = dacument.querySelector('#bottonA')
const headingA = document.querySelector('#headingA')

buttonA.oneclick=() => {
    const name = prompt('what is you name?');
    alert(`hello ${name}, nice to see you!`);
    headingA.textContent = `welcome ${name}`;
};

let myName ='ben';
myName = 'bob';

let myname = 'ben'

const pi = 3.14;

let int = 4;
let float = 4.4;
