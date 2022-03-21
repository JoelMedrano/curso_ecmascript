const obj = {
    name: 'oscar',
    age: 32,
    country: 'MX',
};

let {country, ...all} = obj;
console.log(all);

const ob1j1 = {
    name: 'oscar',
    age: 32,
};

const ob2 = {
    ...ob1j1,
    country: 'MX',
};

console.table(ob2);

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('hello world'), 3000)  
        : reject(new Error('Test Error'))
    })
}

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo'));


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2022-03-20');

const year = match[1];
const month = match[2];
const day = match[3];

console.group('regex');
console.log(year, month, day);
console.groupEnd();