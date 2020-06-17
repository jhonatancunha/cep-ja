import styled from 'styled-components'

export const All = styled.div`
    display: flex;
  @media (min-width: 800px){
    img{
      margin-left: 50px;
    }
  }
  
  @media (max-width: 799px){
    flex-direction: column;
    align-items: center;

    img{
      position: absolute;
      bottom: 50px;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .logoSvg{
    /* SEARCH CEP */
    height: ${props => props.isSearched ? '120px' : '250px'};
    margin-bottom: ${props => props.isSearched ? '20px' : '20px'};
    margin-left: ${props => props.isSearched ? '-85px' : 'px'};

    /* MAP OPENED */
    position: ${props => props.isMapOpen ? 'absolute' : 'relative'};
    bottom: ${props => props.isMapOpen ? '0' : '0'};
    left: ${props => props.isMapOpen ? '-45px;' : '0'};
  
    @media (max-width: 799px){
      height: 200px;
    }
  }
  @media (min-width: 800px){
    height: 100vh;
    width: 50vw;
  }

`