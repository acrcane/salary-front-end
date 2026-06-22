import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 20px;
  background: rgba(var(--dark-rgb), 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(var(--accent-rgb), 0.12);
`
export const BurgerButton = styled.button`
  display: flex;
  width: 50px;
  height: 50px;
  background-color: var(--glow);

  @media (min-width: 1024px) {
    display: none;
  }
`
export const DesktopNav = styled.nav`
  display: none;
  width: 100%;
  height: 100%;
  gap: 12px;
  align-items: center;
  @media (min-width: 1024px) {
    display: flex;
  }
`
export const Link = styled(NavLink).withConfig({
  shouldForwardProp: (prop) => prop !== '$disabled',
})`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.002em;
  color: var(--text-sub);
  transition: color 0.2s ease-in-out;
  padding: 6px 14px;
  border-radius: 8px;
  &:hover {
    background: rgba(var(--accent-rgb), 0.08);
    color: var(--text);
  }
  &.active {
    color: var(--accent-light);
    background: rgba(var(--accent-rgb), 0.1);
  }
  @media (min-width: 1024px) {
    font-size: 1.125rem;
  }
`
export const MessageBtn = styled.button`
  width: 30px;
  height: 30px;
  background: rgba(var(--dark--rgb), 0.85);
`

export const LetterIcon = styled.svg`
  width: 50px;
  height: 50px;
  stroke: var(--pink);
`
export const BurgerIcon = styled.svg`
  width: 100%;
  height: 100%;
  fill: var(--white);
`
