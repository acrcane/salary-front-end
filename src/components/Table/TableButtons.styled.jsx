import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 80px;
width: 100%;
gap: 30px;
`

export const BaseButton = styled.button`
    width: 180px;
    height: 30px;
    text-align: center;
    border: 2px solid var(--white);
    color: var(--white);
`

export const Create = styled(BaseButton)`

    background-color: var(--blue);

`
export const Close = styled(BaseButton)`

    background-color: var(--red);

`