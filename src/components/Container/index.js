import React, { PureComponent } from 'react';
import axios from 'axios';

// COMPONENTS
import SearchCEP from '../Content';

class Search extends PureComponent {
  state = {
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    isLoading: false,
  };

   handleSubmit = async (e) => {
    e.preventDefault();
    try{
      this.setState({ isLoading: true })
      
      const cep = e.target.cep.value;
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      
      this.setState({ isLoading: false })
      this.setState(response.data);
    }catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <SearchCEP handleSubmit={this.handleSubmit} {...this.state} />
    )
  }
}

export default Search;
