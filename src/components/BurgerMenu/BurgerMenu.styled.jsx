import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Navigation = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  > ul {
    padding: 8px 0;
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    list-style: none;

    > li {
      width: 100%;
    }
  }
`

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  fill: var(--text-muted);
  flex-shrink: 0;
  transition: fill 0.15s ease;
`

export const Link = styled(NavLink).withConfig({
  shouldForwardProp: prop => prop !== '$disabled',
})`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding: 12px 20px;
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: var(--text-sub);
  transition: all 0.15s ease;
  position: relative;
  opacity: ${({ $disabled }) => ($disabled ? 0.35 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};

  &:hover {
    color: var(--text);
    background: rgba(var(--accent-rgb), 0.06);

    ${Icon} {
      fill: var(--accent-light);
    }
  }

  &.active {
    color: var(--accent-light);
    background: rgba(var(--accent-rgb), 0.1);

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 6px;
      bottom: 6px;
      width: 2px;
      background: var(--accent);
      border-radius: 0 2px 2px 0;
    }

    ${Icon} {
      fill: var(--accent);
    }
  }
`