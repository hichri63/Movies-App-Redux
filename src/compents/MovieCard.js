import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteMovie } from '../actions/movieActions'
import MyModal from './MyModal';

const MovieCard = props => {
    return (
        <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={props.movie.image} />
            <Card.Body>
                <Card.Title>{props.movie.title}</Card.Title>
                <Card.Text>
                {props.movie.year}
                </Card.Text>
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={props.movie.rating}
                />
                <div className="d-flex justify-content-center">
                    <Button className="mr-2" variant="primary">Description</Button>
                    <Button variant="primary" onClick={() => props.delete(props.movie.id)}>Delete</Button>
                    <MyModal editMode={true} info={props.movie}/>
                </div>
        </Card.Body>
        </Card>
    )
}
const mapDispatchToProps = dispatch => {
    return{
        delete: x => dispatch(deleteMovie(x))
    }
}
export default connect(null, mapDispatchToProps)(MovieCard)