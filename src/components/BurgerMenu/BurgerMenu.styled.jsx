import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Navigation = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > ul {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    gap: 32px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

export const Link = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: var(--white);
  transition: color 0.3s ease-in-out;

  &.active,
  &:hover {
    color: var(--pink);
  }

  @media (min-width: 480px) {
    font-size: 1.75rem;
  }
`
