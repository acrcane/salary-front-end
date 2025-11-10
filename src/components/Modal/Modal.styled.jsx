import styled from 'styled-components'

export const Backgroung = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100vh;
  background-color: #00000083;
  z-index: 1;
`
export const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, ${({ $showContent }) => ($showContent ? '-50%' : '-200%')});
  transition: transform 0.5s ease;
 
  max-width: fit-content;
  height: fit-content;
  background-color: var(--white);
  z-index: 9;
  border-radius: 20px;
`
export const HeadContainer = styled.div`
  min-width: 300px;
  max-width: 800px;
  min-height: 60px;
  max-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  > h2 {
    font-size: 1.5em;
    color: transparent;
  }
  > button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid var(--pink);
  }
`
