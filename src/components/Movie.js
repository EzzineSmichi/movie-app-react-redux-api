import { Alert, Button } from 'reactstrap'
import { useDispatch } from 'react-redux'
import React from 'react'
import Rating from './Rating'
import { deleteMovie } from '../redux/action'
import ModalModify from './ModalModify'


const Movie = ({movie}) => {
    const dispatch = useDispatch()
    
    return (
        <div className='article'>
            <Alert size='sm'>{movie.title}</Alert>
            <img src = {movie.imgUrl} />
            <Rating rate={movie.rate}/> 
            <div className='btns'>
                <ModalModify buttonLabel='Modify' movie={movie}/>
                {/* <Button color='success' style={{marginRight:'.5rem'}}>modify</Button> */}
                <Button 
                    style={{marginLeft:'.5rem'}}
                    color='danger' 
                    onClick={()=>dispatch(deleteMovie(movie._id))}
                >delete</Button>
            </div>
            
        </div>
    )
}

export default Movie
