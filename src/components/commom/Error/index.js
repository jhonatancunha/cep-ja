import React from 'react'

// STYLES
import { Wrapper, WrapperInformation, WrapperIcon, Title, Description, Exit } from './style'

export default ({ title, description, color, Icon, status, action }) => {
  return (
    <Wrapper status={status}>
      <WrapperIcon backgroundColor={color}>
        <Icon />
      </WrapperIcon>
      <WrapperInformation>
        <Title titleColor={color}>{title}</Title>
  <Description>{description}</Description>
        <Exit onClick={action}>X</Exit>
      </WrapperInformation>
    </Wrapper>
  )
}