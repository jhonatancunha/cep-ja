import axios from 'axios';
import { SUCESS, LOADING, BACKINITIALPAGE, LOADMAP, GOBACK, ERROR } from './actions'

export const fetchAddress = (inputValue, uf, city) => async (dispatch) => {

  var request = '';
 
  //RETIRANDO TRAÇO DO CEP PARA FORMULAR LINK DE REQUISIÇÃO
  if(!isNaN(inputValue.replace('-',''))){
    request = inputValue.replace('-','');
  }else{
    request = `${uf}/${city}/${inputValue}`
  }

  dispatch({ type: LOADING })

  try{
    const response = await axios.get(`https://viacep.com.br/ws/${request}/json/`)
    var dataCEP = response.data

    if(dataCEP.erro || dataCEP.length === 0){
      throw new Error('cep invalido');
    }

    if( !Array.isArray(dataCEP) ){
      dataCEP = [dataCEP]
    }
    
    dispatch(({
      type: SUCESS,
      payload: dataCEP
    }));

  }catch(err){
    dispatch({
      type: ERROR,
      payload: {
        isLoading: false,
        erro: true
      }
    })
  }
}


export const goInitialPage = (e) => (dispatch) => {
  dispatch({type: BACKINITIALPAGE})
}

export const openMap = (cep) => async (dispatch, getState) => {
  try{
    dispatch({ 
      type: LOADMAP,
      payload: {
        mapisLoading: true,
      }
    })


    //API DE GEOLOCALIZAÇÃO MAIS RAPIDA
    const response = await axios.get(`
    https://nominatim.openstreetmap.org/search?street=${cep[0]}&country=brazil&state=%${cep[1]}&city=${cep[2]}&format=json
    `)
    const {lat, lon} = response.data[0];
    


    //SE USUARIO FECHAR JANELA NÃO MOSTRA MAPA
    if(getState().address.mapisLoading){
      dispatch({
        type: LOADMAP,
        payload: {
          latitude: lat,
          longitude: lon,
          isMapOpen: true,
          mapisLoading: false,
        }
      })
    }
  }catch(err){
    try{

    //PEGANDO DADOS DE LATITUDE E LONGITUDE
    const response2 = await axios.get(`https://cors-anywhere.herokuapp.com///www.cepaberto.com/api/v3/cep?cep=${cep[3].replace('-','')}`,  {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Token token=30f76acb42943021eca2ad1dd02a8854'
      }
    });
    


    if(getState().address.mapisLoading){
      dispatch({
        type: LOADMAP,
        payload: {
          latitude: response2.data.latitude,
          longitude: response2.data.longitude,
          isMapOpen: true,
          mapisLoading: false,
        }
      })
    }

    }catch(err){
      dispatch({
        type: ERROR,
        payload: {
          mapisLoading: false,
          mapError: true,
          isMapOpen: false,
        }
      })
    }
  }

}

export const goBack = (e) => (dispatch) => {
  dispatch({ 
    type: GOBACK,
    payload: {
      isMapOpen: false,
    }})
}

export const closeLoadingMap = (e) => (dispatch) => {
  dispatch({
    type: GOBACK,
    payload: {
      mapisLoading: false
    }
  })
}

export const closeNotification = (e) => (dispatch) => {
  dispatch({
    type: GOBACK,
    payload: {
      erro: false,
      mapError: false
    }
  })
}