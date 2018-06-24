import { ADD_ITEM } from '../actions/actionSelection'

const selectReducer = ( state = [], action ) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          name : action.payload.name,
          manufacturer: action.payload.manufacturer,
          year: action.payload.year,
          origin: action.payload.origin,    
        }
      ]
    default:
      return state
  }
}

export default selectReducer
