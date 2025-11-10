import styled from "styled-components";

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 20px;

`
export const Elem = styled.li`
color: var(--white);
> button{
    background-color: var(--violet);
    color: var(--white);
    width: 150px;
    height: 30px;
}
`