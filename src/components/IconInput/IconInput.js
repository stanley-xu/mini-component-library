import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  position: relative;

  &:hover {
    & svg, & input {
      color: black;
    }
  }
`

const BaseIconWrapper = styled.span`
  & svg {
    color: ${COLORS.gray700};
  }
`

const SmallIconWrapper = styled(BaseIconWrapper)`
  position: absolute;
  left: 2px;
  top: 4px;
  // My hack to make this icon clickable
  // You're in fact clicking <Input />, it's presented above the icon
  z-index: -1;
`

const LargeIconWrapper = styled(BaseIconWrapper)`
  position: absolute;
  left: 2px;
  top: 6px;
  // My hack to make this icon clickable
  // You're in fact clicking <Input />, it's presented above the icon
  z-index: -1;
`

const Input = ({ width, ...rest }) => {
  const Component = styled.input`
    padding-left: var(--spacing-left);
    padding-bottom: var(--spacing-bottom);
    padding-top: var(--spacing-top);
    width: ${width}px;

    background-color: transparent;

    border: none;
    border-bottom: 2px solid ${COLORS.black};

    font-family: Roboto, sans-serif;
    font-size: var(--font-size);
    font-weight: 700;
    color: ${COLORS.gray700};
    &::placeholder {
      font-weight: 400;
      color: ${COLORS.gray500};
    }
  `

  return <Component {...rest} />
}

const INPUT_VARIANT_PROPERTIES = {
  small: {
    '--font-size': '14px',
    '--spacing-left': '24px',
    '--spacing-bottom': '4px',
    '--spacing-top': '4px',
  },
  large: {
    '--font-size': '18px',
    '--spacing-left': '36px',
    '--spacing-bottom': '6px',
    '--spacing-top': '8px',
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const inputVariantProps = INPUT_VARIANT_PROPERTIES[size]
  if (!inputVariantProps) throw new Error(`Unknown size variant: ${size}`)

  let iconMarkup;
  switch (size) {
    case 'small': {
      iconMarkup = (
        <SmallIconWrapper>
          <Icon id={icon} size={16} strokeWidth={2} />
        </SmallIconWrapper>
      )
      break;
    }
    case 'large': {
      iconMarkup = (
        <LargeIconWrapper>
          <Icon id={icon} size={24} strokeWidth={2} />
        </LargeIconWrapper>
      )
      break;
    }
    default: iconMarkup = null
  }


  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      {iconMarkup}
      <Input width={width} placeholder={placeholder} style={inputVariantProps} />
    </Wrapper>
  )
}

export default IconInput;
