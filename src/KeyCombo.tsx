/* eslint-disable @typescript-eslint/ban-types */
import { FunctionComponent } from 'react'
import styled from 'styled-components'

import colors from './colors'
import { CmdIcon } from './lib/icons'

export function toKeySymbol(key: string): FunctionComponent<{}> {
  if (key === 'cmd') {
    return () => <CmdIcon size={16} />
  }
  return () => <span className="textKeySymbol">{key.toLocaleUpperCase()}</span>
}
export interface KeyCmdProps {
  keys: string[]
}

export function KeyCombo({ keys }: KeyCmdProps) {
  return (
    <Container>
      {keys
        .map((k) => toKeySymbol(k))
        .map((KeySymbol, i) => (
          <KeySymbol key={i} />
        ))}
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid ${colors.gray['300']};
  border-radius: 0.375rem;
  background: ${colors.gray['100']};
  min-width: 2.25rem;
  height: 1.5rem;
  padding-left: 0.375rem;
  padding-right: 0.375rem;
  display: flex;
  gap: 0.125rem;
  font-weight: 600;
  color: ${colors.gray['400']};
  align-items: center;

  .textKeySymbol {
    font-size: 16px;
  }

  /* div.keyCombo { */
  /* margin: 0 auto;
    text-align: center;
    font-size: 14px;
    line-height: 14px;
    font-weight: 700;
    color: ${colors.gray['400']}; */
  /* } */
`
