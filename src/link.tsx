import { FunctionComponent } from "preact";

export type FooProps = { bar: number };

export const Foo: FunctionComponent<FooProps> = ({ bar }) => <>I got: {bar}!</>;
