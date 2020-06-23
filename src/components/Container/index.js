import React, {useEffect} from 'react';
import { connect } from 'react-redux' 

// COMPONENTS
import SearchCEP from '../Content';
import Footer from '../Footer'


// ACTIONS CREATORS
import { fetchAddress, goInitialPage, openMap, goBack, closeLoadingMap, closeNotification  } from '../../redux-flow/reducers/ZipCode/action-creator'
import { populateCity } from '../../redux-flow/reducers/City/actions-creators'

import Illustration from '../../assets/illustration.svg';
import {ReactComponent as Logo} from '../../assets/cepja.svg';
import {ReactComponent as ArrowLeft} from '../../assets/arrow-left.svg'

// STYLE
import { WrapperForm, Container, WrapperLeft, MapImage } from './style'
import { ButtonBack } from '../Content/style'


const Search  = ({ 
  address, 
  city, 
  handleSubmit, 
  handleInitialPage, 
  handleOpenMap, 
  handleGoBack, 
  handlepopulateCity,
  handlecloseLoadingMap,
  handleCloseNotification
}) => {

  //BUSCANDO CIDADES DO PRIMEIRO ESTADO DO SELECT
  useEffect(() => {
    handlepopulateCity(12)()
  },[handlepopulateCity])

  return (
    <Container isSearched={address.searchedZidCode} >
      <WrapperLeft className="wrapper-content" isMapOpen={address.isMapOpen} isSearched={address.searchedZidCode}>
        <Logo className="logoSvg" />
        
        {address.searchedZidCode && !address.isMapOpen && 
          <>
            <ButtonBack onClick={handleInitialPage}>
              <ArrowLeft />
              BUSCAR OUTRO CEP
            </ButtonBack>   
          </>
        }
        <WrapperForm  isMapOpen={address.isMapOpen} >
          <SearchCEP 
            {...address}
            city={city}
            handlepopulateCity={handlepopulateCity}
            handleOpenMap={handleOpenMap}
            handleSubmit={handleSubmit}
            goInitialPage={handleInitialPage}
            handleGoBack={handleGoBack}
            handlecloseLoadingMap={handlecloseLoadingMap}
            handleCloseNotification={handleCloseNotification}
            />
        </WrapperForm>
      </WrapperLeft>

      {!address.isMapOpen && 
      <MapImage src={Illustration} alt="CepJá!" />
      }
      <Footer searchedZidCode={address.searchedZidCode} isMapOpen={address.isMapOpen}  />
    </Container>
  )
}

const mapStateToProps = (state) => ({
  address: state.address,
  city: state.city,
  state
})

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault();
    dispatch(fetchAddress(e.target.cep.value, e.target.uf.value.slice(0,2), e.target.city.value));
  },
  handleInitialPage: (e) => {
    dispatch(goInitialPage())
  },
  handleOpenMap: (cep) => (e) => {
    dispatch(openMap(cep))
  },
  handleGoBack:  (e) => {
    dispatch(goBack())
  },
  handlepopulateCity: (id) => (e) => {
    var ufID = id;
    if(e){
      ufID = e.target.value.slice(2)
    }
    dispatch(populateCity(ufID))
  },
  handlecloseLoadingMap: (e) => {
    dispatch(closeLoadingMap());
  },
  handleCloseNotification: (e) => {
    dispatch(closeNotification());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
