const data = {
    frontend: 'oscar',
    backend: 'joel',
    design: 'ana',
}

const entries = Object.entries(data);
console.table(entries);
console.table(entries.length);

const data1 = {
    frontend: 'oscar',
    backend: 'joel',
    design: 'ana',
}

const values = Object.values(data1);
console.table(values);
console.log(values.length);

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '-----'));

console.log('food'.padEnd(12, '   -----'));

