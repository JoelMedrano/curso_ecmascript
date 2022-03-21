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