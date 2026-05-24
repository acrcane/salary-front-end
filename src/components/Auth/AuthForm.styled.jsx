import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 16px;
`
export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  height: 400px;
  border: 1px solid var(--violet);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  backdrop-filter: blur(30px);
  padding: 24px 16px;
  @media (min-width: 768px) {
    padding: 32px 24px;
    gap: 30px;
  }
`
export const Label = styled.label``
export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: 1px solid var(--violet);
  border-radius: 7px;
  color: var(--pink);
  padding: 7px 10px;
  width: 100%;
`
export const Submit = styled.button`
  width: 100%;
  background-color: transparent;
  outline: none;
  border: 1px solid var(--violet);
  background-color: var(--violet);
  border-radius: 7px;
  transition: ease-in-out 0.3s;
  color: var(--white);
  padding: 7px 10px;
  margin-top: 8px;
  &:hover {
    background-color: var(--pink);
    border: 1px solid var(--pink);
  }
`
