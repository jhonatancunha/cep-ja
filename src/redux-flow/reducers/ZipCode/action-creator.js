import axios from 'axios';
import { SUCESS, LOADING, BACKINITIALPAGE } from './actions'

export const fetchAddress = (cep) => async (dispatch, getState) => {
    dispatch({ type: LOADING })
    
    const response = await axios.get(`https://cors-anywhere.herokuapp.com///www.cepaberto.com/api/v3/cep?cep=${cep}`,  {
      headers: {
        'Authorization': 'Token token=30f76acb42943021eca2ad1dd02a8854'
      }
    })

    console.log(response.data)

    dispatch(({
      type: SUCESS,
      payload: response.data
    }));
}

export const goInitialPage = (e) => (dispatch) => {
  dispatch({type: BACKINITIALPAGE})
} 