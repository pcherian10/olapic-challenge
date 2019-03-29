import { FETCH_PICS } from '../actions/types';


export default function(state = {
    pics: []
  }, action) {
    console.log(action);
    switch (action.type) {
        case FETCH_PICS:
        return {...state, pics: action.payload};
        default:
            return state;
    }
}