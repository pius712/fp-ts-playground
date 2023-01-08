import {pipe} from "fp-ts/function";
import * as O from 'fp-ts/Option'
import {trace} from "../helper";

export const functional = (as: ReadonlyArray<number>): string => {
    const head = <A>(as: ReadonlyArray<A>): O.Option<A> => (as.length === 0 ? O.none : O.some(as[0]))
    const inverse = (n: number): O.Option<number> => (n === 0 ? O.none : O.some(1 / n))
    const double = (n: number) => n * 2;
    return pipe(
        as,
        head,
        trace,
        O.map(double),
        trace,
        O.chain(inverse),
        trace,
        O.match(
            () => 'no result', // onNone handler
            (head) => `Result is ${head}` // onSome handler
        )
    )
}

console.log(functional([1, 2, 3]))
console.log("under")
console.log(functional([]))