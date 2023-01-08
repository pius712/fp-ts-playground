import * as E from 'fp-ts/Either'
import {pipe} from "fp-ts/function";
import {consoleDivider} from "../helper/divider";

export const functional = (as: ReadonlyArray<number>): string => {
    const head = <A>(as: ReadonlyArray<A>): E.Either<Error, A> =>
        as.length === 0 ? E.left(new Error('empty array')) : E.right(as[0])
    const inverse = (n: number): E.Either<Error, number> => {
        if(n === 0) {
            throw new Error('error')
            return E.left(new Error('cannot divide by zero'))
        } else{ return E.right(1 / n)}
    }
    const double = (n: number) => n * 2;
    return pipe(
        as,
        head,
        E.map(double),
        E.chain(inverse),
        E.match(
            (err) => {
                console.error(`Error is ${err} ${err.stack}`)
                throw err }, // onLeft handler
            (head) => `Result is ${head}` // onRight handler
        )
    )
}


console.log(functional([0,2,3,4,5]))
consoleDivider(2)
console.log(functional([]))
consoleDivider(3)
console.log(functional([0]))
