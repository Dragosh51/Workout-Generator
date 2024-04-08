import {
    FETCHING_WORKOUTS,
    FETCHED_WORKOUTS_SUCCESS,
    FETCHED_WORKOUTS_ERROR
} from '../actions/workoutsActions'

const initState = {
    loading: false,
    error: null,
    workouts: [],
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'FETCHING_WORKOUTS':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCHED_WORKOUTS_SUCCESS':
            return {
                ...state,
                loading: false,
                workouts: action.payload,
            };
        case 'FETCHED_WORKOUTS_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};