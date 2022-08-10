import * as ActionType from './ActionTypes'

export const incremnt = () => (dispatch) => {
    dispatch({type: ActionType.INCREMENT_COUNTER})
}

export const decrement = () => (dispatch) => {
    dispatch({type: ActionType.DECREMENT_COUNTER})
}