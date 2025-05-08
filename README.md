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
