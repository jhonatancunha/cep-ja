import React from 'react';
import { connect } from 'react-redux' 

// COMPONENTS
import SearchCEP from '../Content';

// ACTIONS CREATORS
import { fetchAddress } from '../../redux-flow/reducers/ZipCode/action-creator'

//IMGS
import {ReactComponent as Logo} from '../../assets/cepja.svg'

// STYLE
import {Wrapper} from './style'

const Search  = ({ address, handleSubmit }) => {
  return (
    <Wrapper>
      <Logo className="logoSvg" />
      <SearchCEP 
        {...address}
        handleSubmit={handleSubmit} 
        />
    </Wrapper>
  )
}

const mapStateToProps = (state) => ({
  address: state.address
})

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault();
    dispatch(fetchAddress(e.target.cep.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
