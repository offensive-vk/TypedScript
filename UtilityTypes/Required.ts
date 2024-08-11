// Required : Constructs a type consisting of all properties of Type set to required. The opposite of Partial.

interface Props {
    a?: number;
    b?: string;
}

interface AnotherProps extends Props { };

const object: Props = { a: 5 };
const objRequired: Required<Props> = { a: 5 }; // Error
const objAnother: Required<Props> = { a: 10, b: "" }; // Ok