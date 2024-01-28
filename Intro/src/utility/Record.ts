interface UserInfo{

    age:number
}

type UserObj = "john" | "levi" | "elon";

const users:Record<UserObj,UserInfo> = {

    john:{age:34},
    levi:{age:34},
    elon:{age:34},
}