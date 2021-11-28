import styled from 'styled-components'

import colors from '../colors'
import { SearchHit } from './types'

export interface SearchStyledButtonProps {
  hit: SearchHit
  onClick: () => void
}

export function SearchHitButton({ hit, onClick }: SearchStyledButtonProps) {
  return (
    <StyledButton onClick={onClick}>
      <h3>{hit.title}</h3>
    </StyledButton>
  )
}

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  background: ${colors.gray['50']};
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  padding: 0 1.25rem 0 1rem;

  &:hover {
    background: ${colors.indigo['500']};
    color: white;
  }
`
