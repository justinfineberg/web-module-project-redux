import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {deleteFav} from './../actions/movieActions.js'

const FavoriteMovieList = (props) => {
    
    const handleDelete = (id)=>{
        console.log('click')
        props.dispatch(deleteFav(id))
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={e=>handleDelete(movie.id)} className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state)=>{
    return {
        favorites: state.favorite.favorites
    }
}

export default connect(mapStateToProps)(FavoriteMovieList);