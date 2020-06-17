import styled from 'styled-components'

export const All = styled.div`
  display: flex;
  justify-content: space-between;
  /* DESKTOP */
  @media (min-width: 810px){
    img{
      margin-left: 50px;
    }
  }
  
  /* MOBILE */
  @media (max-width: 809px){
    flex-direction: column;
    align-items: center;

    img{
      position: absolute;
      bottom: 50px;
      display: ${props => props.isSearched ? 'none' : 'block'};
      max-width: 100vw;
    }
  }
  @media (max-width: 450px){
    img{
      height: 50%;
    }
  } 
 
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
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
      margin-top: ${props => props.isMapOpen ? '10px' : '110px'};
      margin-bottom: ${props => props.isMapOpen ? '0' : '30px'};
    }

    @media (max-width: 450px){
      height: 100px;
      margin-top: ${props => props.isMapOpen ? '15px' : '30px'};
      margin-left: ${props => props.isMapOpen ? '20px': '0'};
    }


  }

  /* DESKTOP */
  @media (min-width: 810px){
    height: 100vh;
    width: 50vw;
  }

  
`