import {
    FETCHING_DATA,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FALSE
} from '../constants'

const initiaState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false

}

export default function dataReducer (state = initiaState,action){
    switch(action.type) {
        case FETCHING_DATA:
           return {
                ...state,
                data: [],
                isFetching:true
           }
        case FETCHING_DATA_SUCCESS:
           return {
                ...state,
                data: action.data,
                isFetching:false
           }
        case FETCHING_DATA:
           return {
                ...state,
                isFetching:false,
                error: true
           }
        default: 
        return state
    }
}