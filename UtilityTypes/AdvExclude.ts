type T0_ = Exclude<"a" | "b" | "c", "a">;

type T0 = "b" | "c"
type T1_ = Exclude<"a" | "b" | "c", "a" | "b">;

type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>;


type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "square"; x: number }
    | { kind: "triangle"; x: number; y: number };

type T3 = Exclude<Shape, { kind: "circle" }>

export { }