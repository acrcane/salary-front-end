import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: transparent;
`
export const DisplayContainer = styled.div``
export const Buttons = styled.button`
  width: 200px;
  height: 46px;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 12px;
  color: var(--white);
  transition: box-shadow 0.3s ease-in-out;
  &:hover,
  &:active {
    box-shadow: 0px 9px 30px -4px var(--pink);
  }
`
export const CreateTable = styled(Buttons)`
  background: var(--accent);
  border: none;
  box-shadow: 0 3px 16px var(--glow);
`
export const CloseTable = styled(Buttons)`
  background: transparent;
  color: #f87171;
  border: 1px solid rgba(239, 68, 68, 0.25);
  font-weight: 500;

  &:hover {
    background: rgba(239, 68, 68, 0.06);
    border-color: rgba(239, 68, 68, 0.5);
  }
`
export const Pause = styled(Buttons)``
export const CheckIn = styled(Buttons)`
  background: transparent;
  color: var(--accent-light);
  border: 1px solid rgba(var(--accent-rgb), 0.3);

  &:hover {
    background: rgba(var(--accent-rgb), 0.08);
    border-color: var(--accent);
  }
`
export const CheckOut = styled(Buttons)`
  background-color: transparent;
  color: var(--white);
`
