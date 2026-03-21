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
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: var(--violet);
  transform: translate(
    -50%,
    ${({ $showContent }) => ($showContent ? '-50%' : '-200%')}
  );
  transition: transform 0.5s ease;

  width: ${({ $type }) =>
    $type === 'lastClosedTable'
      ? '1024px'
      : $type === 'settings'
      ? '800px'
      : 'fit-content'};
  max-width: 100%;
  height: ${({ $type }) =>
    $type === 'lastClosedTable' ? '90vh' : 'fit-content'};
  z-index: 9;
  border: 1px solid var(--white);
  border-radius: 20px;

  @media (min-width: 360px) and (max-width: 1024px) {
    top: 0;
    left: 0;
    transform: ${({ $showContent }) =>
      $showContent ? 'translate(0, 0)' : 'translateY(-100%)'};
    width: 100%;
    height: 100dvh;
    border-radius: 0;
    background-color: var(--violet);
  }
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
    display: flex;
    justify-content: center;
    align-items: center;
    > svg{
      width: 30px;
      height: 30px;
      fill: var(--pink);
      transition: all 0.3s ease-in-out;
      &:hover{
        width: 35px;
        height: 35px;
        transform: rotate(180deg)
      }
    }
  }
`
