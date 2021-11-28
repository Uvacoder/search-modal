import styled from 'styled-components'

import colors from '../colors'

export const HitListItem = styled.li`
  position: relative;
`

export const HitList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const HitCount = styled.p`
  line-height: 100%;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.gray['500']};

  .countVal {
    font-size: 1rem;
    font-weight: 700;
  }
`
