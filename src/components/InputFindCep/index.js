import React from 'react'

// ICONS
import { ReactComponent as SearchIcon } from '../../assets/search.svg'

// STYLES
import { Wrapper, Button, Input } from './style'

export default ({handleSubmit, isLoading}) => (
  <Wrapper onSubmit={handleSubmit}>
      <Button type="submit" disabled={isLoading}>
        <SearchIcon /> 
      </Button>
      <Input 
        name="cep" 
        pattern="[0-9]{8}"
        placeholder="Digite o CEP que deseja recolher informações..."
        title="É permitido somente números e exatamente 8 dígitos"
        required
        />
    </Wrapper>
)