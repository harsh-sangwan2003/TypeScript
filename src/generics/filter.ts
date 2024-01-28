type Person2 = {

    name: string,
    age: number
}

const person: Person2[] = [
    {
        name: "abhi",
        age: 12
    },
    {
        name: "kash",
        age: 12
    },
    {
        name: "steve",
        age: 12
    }
]

const filterByPeople = <T,U extends keyof T>(arr: T[], property: U, value: T[U]):T[] => {

    return arr.filter(item => item[property]===value); 
}

const filterByName = filterByPeople(person, "name", "abhi");
console.log(filterByName);