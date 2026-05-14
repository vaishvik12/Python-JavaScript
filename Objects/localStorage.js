const person = {
  name : "Khudeja",
  age : 21,
  city : "Pune",
  skills : ["Java","DB","Aws"]  
};


// let name = person.name;
// let age = person.age;

let {name, age, state} = person;

console.log(name);
console.log(age);
console.log(state);

// const personJSON = JSON.stringify(person);

// localStorage.setItem("person",personJSON);

// const lsPerson = localStorage.getItem("person");

// const personObj = JSON.parse(lsPerson);

// console.log(personObj);