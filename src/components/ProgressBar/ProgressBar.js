/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Base = styled.div`
  background-color: ${COLORS.transparentGray15};
`

const Small = styled(Base)`
  height: 8px;
  border-radius: 4px;
`

const Medium = styled(Base)`
  height: 12px;
  border-radius: 4px;
`

const Large = styled(Base)`
  height: 24px;
  border-radius: 8px;
`

const ProgressBar = ({ value, size }) => {
  let Wrapper;
  switch (size) {
    case 'small': Wrapper = Small; break;
    case 'medium': Wrapper = Medium; break;
    case 'large': Wrapper = Large; break;
    default: Wrapper = Medium
  }

  const accessibleContent = (
    <VisuallyHidden>
      <strong>{value}</strong>
    </VisuallyHidden>
  );

  const MeterWrapper = styled.div`
    width: ${value}%;
    height: 100%;
    background-color: ${COLORS.primary};
    border-radius: inherit;
  `

  const markup = (
    <Wrapper>
      <MeterWrapper>
        {accessibleContent}

      </MeterWrapper>
    </Wrapper>
  )

  return markup
};

export default ProgressBar;
