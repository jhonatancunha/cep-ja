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
    erro: false,
    isLoading: false,
  };

   handleSubmit = async (e) => {
    e.preventDefault();
    const cepValue = e.target.cep.value.length;

    if(cepValue !== 8){
      this.setState({erro: true});
      return;
    }
    
    this.setState({ isLoading: true })
    try{
      const cep = cepValue;
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      this.setState(response.data);
      
    }catch(err) {
      this.setState({erro: true});
    }
    this.setState({ isLoading: false })
  }

  render() {
    return (
      <SearchCEP handleSubmit={this.handleSubmit} {...this.state} />
    )
  }
}

export default Search;
