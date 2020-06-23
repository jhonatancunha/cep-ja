import React from 'react';
import Map from '../Maps'

// COMPONENTS
import InputFindCep from '../InputFindCep'
import CepTable from '../CepTable'
import Loading from '../commom/Loading'
import CardInformation from '../commom/Error'

// STYLES
import { Wrapper, ButtonRed, LoadDIV, Span, LoadDivMap, ExitLoadingMap } from './style'

// ICONS
import {ReactComponent as ArrowLeft} from '../../assets/arrow-left.svg'
import { ReactComponent as WarningIcon } from '../../assets/warning.svg'
import { ReactComponent as ErrorIcon } from '../../assets/error.svg'

const Search = ({
  city,
  erro,
  latitude,
  longitude,
  isLoading,
  searchedZidCode,
  isMapOpen,
  mapisLoading,
  mapError,
  handleGoBack,
  handleSubmit,
  handlepopulateCity,
  handleOpenMap,
  handlecloseLoadingMap,
  handleCloseNotification
}) => (
  <Wrapper searchedZidCode={searchedZidCode}>
    
    {!searchedZidCode && 
      <InputFindCep 
        city={city} 
        handlepopulateCity={handlepopulateCity} 
        handleSubmit={handleSubmit} 
        isLoading={isLoading}  
      />
    }

    {isLoading && 
    <LoadDIV>
      <Span>Carregando</Span><Loading />
      
    </LoadDIV>
    }
    
    {searchedZidCode && !isMapOpen && 
      <CepTable handleOpenMap={handleOpenMap} />
    }

    {mapisLoading &&
      <LoadDivMap>
        <Span>Carregando mapa</Span><Loading />
        <ExitLoadingMap onClick={handlecloseLoadingMap}>⨯</ExitLoadingMap>
      </LoadDivMap>
    }

    {/* NOTIFICAÇÃO DE ERRO */}
    <CardInformation
      action={handleCloseNotification}
      status={erro}
      title="ATENÇÃO!" 
      description="CEP ou endereço inválido, verifique a informação digitada!" 
      color="#F0D43A" 
      Icon={WarningIcon}
    />
    
    <CardInformation
        action={handleCloseNotification}
        status={mapError}
        title="OOOPS!!! Error..." 
        description="Mapa não pode ser carregado por falta de informações..." 
        color="#D42627" 
        Icon={ErrorIcon}
    />


    
    {isMapOpen  &&
    <>
    <ButtonRed onClick={handleGoBack} isMapOpen={isMapOpen} >
      <ArrowLeft />
    </ButtonRed>
     <Map isMapOpen={isMapOpen} latitude={Number(latitude)} longitude={Number(longitude)} />
    </>
    }
  </Wrapper>
);

export default Search;

