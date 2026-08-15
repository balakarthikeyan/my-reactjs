import axios from 'axios'

export const GET_MOVIES = 'GET_MOVIES'

export function getMovies() {
    return async function (dispatch) {
        const res = await axios.get('https://api.sampleapis.com/movies/action-adventure')
        return dispatch({
            type: GET_MOVIES,
            data: res.data
        })
    }
}