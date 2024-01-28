interface Person {

    name:string,
    email:string
}

const myObj: Person = {

    name: "Harsh",
    email: "abc@gmail.com"
}

const getName = (key: keyof Person): string => {

    return myObj[key];
}

// keyof or keyIndex
const getEmail = (key: keyof Person): string => {

    return myObj[key];
}

console.log(getName("email"));

let key = "name";
console.log(myObj[key as keyof Person]);