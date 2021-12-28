"use strict";
//1
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
//2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false 
};
//3
let a = prompt("Один из последних просмотренных фильмов?",""),
    b = prompt("На сколько оцениете его?","");

    personalMovieDB.movies[a] = b; 

 console.log(personalMovieDB);   
