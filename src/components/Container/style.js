import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  @media (min-width: 810px){
    margin-left: 50px;
  }

  /* DESKTOP */
  @media (min-width: 810px){
    .wrapper-content{
      margin-top: ${props => props.isSearched ? '50px' : 'calc(50vh - 300px)'};
    }
  }
  
  @media(max-height: 450px){
    margin-top: 20px;
  }
    
  /* MOBILE */
  @media (max-width: 870px){
    flex-direction: column;
    align-items: center;

    img{
      position: absolute;
      bottom: 50px;
      display: ${props => props.isSearched ? 'none' : 'block'};
      max-width: 100vw;
      height: 30%;
    }
  }
  
   /* SUMIR QUANDO TECLADO ABRIR */
   @media (max-height: 869px){
      img{
        height: 30%;
      }
    }

    @media (max-height: 590px){
      img{
        display: none;
      }
    }
`

export const WrapperLeft = styled.div`
   .logoSvg{
    max-width: 100vw;
    margin-left: ${props => props.isSearched ? '-160px' : '0'};
    /* DESKTOP */
    @media (min-width: 810px){
      height: ${props => props.isSearched ? '70px' : '250px'};
      margin-top: ${props => props.isSearched ? '-10px' : ''};
    }

    /* MOBILE */
    @media (max-width: 809px){
      height: ${props => props.isMapOpen ? '70px' : '200px'};
      margin-top: ${props => props.isMapOpen ? '40px' : '30px;'};
    }

    @media (max-width: 550px){
      height: ${props => props.isMapOpen ? '70px' : '100px'};
      margin-left: 0px;
    }

    /* TECLADO ABRIR */
    @media (max-height: 320px){
      height: 60px;
    }

    /* TECLADO ABRIR E PESQUISADO */
    @media (max-height: 450px){
      display: ${props => props.isSearched || props.isMapOpen ? 'none' : 'block'}
    }
    @media (max-height: 530px){
      display: ${props =>  props.isMapOpen ? 'none' : 'block'}
    }
  }
`

export const WrapperForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 810px){
    justify-content: center;
  }

  @media (max-width: 809px){
    flex-direction: column;
  }  
`

export const MapImage = styled.img`
  @media (min-width: 810px){
    position: fixed;
    right: 30px;
    top: 30%;
  }
`