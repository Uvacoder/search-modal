import { ChangeEventHandler, useState } from 'react'
import styled from 'styled-components'

import colors from '../colors'
import { Input } from '../input'
import { KeyCombo } from '../KeyCombo'
import { SearchIcon } from './SearchIcon'

const iconSize = 26
const iconColor = colors.blue['500']
const inputPlaceholder = 'Search docs'

export interface SearchFormProps {
  query: string
  onQueryChange: (val: string) => void
}

export function SearchForm({ query: initialQuery, onQueryChange }: SearchFormProps) {
  const [localQuery, setLocalQuery] = useState(initialQuery)

  const onChange: ChangeEventHandler<HTMLInputElement> = ({ currentTarget: { value } }) => {
    setLocalQuery(value)
    onQueryChange(value)
  }

  return (
    <Form role="search" noValidate>
      <Left>
        <SearchIcon size={iconSize} color={iconColor} />
        <Input
          type="search"
          placeholder={inputPlaceholder}
          value={localQuery}
          onChange={onChange}
        />
      </Left>
      <KeyCombo keys={['esc']} />
    </Form>
  )
}

const Left = styled.div`
  display: flex;
  align-items: center;
`

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
