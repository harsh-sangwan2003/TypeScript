// NonUllable<Type>
type MyUnion = string|number|boolean|null;
type Union = NonNullable<MyUnion>