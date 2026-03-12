import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: transparent;
`
export const Buttons = styled.button`
  width: 200px;
  height: 80px;
  color: var(--white);
  outline: none;
  border: 1px solid var(--pink);
  transition: box-shadow 0.3s ease-in-out;
  &:hover,
  &:active {
    box-shadow: 0px 9px 30px -4px var(--pink);
  }
`
export const CheckIn = styled(Buttons)`
  background-color: var(--pink);
`
export const CheckOut = styled(Buttons)`
  background-color: transparent;
  color: var(--white);
`
