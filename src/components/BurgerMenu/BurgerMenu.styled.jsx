import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  > ul {
    padding-left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } 
`

export const Link = styled(NavLink)`
  font-size: 2em;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: var(--white);

  @media (min-width: 769px) {
    letter-spacing: 0.02em;
  }
`
