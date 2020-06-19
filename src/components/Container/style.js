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
        /* display: none; */
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
   /* logo */
   .logoSvg{
    max-width: 100vw;
    /* DESKTOP */
    @media (min-width: 810px){
      height: ${props => props.isSearched ? '120px' : '250px'};
      margin-bottom: ${props => props.isSearched ? '20px' : '20px'};
      margin-left: ${props => props.isSearched ? '-85px' : '0'};
   
      position: ${props => props.isMapOpen ? 'absolute' : 'relative'};
      bottom: ${props => props.isMapOpen ? '0' : '0'};
      left: ${props => props.isMapOpen ? '-45px;' : '0'};
    }

    /* MOBILE */
    @media (max-width: 809px){
      height: ${props => props.isMapOpen ? '100px' : '200px'};
      margin-top: ${props => props.isMapOpen ? '10px' : '30px;'};
      margin-bottom: ${props => props.isMapOpen ? '0' : '30px'};
    }

    @media (max-width: 550px){
      height: 100px;
      margin-top: ${props => props.isMapOpen ? '15px' : '30px'};
      margin-left: ${props => props.isMapOpen ? '20px': '0'};
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