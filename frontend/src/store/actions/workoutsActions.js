import axios from 'axios';

export const FETCHING_WORKOUTS = 'FETCHING_WORKOUTS';
export const FETCHED_WORKOUTS_SUCCESS = 'FETCHED_WORKOUTS_SUCCESS';
export const FETCHED_WORKOUTS_ERROR = 'FETCHED_WORKOUTS_ERROR';

export const fetchWorkouts = (tableName) => (dispatch) => {
    dispatch({ type: 'FETCHING_WORKOUTS' });
    axios
        .get(`http://localhost:5343/workouts/${tableName}`)
        .then((response) => {
            dispatch({
                type: 'FETCHED_WORKOUTS_SUCCESS',
                payload: response.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: 'FETCHED_WORKOUTS_ERROR',
                payload: err,
            });
        });
};