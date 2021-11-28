import { Route, Routes } from 'react-router-dom'

import App from './App'
import { useKeyCombo } from './hooks/useKeyCombo'
import { useModal } from './hooks/useModal'
import { Header, Page } from './layout'
import { SearchBar } from './search/SearchBar'
import { SearchModal } from './search/SearchModal'
import Tag from './tag'

export default function Main() {
  const { open, closeModal, openModal } = useModal()

  useKeyCombo('Meta+k', openModal)

  return (
    <Page>
      <Header>
        <SearchBar onClick={openModal} />
      </Header>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="tags/:tagId" element={<Tag />} />
      </Routes>
      <SearchModal open={open} onClose={closeModal} />
    </Page>
  )
}
