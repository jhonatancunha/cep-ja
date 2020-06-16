import axios from 'axios';
import { UPDATE_ADDRESS } from './actions'

export const fetchAddress = (cep) => 
  async (dispatch, getState) => {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    dispatch(updateAddress(response.data));
    // this.setState({ isLoading: false })
  } 

export const updateAddress = (data) => ({
  type: UPDATE_ADDRESS,
  payload: data
})