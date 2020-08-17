const students = [
    {id: 1, name: "Rahim"},
    {id: 2, name: "Karim"},
    {id: 3, name: "Solim"},
];

const names = [];
for (let i = 0; i < students.length; i++){
    const element = students[i].name;
    names.push(element);
}
console.log(names);


const ids = students.map(s => s.id);
const names2 = students.map(s => s.name);
console.log(ids);
console.log(names2);

const biggers = students.filter(s => s.id > 1);
console.log(biggers);

const specific = students.find(s => s.id > 1);
console.log(specific);