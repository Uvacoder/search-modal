import { SearchHit } from './types'

const fixtures = [
  { id: 'max-width', title: 'Max-Width' },
  { id: 'height', title: 'Height' },
  { id: 'placeholder-color', title: 'Placeholder Color' },
  { id: 'width', title: 'Width' },
  { id: 'letter-spacing', title: 'Letter Spacing' },
  { id: 'animation', title: 'Animation' },
  { id: 'container', title: 'Container' }
]

export const getSearchResults = (query: string) => {
  let hits = [] as SearchHit[]

  if (query.length) {
    const a = query.toLowerCase()
    hits = fixtures.filter((item) => {
      const b = item.title.toLowerCase().substr(0, query.length)
      return a === b
    })
  }

  return hits
}

export const findTagById = (id: string) => {
  const found = fixtures.find((f) => f.id === id)
  if (!found) {
    throw new Error('Could not find tag for id: ' + id)
  }
  return found
}
