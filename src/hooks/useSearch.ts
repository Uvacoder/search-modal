import { useState } from 'react'

import { SearchHit } from '../search/types'
import { useDebouncedState } from './useDebouncedState'

export const useSearch = () => {
  const [query, setQuery] = useDebouncedState('', 200)
  const [hits, setHits] = useState<SearchHit[]>([])

  const reset = () => {
    setQuery('')
    setHits([])
  }

  return { query, setQuery, hits, setHits, reset }
}
