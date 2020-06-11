import React, { PureComponent } from 'react';
import axios from 'axios';
import { connect } from 'react-redux' 

// COMPONENTS
import SearchCEP from '../Content';

// ACTIONS CREATORS
import { updateAddress } from '../../redux-flow/reducers/ZipCode/action-creator'

class Search extends PureComponent {
  state = {
    isLoading: false,
    erro: false,
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const cepValue = e.target.cep.value;

    if(cepValue.length !== 8){
      this.setState({erro: true});
      return;
    }
    
    this.setState({ isLoading: true })
    try{
      const cep = cepValue;
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      this.props.setAddress(response.data);

    }catch(err) {
      this.setState({erro: true});
    }
    this.setState({ isLoading: false })
  }

  render() {
    return (
      <SearchCEP 
        {...this.state} 
        {...this.props.address}
        handleSubmit={this.handleSubmit} 
        />
    )
  }
}

const mapStateToProps = (state) => ({
  address: state.address
})

const mapDispatchToProps = (dispatch) => ({
  setAddress: (data) => dispatch(updateAddress(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
