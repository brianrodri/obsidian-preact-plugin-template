import { FunctionComponent } from "preact";
import { useEffect } from "react";

export type FooProps = { bar: number };

export const Foo: FunctionComponent<FooProps> = ({ bar }) => {
    useEffect(() => console.log(bar), [bar]);

    return <>I got: {bar}!</>;
};
