"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start : function () {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?","");
      while(personalMovieDB.count == '' || personalMovieDB.count == null ||  isNaN(personalMovieDB.count)){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?","");
      }
    }, 
    rememberMyfilms: function () {
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
     },
     detectPersolanLevel: function (){
      if (personalMovieDB.count < 10 ) {
        console.log("Просмотренно слишком мало фильмов"); 
      } else if ((personalMovieDB.count >= 10) && (personalMovieDB.count < 30) ){
       console.log("Вы классический зритель"); 
     } else if(personalMovieDB.count >= 30){
       console.log("Вы киноман.");
     } else {
       console.log("Произошла ошибка"); 
     }
    },
    showMyDb: function (hidden){
      if(!hidden){
        console.log(personalMovieDB);
      }
    },
    toggleVisibleMyDB: function  ()  {
      if(!personalMovieDB.private){
        personalMovieDB.private = true;
      } else {
        personalMovieDB.private = false;
      }
    },
    writeYoureGenres: function (){
      for(let i = 1; i <= 3; i++ ){

        let gen = prompt(`Ваш любимый жанр под номером ${i} `);
        if(gen == '' || gen == null){
          console.log("Вы ввели не корректные даные");
          i--;
        } else{
          personalMovieDB.genres[i-1] = gen;
        }
      }

      personalMovieDB.genres.forEach((item, i) =>{
        console.log(`Любимый жанр ${i + 1} - это ${item}`);
      });
    }
};


