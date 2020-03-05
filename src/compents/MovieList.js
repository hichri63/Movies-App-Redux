import React from 'react'
import { connect } from 'react-redux'
import MovieCard from './MovieCard'

const MovieList = props => {
    return (
        <div className="d-flex justify-content-around">
            {
                props.movies.map(el => <MovieCard movie={el}/>)
            }
        </div>
    )
}
const mapStateToProps = state => {
    return{
        movies: state.MovieReducer
    }
}

export default connect(mapStateToProps)(MovieList)