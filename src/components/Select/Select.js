import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  width: fit-content;
  position: relative;

  &:hover {
    & svg, & select {
      color: black;
    }
  }
`

const SelectWrapper = ({ chars, ...rest }) => {
  const Component = styled.select`
    appearance: none;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    color: ${COLORS.gray700};
    
    border-radius: 8px;
    padding: 12px 48px 12px 16px;
    background-color: ${COLORS.transparentGray15};

    width: ${chars && `calc(${chars}ch + 64px)`};
  `
  return <Component {...rest} />
}

const IconWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  & svg {
    width: 100%;
    height: 100%;
    color: ${COLORS.gray700};
  }
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  console.log({ displayedValue, label })

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange} chars={displayedValue.length}>
        {children}
      </SelectWrapper>
      <IconWrapper>
        <Icon id='chevron-down' size={16} strokeWidth={2} />
      </IconWrapper>
    </Wrapper>

  );
};

export default Select;
