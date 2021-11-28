import { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { useInitialQuery } from '../contexts/InitialQueryContext'
import { useRecents } from '../contexts/RecentsContext'
import { useSearch } from '../hooks/useSearch'
import { Modal } from '../modal'
import { ExpandedSearchResults } from './ExpandedSearchResults'
import { getSearchResults } from './helpers'
import { SearchForm } from './SearchForm'
import { SearchHit, SearchResults } from './types'

interface SearchModalProps {
  open: boolean
  onClose: () => void
}

/**
 * Modal used for search and can be toggled by pressing CMD+K.
 */
export function SearchModal({ open, onClose }: SearchModalProps) {
  const navigate = useNavigate()

  const { setInitialQuery } = useInitialQuery()
  const { recents, updateRecents } = useRecents()

  const { query, setQuery, hits, setHits, reset } = useSearch()

  useEffect(() => {
    setHits(getSearchResults(query))
  }, [query])

  const handleClose = () => {
    reset()
    onClose()
  }

  const onHitClick = (hit: SearchHit) => () => {
    updateRecents(hit)
    setInitialQuery(hit.title)
    onClose()
    navigate(`/tags/${hit.id}`)
  }

  const effects = useMemo(() => {
    const data: SearchResults =
      hits.length > 0 ? { list: hits, type: 'hits' } : { list: recents, type: 'recents' }

    const shouldExpand = query.length > 0 && data.list.length > 0

    return { data, shouldExpand }
  }, [hits, recents])

  return (
    <Modal open={open} onClose={handleClose}>
      <Modal.Header>
        <SearchForm query={query} onQueryChange={setQuery} />
      </Modal.Header>
      <ExpandedSearchResults
        shouldExpand={effects.shouldExpand}
        data={effects.data}
        onHitClick={onHitClick}
      />
    </Modal>
  )
}
