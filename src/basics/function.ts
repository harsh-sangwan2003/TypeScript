type UserName = (n: string, m: string) => string;

const fn: UserName = (n, m) => {

    return n + m;
}

// Function with rest params
function func2(...n: number[]): number[] {

    return n;
}

// Function with object
interface Product {

    name: string,
    stock: number,
    price: number,
    photo: string
}
type GetDataType = (product: Product) => void;

const getDataType: GetDataType = (product) => {

    console.log(product);
}

// never type
const errorHandler = (): never => {

    throw new Error();
}

type ThemeMode = "light" | "dark";

const mode: ThemeMode = "dark";