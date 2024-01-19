import React from 'react';
import {useEffect, useState} from 'react';
import MovieList from './MovieList'
import NewMovie from './NewMovie';

function Movie() {

  const [movies, setMovies] = useState([])

  // const updateMovie = freshMovieObj => {
  //   setMovies( movies.map( mObj => {
  //     if(mObj.id !== freshMovieObj.id ){
  //       return mObj
  //     } else {
  //       return freshMovieObj
  //     }
  //   } ) )

  // }

//Trying something new//
  const updateMovie = (freshMovieObj) => {
    setMovies(movies.map(mObj => {
        if (mObj.id !== freshMovieObj.id) {
            return mObj;
        } else {
            return { ...mObj, cost: freshMovieObj.cost };
        }
    }));
};
//////////////////////////////////////////

  const removeMovieFromState = goodbyeMovie => {
    const filteredArray = movies.filter(goodbyeMovieObj => {
      return goodbyeMovieObj.id !== goodbyeMovie
    })
    setMovies(filteredArray)
  }

  useEffect(() => {
    fetch("http://127.0.0.1:5555/movies")
      .then((r) => r.json())
      .then(setMovies);
  }, []);

  // const addMovie = (mO) => {
  //   const movieArr = [...movies, mO]
  //   fetch('http://localhost:5555/movies', {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(mO)
  //   })
  //   .then(response => response.json())
  //   setMovies(movieArr)
  // }
///////////////Trying something new////////////////
  const addMovie = (mO) => {
    fetch('http://localhost:5555/movies', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(mO)
    })
    .then(response => response.json())
    .then(createdMovie => {
      const updatedMovies = [...movies, createdMovie];
      setMovies(updatedMovies);
    })
    .catch(error => {
      console.error('Error adding movie:', error)
    })
  }
///////////////////////////////////////////////
  

  return (
    <div>
      <div>
        <NewMovie addMovie={addMovie}/>
        <MovieList 
        removeMovieFromState={removeMovieFromState} 
        updateMovie= {updateMovie} 
        movies={movies}
        />
      </div>
    </div>
  )
}

export default Movie;