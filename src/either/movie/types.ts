export type MovieCategory = 'BOXOFFICE' | 'COMMING'
export type  MovieResponse = MovieCategoryList<'BOXOFFICE'> | MovieCategoryList<'COMMING'>
export type MovieCategoryList<T extends MovieCategory> = {
    "movieChartList": {
        'BOXOFFICE': Movie[]
    }
}

export interface Movie {
    "movieCode": number;// 74977,
    "movieTitle": string;// "아바타: 물의 길",
    "posterImageUrl": string;// "/20221215_185/1671091761840XXpCR_JPEG/movie_image.jpg",
    "weekendAudience": number;// 1274184,
    "openDate": null,
    // "pointSum": 0,
    // "joinNumber": 0,
    "reserveRatio": null,
    "saleRate": null,
    "salePossibleYn": boolean,
    "lendingPossibleYn": boolean,
    "adult":boolean;// false,
    // "korGradeList": [{ "code": "1001002", "name": "12세 관람가" }],
    // "lastKoreanGrade": { "code": "1001002", "name": "12세 관람가" },
    // "usGradeList": [],
    "lastUsGrade": null,
    // "theater": 0,
    "point": string; // "0.00",
    "formattedWeekendAudience": string; // "1,274,184",
    "formattedReserveRatio": string; // "0.00",
    "formattedSaleRate": string; // "0.00"
    [key:string]: any
}