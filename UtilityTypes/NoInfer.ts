// Blocks inferences to the contained type. Other than blocking inferences, NoInfer<Type> is identical to Type.

Example
function createStreetLight<C extends string>(
    colors: C[],
    defaultColor?: NoInfer<C>,
) { }
createStreetLight(["red", "yellow", "green"], "red");  // OK
createStreetLight(["red", "yellow", "green"], "blue");  // Error