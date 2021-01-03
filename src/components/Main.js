import React, { useEffect, useState } from 'react'
import MoviesList from './MoviesList';
import { useSelector, useDispatch } from 'react-redux';
import { APICall, searchTerm } from '../redux/action';
import Loader from 'react-loader-spinner'
import Rating from './Rating'
import FormAdd from './FormAdd';

const Main = () => {
    const data = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(APICall())
        
    }, [dispatch])

    const [val, setVal] = useState(1)

    const dynamicSearch = () => {
        return data.movies.filter(movie=> movie.rate >= val && movie.title.toLowerCase().includes(data.searchTerm.toLowerCase()))   
    }

    return (
        <>
        { 

        (data.isLoading)? (<Loader
            type="TailSpin"
            color="#00BFFF"
            height={150}
            width={150}
            timeout={7000} 
         />)
        :(data.error)? (<h1>{data.error}</h1>)
        :(data.movies) &&
        
            (<div>
                <Rating rate = {val} setVal = {setVal} />
                <input 
                    className='search' 
                    type='text' 
                    value={data.searchTerm} 
                    onChange={e=>dispatch(searchTerm(e.target.value))}
                    placeholder = 'Search for a movie!'
                />
                <div className='container'>
                    <MoviesList movies={dynamicSearch()}/>
                </div>
                <FormAdd buttonLabel='Add New Movie'/>
            </div>
            )
        }
        </>
    )
}

export default Main
