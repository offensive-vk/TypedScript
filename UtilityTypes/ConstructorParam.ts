/**
 * Constructs a tuple or array type from the types of a constructor function type. It produces a tuple type with all the parameter types (or the type never if Type is not a function).
 */
type T0 = ConstructorParameters<ErrorConstructor>;

type T00 = [message?: string]
type T1 = ConstructorParameters<FunctionConstructor>;

type T11 = string[]
type T2 = ConstructorParameters<RegExpConstructor>;

type T22 = [pattern: string | RegExp, flags?: string]

class SampleClass {
    constructor(a: number, b: string) { }
}

type T3 = ConstructorParameters<typeof SampleClass>;

type T33 = [a: number, b: string]
type T4 = ConstructorParameters<any>;

type T44 = unknown[]
