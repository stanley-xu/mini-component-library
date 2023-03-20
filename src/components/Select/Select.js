import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const CustomSelect = styled.div`
  position: relative;
  top: 0;
  left: 0;

  // Stacking context
  isolation: isolate;

  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  background-color: ${COLORS.transparentGray15};
`

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;

  // Hide front-facing native select element so our custom one is shown
  opacity: 0;
  // Span the full dimensions of the Wrapper container
  width: 100%;
  height: 100%;
`

const IconWrapper = ({ size, ...rest }) => {
  const Component = styled.span`
    width: ${size}px;
    height: ${size}px;

    position: absolute;
    top: 0;
    right: 12px;
    bottom: 0;
    margin: auto 0;
  `
  return (
    <Component {...rest}>
      <Icon id="chevron-down" size={size} strokeWidth={2} />
    </Component>
  )
}

const Wrapper = styled.div`
  position: relative;

  width: fit-content;
  font-size: 16px;
  font-weight: 400;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  // Using focus-within to detect focus on NativeSelect,
  //  then use that event to style CustomSelect
  // By default, the wrapper does not receive focus state for some reason
  // Alternative: use sibling combinator (NativeSelect:focus + CustomSelect),
  //  but requires NativeSelect tag to sit above CustomSelect; will need depth change
  &:focus-within ${CustomSelect} {
    outline: 1px dotted ${COLORS.black};
    outline: 5px auto -webkit-focus-ring-color;
  }
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <CustomSelect>
        {displayedValue}
      </CustomSelect>
      <IconWrapper size={24} />
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
    </Wrapper>
  )
};

export default Select;
