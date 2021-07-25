// React.FunctionComponent provides an implicit definition of children (see below) - however there are some issues
// with the implicit children type (e.g. DefinitelyTyped#33006), and it might be better to be explicit about components that consume children, anyway.

export type PropsWithChildren<T = {}> = T & { children?: React.ReactNode };
