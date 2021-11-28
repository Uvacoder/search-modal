import styled, { css } from 'styled-components'

import colors from '../colors'
import { rem } from '../util/rem'

const Svg = styled.svg`
  vertical-align: middle;
`
export const SearchSvg = ({ size = 24 }: { size?: number }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      />
    </Svg>
  )
}

const Label = styled.label<{ sizeInPx: number; color: string }>`
  flex: none;
  ${(props) => css`
    width: ${rem(props.sizeInPx)};
    height: ${rem(props.sizeInPx)};
    color: ${props.color};
  `}
  padding-top: 1.5px;
  background-size: 100%;
`

export const SearchIcon = ({
  size = 24,
  color = colors.gray['500']
}: {
  size?: number
  color?: string
}) => {
  return (
    <Label sizeInPx={size} color={color}>
      <SearchSvg size={size} />
    </Label>
  )
}
