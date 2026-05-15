import styled from "styled-components";
export const Main = styled.main`
    width: 100%;
    min-height: calc(var(--vh, 1vh) * 100 - 80px);
    background-image: url('${import.meta.env.BASE_URL}images/background/endless-constellation.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`