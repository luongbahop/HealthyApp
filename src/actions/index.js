import {
    FETCHING_DATA,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FALSE
} from '../constants'

import getPeople from '../api'

export function getData(){
    return {
        type: FETCHING_DATA
    }
}
export function getDataSuccess(data){
    return {
        type: FETCHING_DATA_SUCCESS,
        data
    }
}
export function getDataFalse(){
    return {
        type: FETCHING_DATA_FALSE,
        error
    }
}


export function fetchData(){
    return (dispatch) => {
        dispatch(getData())
        getPeople()
            .then((data) => {
                dispatch(getDataSuccess(data))
            })
            .catch((err) => console.log('err: ',err))
    }
}