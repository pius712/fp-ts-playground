import {boxOffice, comming} from "./fixture";
import {getBoxOffice, getComming} from "../getMovie";
import {getOrElse} from "fp-ts/Either";
import {pipe} from "fp-ts/function";
import {Movie} from "../types";

describe('getMoview', function () {

    it('get box office ', async () => {
        const boxoffice = pipe(getBoxOffice(boxOffice), getOrElse<Error, Movie[]>((e) => {
            throw e
        }))

        expect(boxoffice).toMatchSnapshot()
    })

    it('get box office2 ', async () => {
        const boxoffice = () => pipe(getBoxOffice(comming), getOrElse<Error, Movie[]>((e) => {
            throw e
        }))

        expect(boxoffice).toThrowErrorMatchingInlineSnapshot(`"해당 카테고리는 없습니다."`)


    })

})
