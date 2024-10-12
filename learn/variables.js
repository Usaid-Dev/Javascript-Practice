// var, let, const 

var name = 'Usaid';

var name = 'Usaid Asif';

var age = '10';

var age = '19';

console.log(name);
console.log(age);

// in var when we re declare it value get updated

let name = 'Usaid';
name = 'Usaid Asif';
let age = '10';
age = '19';

{
    let name = "John"
    let age = "25"
    console.log(name)
    console.log(age)
}

// declaration
let number;
// storing value
number = 13;

console.log(name);
console.log(age);
console.log(number);

// in let when we re declare it value didn't get updated
// for updating just use the name dont re declare it example how to do it: name = "Usaid Asif";
// but you can re declare it by block. Block means this: {} and this just stay in the bracket

const name = 'Usaid';

{
    const name = 'Usaid Asif'
    console.log(name);
}

console.log(name);

// in const when we re declare it value didn't get updated
// for updating just use the block method like let but updated one will just stay inside the block