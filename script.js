"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = prompt('Skolko filmov vy uje posmotreli?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt('Skolko filmov vy uje posmotreli?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms, 
    movies: {}, 
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
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
}
//rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('posmotreno dovolno malo filmov');
    } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
        console.log('vy kalsichiskii zritel');
    } else if (personalMovieDB.count >=30) {
        console.log('vy kinoman');
    } else{
        console.log('prizawlo owibka');
    }
}
//detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`vash liubimyi janr ${i}`);
    }
}
writeYourGenres();