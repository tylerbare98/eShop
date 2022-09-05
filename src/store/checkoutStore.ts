import { AnyAction, createStore } from 'redux'
import { checkoutState } from '../models/models'


const initial:checkoutState = {
    list: []
}

function ToDoList(state = initial, action: AnyAction) {
   let newList;
  switch (action.type) {
    case 'AddToBasket':
        newList = state.list.concat(action.item) 
        return {            
            list : newList
        }
    case 'RemoveFromBasket':
        newList = state.list.filter(item => item.id !== action.id)    
        return {            
            list : newList
        }
    default:
        return state
  }
}

const store = createStore(ToDoList);
export default store;