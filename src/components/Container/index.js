import React from 'react';
import { connect } from 'react-redux' 

// COMPONENTS
import SearchCEP from '../Content';

// ACTIONS CREATORS
import { fetchAddress, goInitialPage } from '../../redux-flow/reducers/ZipCode/action-creator'

//IMGS
import Illustration from '../../assets/illustration.svg'
import {ReactComponent as Logo} from '../../assets/cepja.svg'

// STYLE
import { Wrapper, All } from './style'

const Search  = ({ address, handleSubmit, handleInitialPage }) => {
  return (
    <All>
      <Wrapper>
        <Logo className="logoSvg" />
        <SearchCEP 
          {...address}
          handleSubmit={handleSubmit}
          goInitialPage={handleInitialPage}
          />
      </Wrapper>
      <img src={Illustration} alt="CepJá!" />
    </All>
  )
}

const mapStateToProps = (state) => ({
  address: state.address
})

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault();
    dispatch(fetchAddress(e.target.cep.value));
  },
  handleInitialPage: (e) => {
    console.log('dispatch')
    
    dispatch(goInitialPage())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
