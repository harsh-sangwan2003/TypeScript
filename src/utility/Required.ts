type User3 = {

    name: string,
    email: string
}

// Opposite of Partial
type User4 = Required<User3>

const obj: Required<User3> = {

    name: "Harsh",
    email: "abc@gmail.com"
}