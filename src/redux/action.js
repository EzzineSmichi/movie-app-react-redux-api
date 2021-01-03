import axios from "axios"
import { ADD_MOVIE, DELETE_MOVIE, LOAD_API, LOAD_API_ERROR, LOAD_API_SUCCESS, MODIFY_MOVIE, SEARCH_TERM } from "./type"

export const APILoad = () => {
    return {
        type : LOAD_API
    }
}

export const APILoadSuccess = data => {
    return {
        type : LOAD_API_SUCCESS,
        payload : data
    }
}

export const APILoadError = err => {
    return {
        type : LOAD_API_ERROR,
        payload : err
    }
}

export const APICall = () => {
    return dispatch => {
        dispatch(APILoad())
        axios.get("https://movie-app-gmc.herokuapp.com/api/movies")
        .then(res=>dispatch(APILoadSuccess(res.data)))
        .catch(err=>dispatch(APILoadError(err.message)))
    }
    
}

export const searchTerm = data => {
    return {
        type : SEARCH_TERM,
        payload : data
    }
}

export const deleteMovie = index => {
    return {
        type : DELETE_MOVIE,
        payload : index
    }
} 

export const addMovie = data => {
    return {
        type : ADD_MOVIE,
        payload : data
    }
}

export const modifyMovie = (index, title) => {
    return {
        type : MODIFY_MOVIE,
        payload : {
            index, title
        }
    }
}