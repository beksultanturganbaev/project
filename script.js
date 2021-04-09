"use strict";

const numberOfFilms = +prompt('Skolko filmov vy uje posmotreli?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, 
    actors: {},
    genres: {},
    privat: false
};

const movies = [];

const a = prompt('Odin iz poslednih prosmotrennyh filmov?', ''),
      b = prompt('Na skolko otsenite ego?', ''),
      c = prompt('Odin iz poslednih prosmotrennyh filmov?', ''),
      d = prompt('Na skolko otsenite ego?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);