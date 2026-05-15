import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 99vh;
  @media (min-width: 769px) {
    width: 500px;
    height: 500px;
  }
  > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > button {
      margin-top: 70px;
      width: 340px;
      height: 50px;
      color: var(--white);
      background-color: var(--pink);
      border-radius: 30px;
      font-size: 2em;
      transition: box-shadow 0.3s ease-in-out;
      &:hover,
      &:active {
        box-shadow: 0px 9px 30px -4px var(--pink);
      }
    }
  }
`
export const Title = styled.h2`
  text-align: center;
  color: var(--white);
`
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > label {
    display: block;
    color: var(--white);
    font-size: 2em;
  }
  > input {
    width: 340px;
    height: 50px;
    border-radius: 30px;
    color: var(--pink);
    padding: 10px 90px;
  }
`
