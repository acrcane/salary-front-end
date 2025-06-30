import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Section = styled.section`
display: flex;
flex-direction: column;
height: 100%;
gap: 100px;
> div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    /* height: 100%; */
}
`

export const MainTitle = styled.h1`
display: none;
`

export const Title = styled.h2`
    color: var(--white);
    text-align: center;
`

export const List = styled.ul`
list-style: disc;
`

export const ListItems = styled.li`
color: var(--white);
font-size: 1.3em;
font-weight: 300;
`

export const AuthLinkButton = styled(NavLink)`
width: 100%;
height: 50px;
border-radius: 15px;
background-color: var(--violet);
display: flex;
justify-content: center;
align-items: center;
color: var(--white);
font-size: 1.5em;
font-weight: 500;
cursor: pointer;
`