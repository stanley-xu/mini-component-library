/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Base = styled.div`
  background-color: ${COLORS.transparentGray15};
  height: var(--bar-height);
  border-radius: var(--bar-radius);
`

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
  },
}

const RADIUS = {
  rounded: 'var(--bar-radius)',
  none: '0',
}

const ProgressBar = ({ value, size }) => {
  const variantProps = VARIANT_PROPERTIES[size]
  if (!variantProps) throw new Error(`Unknown size variant: ${size}`)

  const accessibleContent = (
    <VisuallyHidden>
      <strong>{value}</strong>
    </VisuallyHidden>
  );

  const radius = (value) => value === 100 ? RADIUS.rounded : RADIUS.none

  console.log({ test: radius(value) })

  const MeterWrapper = styled.div`
    width: ${value}%;
    height: 100%;
    background-color: ${COLORS.primary};
    border-radius: ${RADIUS.rounded} ${radius(value)} ${radius(value)} ${RADIUS.rounded};
  `
  const markup = (
    <Base style={variantProps}>
      <MeterWrapper>
        {accessibleContent}
      </MeterWrapper>
    </Base>
  )

  return markup
};

export default ProgressBar;
