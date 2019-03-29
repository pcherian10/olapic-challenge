import axios from 'axios'
import { URL } from '../config/rootURL'
import { API_KEY } from '../config/apiKey'
import { FETCH_PICS } from "./types"


export const fetchPics= () => async dispatch => {
    const res = await axios.get(URL + API_KEY);   
    dispatch({type: FETCH_PICS, payload: res.data});
};