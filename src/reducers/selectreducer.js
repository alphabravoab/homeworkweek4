import { ADD_ITEM } from '../actions/actionSelection'

const reducer =(state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

export default reducer
