"use strict";

const numberOfFilms = +prompt('Skolko filmov vy uje posmotreli?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, 
    actors: {},
    genres: {},
    privat: false
};

for (let i = 0; i < 2; i++){
    const a = prompt('Odin iz poslednih prosmotrennyh filmov?', ''),
          b = prompt('Na skolko otsenite ego?', '');

    if (a != null && b != null && a != '' && b !='' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else{
        console.log('Error');
        i--; 
    }
}

if (personalMovieDB.count < 10) {
    console.log('posmotreno dovolno malo filmov');
} else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
    console.log('vy kalsichiskii zritel');
} else if (personalMovieDB.count >=30) {
    console.log('vy kinoman');
} else{
    console.log('prizawlo owibka');
}

console.log(personalMovieDB);