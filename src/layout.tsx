import styled from 'styled-components'

const Page = styled.div`
  max-width: 90rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

const PageContent = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  width: 100%;
  padding: 0 2rem;
`

const Header = styled.div`
  flex: none;
  max-width: 90rem;
  width: 100%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  z-index: 40;
  top: 0;
  position: sticky;
`

export { Page, Header, PageContent }
