import { useParams } from 'react-router-dom'

import { PageContent } from './layout'
import { findTagById } from './search/helpers'

export default function Tag() {
  const { tagId } = useParams()
  if (!tagId) {
    throw new Error('tagId param as undefined')
  }
  return (
    <PageContent>
      <h2>{findTagById(tagId).title}</h2>
    </PageContent>
  )
}
