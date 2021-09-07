import {FAV_MOVIE, DELETE_FAV, TOGGLE} from '../actions/movieActions.js'

const initialState = {
    favorites: [],
    displayFavorites: true
}

export const favoriteReducer = (state=initialState, action)=>{
    switch(action.type){
        case FAV_MOVIE:
            if(state.favorites.indexOf(action.payload) === -1){
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        } else {
            return {
                ...state
            }
        }
        case DELETE_FAV:
            return {
                ...state,
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        case TOGGLE:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }

        default:
            return state;
    }
}