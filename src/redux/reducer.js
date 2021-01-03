import { ADD_MOVIE, DELETE_MOVIE, LOAD_API, LOAD_API_ERROR, LOAD_API_SUCCESS, MODIFY_MOVIE, SEARCH_TERM } from "./type"

const initState = {
    isLoading : false,
    movies : [],
    error : '',
    searchTerm : ''
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case LOAD_API:
            return {
                ...state, isLoading : true
            }

        case LOAD_API_SUCCESS:
            return {
                ...state,
                isLoading : false,
                movies : action.payload,
                error : ''
            }

        case LOAD_API_ERROR:
            return {
                ...state,
                isLoading : false,
                movies : [],
                error : action.payload
            }

        case SEARCH_TERM:
            return {
                ...state, searchTerm : action.payload
            }

        case DELETE_MOVIE:
            return {
                ...state,
                movies : [
                    ...state.movies.filter(movie=>movie._id !== action.payload)
                ]
            }

        case ADD_MOVIE:
            return {
                ...state,
                movies : [...state.movies, action.payload]
            }

        case MODIFY_MOVIE:
            return {
                ...state,
                movies : [
                    ...state.movies.map(movie=>movie._id===action.payload.index ? {...movie, title:action.payload.title}:movie)
                ]
            }
    
        default: return state
    }
}

export default reducer