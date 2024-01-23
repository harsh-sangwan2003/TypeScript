// type Obj = {

//     height:number,
//     age:number,
//     gender?:string
// }

interface Obj {

    height: number,
    age: number,
    gender?: string
}

// Interfaces can be extended but types cannot.
interface NewObj extends Obj {

    scholar: string
}

let obj1: Obj = {

    height: 12,
    age: 13,
    gender: "male"
}

let obj2: Obj = {

    height: 13,
    age: 14,
    gender: "male"
}

let obj3: Obj = {

    height: 14,
    age: 15,
}

let obj4: NewObj = {

    height: 42,
    age: 13,
    scholar: "Yes"
}