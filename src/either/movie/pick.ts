import * as E from "fp-ts/Either";
import {Movie, MovieCategory, MovieResponse} from "./types";

export function pick(key: MovieCategory): (response: MovieResponse) => E.Either<Error, Movie[]> {

    return (response: MovieResponse) => {
        // @ts-ignore
        if(key in response.movieChartList && response.movieChartList[key]) {
            // @ts-ignore
            return E.right(response.movieChartList[key])
        }else {
            return E.left(new Error('해당 카테고리는 없습니다.'))
        }

    }
}
