import styled from "styled-components";

export const Container = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;

> form{
    width: 400px;
    height: 400px;
    border: 1px solid var(--violet);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    /* background-color: transparent; */
    backdrop-filter: blur(10px) ;
    padding: 10px;
    &:focus{
        background-color: #ccc;
    }
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
background-color: transparent;
outline: none;
border: 1px solid var(--violet);
background-color: var(--violet);
border-radius: 7px;
transition: ease-in-out 0.3s;
color: var(--white);
padding: 7px 10px;
margin-top: 20px;
&:hover{
    background-color: var(--pink);
    border: 1px solid var(--pink);
}
`