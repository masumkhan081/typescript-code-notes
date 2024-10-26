let age1:String = "twentyeight";
// age = 28;    #in ts, can't just change the type of value when re-assiging

let myAge: Number = 28; // a type provided or not, can't change value type latter in any use
// myAge = "twentyeight"  #problem

let myTimeOnEarth: Number = 28; //
myTimeOnEarth = 29; // change in value, not in type. works fine

let firstName: string = "masum"; // strict type - 'string' defined

let favNumber: string | number;
favNumber = 2; // ok
favNumber = "two"; // ok
// favNumber = [2]  # array not within number or string. so ...

let ageOfMine: any = "twentyeight"; // any: when type of the value is not certain
ageOfMine = 28; // as the type is 'any' - change in type as well as value works fine.
ageOfMine = true; // as the type is 'any' - change in type as well as value works fine.
ageOfMine = { year: 28, months: 6 }; // as the type is 'any' - change in type as well as value works fine.

let arr = ["1", "2", "3"];
// arr.push(4)  #cause problems as 4 is number where arr elements are in string when defined
arr.push("4"); // type is same as it was defined and initialized. works fine.

let arr2 = []; // empty array, no explicit type mentioned
arr2.push(2); // allow number type elmnt - ok
arr2.push("2"); // allow string type elmnt - ok
console.log(arr2);

let arr3: string[]; // explicitly string type defined
arr3 = ["1", "2"];
//  arr3.push(3);  # number type argument not assignable to string type parameter-arr3

let arr4: (string | number)[]; // explicitly string type defined
arr4 = ["1", "2", 3];
arr4.push(5); // argument falls withing number type or string type

let arr5: any[];
arr5 = [1, "2", true, { key: "value" }]; // as the type

let user = {
  name: "masum khan",
  age: 26,
  isAdmin: true,
};
// user.company ="something ltd. " #can't add new property that was not present firsthand
// user.age = "twenty six";  #cause issue as type of data being changed than how it was defined
// user.age = 28;  #works fine - no type changed

let userObj: {
  name: string;
  age: number;
  isAdmin: boolean;
};
userObj = {
  name: "masum khan",
  age: 26,
  isAdmin: true, // can't miss any property, can't add extra property. all to be present as in type definition
};

//   but what if phone number is not mendary but can be there
let anotherUserObj: {
  name: string;
  age: number;
  isAdmin: boolean;
  phone?: string; // not required
};
let anotheUser = {
  name: "masum khan",
  age: 26,
  isAdmin: true,
  phone: "01833347848",
};

let sum = (a: number, b: number) => {
  return a + b;
};

let sum2 = (a: number, b: number) => {
  return "result: " + a + b; // no output type defined, implicit any
};

/*
let sum23 = (a: number, b: number):number => {
   return "result: " + a + b;   // output type-number and return value type doesn't match
 }; 
 console.log(concat("str-1 ", "str-2"));
*/

/*
let concat = (str: string, str2: string): void => {
  return str + str2; // output type-void but returning value type type is string.
};
console.log(concat("str-1 ", "str-2"));
*/

let multiply = (a: number, b: number, c?: number): void => {
  console.log("result: " + a * b * (c ? c : 1));
};
multiply(2, 3, 4); // parameter c is not required, but filled.
multiply(2, 5); // parameter c is not required, and not used this case.

type UserType = {
  name: string;
  age: number;
  phone?: string;
  theme: "dark" | "light"; // value must be in between these two
};
const getUser = (user: UserType) => {
  console.log(user.name, user.phone);
};
getUser({ name: "mk", age: 28, phone: "01833347848", theme: "light" });

type myFunction = (name: string, serial: number) => string; // takes a string and a number, returns a string
let currentSerial: myFunction = (name, serial) => {
  return "serial-" + serial + ": " + name;
};
console.log(currentSerial("masum", 3));

interface CommonUser {
  userName: string;
  email: string;
  age: number;
}
interface Employee extends CommonUser {
  employeeId: number;
}
const employeeObject: Employee = {
  employeeId: 1, // i can't avoid the id here.
  userName: "test name", //
  email: "someone@gmail.com",
  age: 27,
};
const userObject: CommonUser = {
  userName: "test name", //
  email: "someone@gmail.com",
  age: 27,
};




// index signature 
interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];