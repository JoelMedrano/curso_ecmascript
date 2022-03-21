function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}

// es6
function newFunction2(name = "oscar", age = 32, country = "MX") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Ricardo", "23", "CO");


let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
  + "otra frase epica que necesitamos.";

// es6
let  lorem2 = `otra frase épica que necesitamos,
ahora es otra frase épica
`;

console.log(lorem);
console.log(lorem2);


let person = {

  'name': 'joel',
  'age': 30,
  'country': 'PE'

}
console.log(person);

let {name, age, country} = person;
console.log(name, age);

let team1 = ['joel', 'oscar', 'carlos'];
let team2 = ['tiffany', 'angela', 'rocio'];

let education = ['david', ...team1, ...team2];
console.table(education);

{
  var globalVar = "Global Var";
}

{
  let globalLet = "Global Let";
  console.log(globalLet);
}

console.log(globalVar);

const a = 'b';

a = 'a';
console.log(a);

let nombre = 'joel';
let edad = 30;
// es5
obj = {nombre: nombre, edad: edad}
// es6
obj2 = {nombre, edad};

console.log(obj);
console.log(obj2)


const nombres = [

  {nombre: 'joel', edad: 30},
  {nombre: 'tiffany', edad : 29}

];

let listOfNames = nombres.map(
  function(item){
    console.log(item.nombre);
  }
);

let listOfNames2 = nombres.map(item => console.log(item.edad));

/* const listOfNames3 = (nombre, edad, pais) => {
  ...
} */

const square = num => num * num;


const helloPromise = () => {

  return new Promise((resolve, reject) => {
    if(false){
      resolve('Hey!');
    }else{
      reject('Ups!');
    }
  })
};

helloPromise()
.then(response => console.log(response))
.then(() => console.log('hola'))
.catch(error => console.log(error));

class calculator{

  constructor(){
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB){
    this.valueA = valueA;
    this.valueB = valueB;

    return this.valueA + this.valueB;
  }
}

const calc = new calculator();

console.log(calc.sum(2,5));

import { hello} from 'module.js';

hello();

function* helloWorld(){

  if(true){
    yield 'hello, ';
  }

  if(true){
    yield 'world';
  }

};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);