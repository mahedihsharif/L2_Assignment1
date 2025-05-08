Here are some important typescript interview question:

1. What are some differences between interfaces and types in TypeScript?

Answer: Difference between interfaces vs types in TypeScript→ We know TypeScript is a very powerful tool which is applied to type systems in JavaScript. So interface and type is very useful in TypeScript. 
If we see in the first time interface and type we can say these are similar but these are different now i explain how these are different and when we will use interface and when we will use type with proper example--→

Interface: Interface is like structure or shape of an object where you can say which property will stay and what will be properties type like given below example:

interface User {
  name: string;
  email: string;
  age?: number; 
}

Type: type is very flexible. It is not only an object it also gives primitive type, union type, tuple type
Here is an example:

type User = {
  name: string;
  email: string;
  age?: number;
};

You can also make union or intersection using type.

Union Example:
type Status = "success" | "error" | "loading";

function showStatus(status: Status) {
  console.log("Current status:", status);
}

showStatus("success");
showStatus("error"); 
showStatus("loading");  

 Here we pass any Status value inside the function that is true and return true but if we pass any false or wrong value inside the function it returns false.

Intersection Example:

Intersection means to add more types in one type.

Here is an example:

type User = {
  name: string;
  email: string;
};

type Admin = {
  role: string;
};

type AdminUser = User & Admin;

const admin1: AdminUser = {
  name: "Mahedi",
  email: "mahedi@example.com",
  role: "superadmin"
};

Here, AdminUser is a combination of User & Admin.



Interface Vs Type:
1. Interface use extends. Type is use & sign for intersection.
2. Declaration: We can use more interfaces using the same name and all properties are merged but in type we can’t use more than the same one name.
3. In interface we can’t use intersection or union only we can use extends but in type we can use intersection and union.
4. Object shape is preferable in interface but in type object shape is possible.
5. We can only use non primitive data type in interface but in type we use primitive and not primitive data type.
6. Performance is more fast in interface, in type performance is more slow then interface.


When can we use interfaces and types?
Interface: In this case when we will make an object structure or shape and this object structure is extended for another structure in that case we will use an interface. 
 
Example:

interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name = "Tommy";
  makeSound() {
    console.log("ghew ghew");
  }
}


Type: when we will make union type, primitive type or tuple type we will use type.

Example:
type Status = "success" | "error" | "loading";

type Point = [number, number];

type res= 
  | { status: "success"; data: string }
  | { status: "error"; message: string };



We can use interface and type together 
Here is an example:

interface Person {
  name: string;
}

type Developer = Person & {
  skills: string[];
};


Final Explanation:  In TypeScript Interface and Type are very powerful if i use structure or shape of an object and probably it needs to extend that time i will use interface. And if i use type mapping, union or tuple i can use type.



2. What is the use of the keyof keyword in TypeScript? Provide an example.

Keyof is a utility keyword of TypeScript which is used to make an union of all keys of an object type. It is very useful for generic programming and type safe code.
keyof takes an object type and returns a union of its keys as string literals.

Here given an example:

type Person = {
  name: string;
  age: number;
  email: string;
};

type PersonKeys = keyof Person; 
//"name" | "age" | "email"

Here PersonKeys type will be "name" | "age" | "email" that means Person type all keys are union in PersonKeys.



3. Explain the difference between any, unknown, and never types in TypeScript.

In TypeScript any, unknown and never types are very important and every type is used in different cases. I am explaining every type with a proper example below.

Any type: any means anything it totally stops the checking of typescript types when you don’t know about the variable type you can use any type. If you use any type you never type safely. So it’s good to avoid any type if possible.

Here a given example:

let value: any;

value = 10;
value = "Hello";
value = true;

This value will assign without type checking
value.toUpperCase(); // if it give wrong answer it never check type


Unknown types store any type of value but you can’t use its value directly until you check the type. It's better for type safety than any type.

Here an example: 

let value: unknown;

value = 10;
value = "Hello";

value.toUpperCase(); //you can use this way it will give you an error.

if (typeof value === "string") {
  console.log(value.toUpperCase());}


When you don’t know your type but if you want to save your type you can use unknown.


Never: never type means this type of value that never happened. It is used for that function that never returns any value.

Here given an example:

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

Never use tite type checking and exhaustiveness-check specially in switch-case or type guard.

