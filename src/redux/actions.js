import {
    HANDEL_SEARCH_TERM,
    REQUEST_BRANCH_PENDING,
    REQUEST_BRANCH_SUCCESS,
    REQUEST_BRANCH_FAILED
} from './constats'


export const handleSearch = (text) => ({
    type: HANDEL_SEARCH_TERM,
    payload: text
})

export const getBranch = () => (dispatch) => {
    newFunction(dispatch)
    dispatch({type: REQUEST_BRANCH_PENDING})
    fetch(`https://api.github.com/repos/facebook/react/branches`)
        .then(response => response.json())
        .then(data => dispatch({type: REQUEST_BRANCH_SUCCESS, payload: data}))
        .catch(error => dispatch({type: REQUEST_BRANCH_FAILED, payload: error}))

}

function newFunction(dispatch) {
    dispatch.preventDefault()
}
