"use strict";

let numberOfFilms; 
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
  while(numberOfFilms == '' || numberOfFilms == null ||  isNaN(numberOfFilms)){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
  }
}

//start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true 
};


 function rememberMyfilms() {
  let col = 1;
  while(col < 3) {
     let a = prompt("Один из последних просмотренных фильмов?",""),
         b = prompt("На сколько оцениете его?","");
 
         if (a != null && b != null && a != '' && b != '' && a.length < 50){
             personalMovieDB.movies[a] = b;  
         } else {            
             continue;
         }
         col++;    
  }
 }
//rememberMyfilms();


  function detectPersolanLevel(){
    if (personalMovieDB.count < 10 ) {
      console.log("Просмотренно слишком мало фильмов"); 
    } else if ((personalMovieDB.count >= 10) && (personalMovieDB.count < 30) ){
     console.log("Вы классический зритель"); 
   } else if(personalMovieDB.count >= 30){
     console.log("Вы киноман.");
   } else {
     console.log("Произошла ошибка"); 
   }
  }
 // detectPersolanLevel();

  function showMyDb(hidden){
    if(!hidden){
      console.log(personalMovieDB);
    }
  }
  showMyDb(personalMovieDB.private);

  function writeYoureGenres(){
    for(let i = 1; i <= 3; i++ ){
      personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i} `);
    }
  }
  writeYoureGenres();


 

