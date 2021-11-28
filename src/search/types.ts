export interface SearchHit {
  id: string
  title: string
}

export type SearchResults = { list: SearchHit[]; type: 'hits' | 'recents' }
