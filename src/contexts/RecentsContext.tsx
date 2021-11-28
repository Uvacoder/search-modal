import { createContext, Dispatch, SetStateAction, useCallback, useContext, useState } from 'react'

import { SearchHit } from '../search/types'

interface IRecentsContext {
  recents: SearchHit[]
  setRecents: Dispatch<SetStateAction<SearchHit[]>>
  updateRecents: (hit: SearchHit) => void
}

const RecentsContext = createContext<IRecentsContext | undefined>(undefined)

export const useRecents = () => {
  const ctx = useContext(RecentsContext)
  if (!ctx) throw new Error()
  return ctx
}

export const RecentsProvider: React.FC = ({ children }) => {
  const [recents, setRecents] = useState<SearchHit[]>([])

  const updateRecents = useCallback(
    (hit: SearchHit) => {
      // Create updated clone of recents
      let newRecents = [...recents].slice(0, 9)
      if (newRecents.some((r) => r.id === hit.id)) {
        newRecents = newRecents.filter((r) => r.id !== hit.id)
      }
      newRecents.unshift(hit)
      // Update the list
      setRecents(newRecents)
    },
    [recents]
  )

  return (
    <RecentsContext.Provider value={{ recents, setRecents, updateRecents }}>
      {children}
    </RecentsContext.Provider>
  )
}
