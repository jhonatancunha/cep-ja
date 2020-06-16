import React from 'react';
import { connect } from 'react-redux' 

// COMPONENTS
import SearchCEP from '../Content';

// ACTIONS CREATORS
import { fetchAddress } from '../../redux-flow/reducers/ZipCode/action-creator'

const Search  = ({ address, handleSubmit }) => {
  return (
    <SearchCEP 
      {...address}
      handleSubmit={handleSubmit} 
      />
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
