const person = {
    name: 'Bijeyta'
};

const newPerson = {
    ...person,
    age: 22
}

console.log(newPerson);


const filter = (...args) => {
    return args.filter(el => el === 1)
}

console.log(filter(1,2,3));


// Destructuring elements

// const number = [1,2,3];
// [num1, num2] = number;
// console.log(num1, num2);

const number = [1,2,3];
[num1, ,num2] = number;
console.log(num1, num2);