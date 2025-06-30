import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.header`
    height: 80px;
    width: 100%;
    background-color: var(--violet);
    display: flex;
    align-items: center;
    padding: 0 20px;
    > nav {
        display: flex;
        width: 100%;
        height: 100%;
        gap: 12px;
        background-color: transparent;
        align-items: center;
    }
`
export const Link = styled(NavLink)`
    font-size: 1.6em;
    color: var(--white);
    transition: ease-in-out 0.3s;
    &:hover{
        color: var(--pink);
    }
    &.active{
        color: var(--pink);
    }
` 