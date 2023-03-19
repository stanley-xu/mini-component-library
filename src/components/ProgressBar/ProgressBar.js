/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Base = styled.div`
  background-color: ${COLORS.transparentGray15};
  height: var(--bar-height);
  border-radius: var(--bar-radius);
  padding: var(--bar-padding);
`

const MeterWrapper = styled.div`
  // Clipping meter content that extends past the border of the progress bar
  overflow-x: hidden;
  height: 100%;
  border-radius: var(--bar-radius);
`

const RADIUS = {
  rounded: 'var(--bar-radius)',
  none: '0',
}

const radius = (value) => value === 100 ? RADIUS.rounded : RADIUS.none

const Meter = ({ value }) => {
  const Component = styled.div`
    width: ${value}%;
    height: 100%;
    background-color: ${COLORS.primary};
    border-radius: ${RADIUS.rounded} ${radius(value)} ${radius(value)} ${RADIUS.rounded};
  `
  return (
    <Component
      value={value}
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  )
}

const VARIANT_PROPERTIES = {
  small: {
    '--bar-height': '8px',
    '--bar-radius': '4px',
  },
  medium: {
    '--bar-height': '12px',
    '--bar-radius': '4px',
  },
  large: {
    '--bar-height': '24px',
    '--bar-radius': '8px',
    '--bar-padding': '4px',
  },
}


const ProgressBar = ({ value, size }) => {
  const variantProps = VARIANT_PROPERTIES[size]
  if (!variantProps) throw new Error(`Unknown size variant: ${size}`)

  const accessibleContent = (
    <VisuallyHidden>
      <strong>{value}</strong>
    </VisuallyHidden>
  );

  return (
    <Base style={variantProps}>
      <MeterWrapper>
        <Meter value={value}>
          {accessibleContent}
        </Meter>
      </MeterWrapper>
    </Base>
  )
};

export default ProgressBar;
