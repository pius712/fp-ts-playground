import {pipe} from "fp-ts/function";
import * as E from "fp-ts/Either";
import {MovieResponse} from "./types";
import {pick} from "./pick";

export function getBoxOffice(response: MovieResponse) {
    return pipe(
        E.of(response),
        E.chain(pick('BOXOFFICE'))
    )
}

export function getComming(response: MovieResponse) {
    return pipe(
        E.of(response),
        E.chain(pick('COMMING'))
    )
}
