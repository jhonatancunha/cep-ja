import axios from 'axios';
import { SUCESS, LOADING } from './actions'

export const fetchAddress = (cep) => async (dispatch, getState) => {
    dispatch({ type: LOADING })
    
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    
    dispatch(({
      type: SUCESS,
      payload: response.data
    }));
} 