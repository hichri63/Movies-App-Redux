
import {v4 as uuidv4} from "uuid"
import { DELETE_MOVIE, ADD_MOVIE, EDIT_MOVIE, SEARCH } from "../actions/types"

const initialState = [
    {
        id: uuidv4(),
        title: "Apocalypto",
        image:"https://fr.web.img5.acsta.net/medias/nmedia/18/36/26/80/18837905.jpg",
        year: 2006,
        rating: 3
      },
      {
        id: uuidv4(),
        title: '300',
        image:"https://i.pinimg.com/originals/6d/db/4d/6ddb4d9e9cfa507ad58f4e5cf26a5c19.jpg",
        year: 2007,
        rating: 4
      },
      {
        id: uuidv4(),
        title: "Avatar",
        image: "https://gold-n-blog.fr/wp-content/uploads/2018/01/avatar_2_poster.jpg",
        year: 2009,
        rating: 3
      }
]



const MovieReducer = (state=initialState, action) => {
    switch(action.type){
      case ADD_MOVIE:
        return [...state, action.payload]
      case EDIT_MOVIE:
        return state.map(el => el.id === action.payload.id ? action.payload : el)
      case DELETE_MOVIE:
        return state.filter(el => el.id !== action.payload)
      case SEARCH:
        return initialState.filter(el => el.rating >= action.payload.rating && el.title.includes(action.payload.keyword.toUpperCase().trim()));
      default:
          return state
    }
}

export default MovieReducer