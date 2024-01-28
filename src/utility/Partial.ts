type User = {

    name:string,
    email:string
}

// To make the properties optional
type User2 = Partial<User>