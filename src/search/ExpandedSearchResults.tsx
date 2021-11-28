import { Modal } from '../modal'
import { SearchHitButton } from './SearchHitButton'
import * as S from './styled'
import { SearchHit, SearchResults } from './types'

export const ExpandedSearchResults = (props: {
  shouldExpand: boolean
  onHitClick: any
  data: SearchResults
}) => {
  if (!props.shouldExpand) return null

  return (
    <>
      <Modal.Body>
        {props.data.type === 'recents' && <h2>Recents</h2>}
        <SearchHits data={props.data.list} onHitClick={props.onHitClick} />
      </Modal.Body>
      <Modal.Footer>
        <S.HitCount>
          <span className="countVal">{props.data.list.length}</span> hits
        </S.HitCount>
      </Modal.Footer>
    </>
  )
}

const SearchHits = ({ data, onHitClick }: { data: SearchHit[]; onHitClick: any }) => {
  return (
    <S.HitList>
      {data.map((hit) => (
        <S.HitListItem key={hit.id}>
          <SearchHitButton hit={hit} onClick={onHitClick(hit)} />
        </S.HitListItem>
      ))}
    </S.HitList>
  )
}
