let person1 = {
name : "Vaishvik",
city : "Shimla",
age : 24,
skills : {
	skill1 : "Java",
	skill2 : "JavaScript",
	skill3 : "React"
	}
};

const jsonData = JSON.stringify(person1); // converted object into JSON string

const person1copy = JSON.parse(jsonData); // converted JSON string back into JavaScript object

console.log(person1copy);

// reference copy, shallow copy and deep copy



