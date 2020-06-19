import React from 'react'

// ICONS
import { ReactComponent as SearchIcon } from '../../assets/search.svg'

// STYLES
import { Wrapper, Button, Input, Select, Title } from './style'

// DATABASE ESTADOS
import estados from '../../services/estados'


export default ({
  handleSubmit, 
  isLoading, 
  handlepopulateCity, 
  city,
 
}
  ) => {
  return (
  <Wrapper onSubmit={handleSubmit}>

    <section>
        <Title>
          <span>UF</span>
        </Title>

        <Select onChange={handlepopulateCity()} className="uf" name="uf"  >
          {estados.map((uf) => 
            <option  
            key={uf.id} 
            value={uf.sigla+uf.id}  
            >
              {uf.sigla}
            </option>   
          )}
        </Select>
    </section>

    <section>
        <Title>
          <span>CIDADE</span>
        </Title>

        <Select name="city">
          {Object.entries(city).map((nome) =>
            <option key={nome[1]} value={nome[1]}>{nome[1]}</option>
          )}
        </Select>
    </section>
          
    <section>
      <Button type="submit" disabled={isLoading}>
        <SearchIcon /> 
      </Button>
      <Input 
        name="cep" 
        placeholder="Ex: Rua Tijuco ou 87208-094"
        required
        />
    </section>

   

  </Wrapper>
  )
}