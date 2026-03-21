import styled from 'styled-components'

export const Table = styled.table`
  margin: 0 auto;
  width: 100%;
  border-collapse: collapse;
  background: var(--violet);
  transform: translateY(50px);
  @media (min-width: 768px){
    width: 60%;
    max-height: 100%;
  }
`
export const Col = styled.tr`

`
export const RawTitle = styled.th`
  font-size: 2em;
  color: var(--pink);
  text-align: center;
  
`
export const Raw = styled.td`
  font-size: 1em;
  color: #fff;
  border: 1px solid var(--pink);
  text-align: center;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
