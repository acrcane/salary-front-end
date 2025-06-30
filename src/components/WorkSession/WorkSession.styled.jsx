import styled from "styled-components";

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
`
export const CheckIn = styled(Buttons)`
background-color: var(--green);
`
export const CheckOut = styled(Buttons)`
background-color: var(--red);
`