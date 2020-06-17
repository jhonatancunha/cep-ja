import axios from 'axios';
import { SUCESS, LOADING, BACKINITIALPAGE, LOADMAP, GOBACK } from './actions'

export const fetchAddress = (cep) => async (dispatch, getState) => {
    dispatch({ type: LOADING })
    
    console.log('requisição')

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    axios.get(`https://cors-anywhere.herokuapp.com///www.cepaberto.com/api/v3/cep?cep=${cep}`,  {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Token token=30f76acb42943021eca2ad1dd02a8854'
      }
    }).then((response) => {
      dispatch({
        type: SUCESS,
        payload: {
          ddd: response.data.cidade.ddd,
          latitude: response.data.latitude,
          longitude: response.data.longitude,
          altitude: response.data.altitude,
          mapisReady: true
        }
      })
    })

   
    dispatch(({
      type: SUCESS,
      payload: response.data
    }));
}

export const goInitialPage = (e) => (dispatch) => {
  dispatch({type: BACKINITIALPAGE})
}

export const openMap = (e) => (dispatch) => {
  dispatch({ type: LOADMAP })
}

export const goBack = (e) => (dispatch) => {
  dispatch({ type: GOBACK })
}