class SampleClass{

    constructor(public s:string,private num:number){}
}

// ConstructorParameters<Type>
type RandomClass = ConstructorParameters<typeof SampleClass>