import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.header`
  height: 80px;
  width: 100%;
  background-color: var(--violet);
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 20px;
`
export const BurgerButton = styled.button`
  display: flex;
  width: 50px;
  height: 50px;
  background-color: transparent;

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
  color: ${({ $disabled }) => ($disabled ? '#ccc' : 'var(--white)')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  transition: color 0.3s ease-in-out;

  &:hover,
  &.active {
    color: ${({ $disabled }) => ($disabled ? '#ccc' : 'var(--pink)')};
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
  }
`
export const LetterIcon = styled.svg`
  width: 50px;
  height: 50px;
  stroke: var(--pink);
`
