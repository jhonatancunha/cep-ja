import React from 'react'

// STYLES
import { Wrapper, Span } from './style'

// ICONS
import {ReactComponent as Facebook} from '../../assets/facebook.svg'
import {ReactComponent as Github} from '../../assets/github.svg'

const faceLink = 'https://www.facebook.com/jhonatan.cunha.9/';
const gitLink = 'https://github.com/jhonatancunha';

export default () => (
  <Wrapper>
    <Span>
      ©
    </Span>
    2020. Jhonatan Cunha
    <a href={gitLink}>
      <Github />
    </a>
    <a href={faceLink}>
      <Facebook />
    </a>
  </Wrapper>
)