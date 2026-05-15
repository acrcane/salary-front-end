import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  width: 400px;
  height: 200px;
  > h2 {
    font-size: 2em;
    text-align: center;
    color: var(--white);
  }
`
export const BtnContainer = styled.div`
  min-width: 300px;
  max-width: 400px;
  min-height: 200px;
  max-height: 300px;
  display: flex;
  justify-content: space-around;
  > button {
    width: 80px;
    height: 30px;
    border: 1px solid var(--pink);
    border-radius: 15px;
    background-color: var(--pink);
    color: var(--white);
    transition: box-shadow 0.3s ease-in-out;
    &:hover,
    &:active {
      box-shadow: 0px 9px 30px -4px var(--pink);
    }
  }
`
