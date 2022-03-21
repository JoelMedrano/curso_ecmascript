const string = 'JavaScript es maravilloso, con JavaScript puedo crear el futuro dela web';
const replaceString = string.replace('JavaScript', 'Python');
console.log(replaceString);

const replaceString2 = string.replaceAll('JavaScript', 'Python');
console.log(replaceString2);

class Message{
    #show(val){
        console.log(val);
    };
    /* get #add(val){

    } */
}

const message = new Message();
message.show('Hola!');

const promise1 = new Promise((resolve, reject) =>reject('1'));
const promise2 = new Promise((resolve, reject) =>resolve('2'));
const promise3 = new Promise((resolve, reject) =>resolve('3'));

Promise.any([promise1,promise2,promise3])
.then(response => console.log(response))

/* class anyClass{

    constructor(element){
        this.ref = new WeakRef(element)
    }
    {...}
} */

let isTrue = true;
let isFalse = false;

console.log(isTrue &&= isFalse);


let isTrue1 = true;
let isFalse2 = false;

console.log(isTrue1 ||= isFalse2);

let isTrue3 = undefined;
let isFalse3 = false;

console.log(isTrue3 ??= isFalse3);