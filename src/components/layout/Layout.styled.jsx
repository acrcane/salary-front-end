import styled from "styled-components";
export const Main = styled.main`
    /* padding: 0 12px; */
    width: 100%;
    min-height: calc(var(--vh, 1vh) * 100 - 80px);
    background-image: url('${import.meta.env.BASE_URL}images/background/assets-cached.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`