export const DELETE_MOVIE = "DELETE_MOVIE";
export const FAV_MOVIE = "FAV_MOVIE";
export const DELETE_FAV = "DELETE_FAV"
export const TOGGLE = "Toggle"

export const deleteMovie = (id)=>{
    console.log('blah')
    return({type: DELETE_MOVIE, payload:id});
}

export const favMovie = (id) =>{
    return ({type: FAV_MOVIE, payload: id})
}

export const deleteFav = (id) =>{
    console.log('blhahh')
    return({type: DELETE_FAV, payload: id})
}

export const toggleFav = ()=>{
    return ({type:TOGGLE})
}