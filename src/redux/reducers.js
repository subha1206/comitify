import {
    HANDEL_SEARCH_TERM,
    REQUEST_BRANCH_PENDING,
    REQUEST_BRANCH_SUCCESS,
    REQUEST_BRANCH_FAILED
} from './constats'


const initialSearchState = {
    searchTerm: ''
}

export  const searchOnGithub = ( state = initialSearchState, action = {} ) => {
    switch(action.type) {
        case HANDEL_SEARCH_TERM:
            return Object.assign( {}, state, {searchTerm: action.payload})
        default:
            return state;
    }
}

const initialBranchState ={
    branches:[],
    isLoading: false,
    error: ''
}

export const searchForBranch = (state= initialBranchState, action= {}) => {
    switch (action.type){
        case REQUEST_BRANCH_PENDING:
            return Object.assign({}, state, {isLoading: true})
        case REQUEST_BRANCH_SUCCESS: 
            return Object.assign({}, state, {branches: action.payload, isLoading: false})
        case REQUEST_BRANCH_FAILED:
            return Object.assign({}, state, {error: action.payload, isLoading:false})
        default:
            return state
    }
}