import styled from 'styled-components'
import Popup from 'reactjs-popup'

export const PopupTriger = styled(Popup)`
  width: 50px;
  height: 50px;
  background-color: var(--pink);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const TrigerBtn = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  text-align: center;
  outline: none;
  box-shadow: none;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`

export const ActionContainer = styled.div`
margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* align-items: center; */
  background-color: var(--white);
  width: 200px;
  height: 100px;
  border-radius: 10px;
  padding-left: 5px;
  >button{
    text-align: center;
    outline: none;
    box-shadow: none;
    background-color: transparent;
    border: 1px solid var(--violet);
    border-radius: 10px;
    width: 100px;
    height: 30px;
  }
`
export const Icon = styled.svg`
  width: 100%;
  height: 100%;
  fill: var(--violet);
  stroke: var(--pink);
`
// export const List = styled.ul`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: var(--pink);
// `

// export const ListElem = styled.li`
//   font-size: 2em;
//   font-style: italic;
//   color: var(--violet);
// `
