import React from 'react';
import { connect } from 'react-redux' 

// COMPONENTS
import SearchCEP from '../Content';
import Footer from '../Footer'

// ACTIONS CREATORS
import { fetchAddress, goInitialPage, openMap, goBack } from '../../redux-flow/reducers/ZipCode/action-creator'

import Illustration from '../../assets/illustration.svg';
import {ReactComponent as Logo} from '../../assets/cepja.svg';

// STYLE
import { Div, Wrapper } from './style'

const Search  = ({ address, handleSubmit, handleInitialPage, handleOpenMap, handleGoBack}) => {
  return (
    <Wrapper isSearched={address.searchedZidCode}>
      <Div isSearched={address.searchedZidCode} isMapOpen={address.isMapOpen} >
        <Logo className="logoSvg" />
        <SearchCEP 
          {...address}
          handleOpenMap={handleOpenMap}
          handleSubmit={handleSubmit}
          goInitialPage={handleInitialPage}
          handleGoBack={handleGoBack}
          />
      </Div>
      {!address.isMapOpen && <img src={Illustration} alt="CepJá!" />}
      <Footer />
    </Wrapper>
  )
}

const mapStateToProps = (state) => ({
  address: state.address,
})

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault();

    dispatch(fetchAddress(e.target.cep.value));
  },
  handleInitialPage: (e) => {
    dispatch(goInitialPage())
  },
  handleOpenMap: (e) => {
    dispatch(openMap())
  },
  handleGoBack: (e) => {
    dispatch(goBack())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
