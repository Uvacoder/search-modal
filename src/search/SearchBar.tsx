import styled from 'styled-components'

import colors from '../colors'
import { useInitialQuery } from '../contexts/InitialQueryContext'
import { inputStyle } from '../input'
import { KeyCombo } from '../KeyCombo'
import { SearchIcon } from './SearchIcon'

const iconSize = 22
const inputPlaceholder = 'Quick search for anything'
const openKeyCombo = ['cmd', 'k']

export const SearchBar = ({ onClick }: { onClick: () => void }) => {
  const { initialQuery } = useInitialQuery()

  return (
    <Container>
      <SearchIcon size={iconSize} />
      <SearchInput
        type="search"
        placeholder={inputPlaceholder}
        value={initialQuery}
        onClick={onClick}
      />
      <KeyCombo keys={openKeyCombo} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.gray['200']};
  width: 100%;
  padding: 0 1rem;
`

const SearchInput = styled.input({
  ...inputStyle,
  height: '3.5rem',
  fontSize: '13px',
  margin: '0 0.25rem'
})
