export type CurriedBinaryFunctionI = (arg1: unknown, arg2: unknown) => any;
export type CurriedBinaryFunctionII = (arg1: unknown) => (arg2: unknown) => any;
export type BinaryFunction = CurriedBinaryFunctionI | CurriedBinaryFunctionII;
export type NodeCallback<T> = (err: Error | null, ...args: ReadonlyArray<T>) => any;
export type NullaryFunction = () => any;
export type PredicateFunction<A> = (a: A) => boolean;
export type CurriedTernaryFunctionI = (arg1: unknown, arg2: unknown) => (arg3: unknown) => any;
export type CurriedTernaryFunctionII = (arg1: unknown, arg2: unknown) => (arg3: unknown) => any;
export type CurriedTernaryFunctionIII = (arg1: unknown) => (arg2: unknown) => (arg3: unknown) => any;
export type TernaryFunction = CurriedTernaryFunctionI | CurriedTernaryFunctionII | CurriedTernaryFunctionIII;
export type UnaryFunction = (arg: unknown) => any;
export type VariadicFunction = (...args: ReadonlyArray<any>) => any;
