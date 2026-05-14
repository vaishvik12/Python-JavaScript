// let person1 = {
//   name : "sai",
//   age : 23,
//   address : {
//     city : "Shimla",
//     state : "Himachal",
//     town : "Koli"
//   }
// }

// let person2 = {...person1};

// person2.name = "Sahil";
// person2.age = 30;
// person2.address.city = "Pune";

// console.log(person1);
// console.log(person2);

const product1 = {
  name : "iphone 14",
  price : 34000,
  specifications : {
    ram : 6,
    rom : 64,
    processor : "A15"
  },
  fun(){
    console.log("This is a phone");
  }
};

const product2 = JSON.parse(JSON.stringify(product1));
product2.specifications.processor = "Snapdragon 400";


console.log(product1);
console.log(product2);