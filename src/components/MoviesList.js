import React from 'react'
import Movie from './Movie'


const MoviesList = ({movies}) => {
    console.log(movies)
    return (
        <>
            {
                movies.map(movie=>{
                    return <Movie key={movie._id} movie = {movie}/>
                })
            }
        </>
    )
}

export default MoviesList
