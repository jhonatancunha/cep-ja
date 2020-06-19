import axios from 'axios'
import { POPULATE } from './actions'

export const populateCity = (ufId) => async (dispatch) => {

  const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufId}/municipios`)
  
  const cities = response.data.map((city) => city.nome)
  dispatch({ 
    type: POPULATE,
    payload: cities
  })
}