import styled from "styled-components";

export const Container = styled.div`
margin: 0 auto;
width: 400px;
height: 200px;
> h2{
    font-size: 2em;
    text-align: center;
}
`
export const BtnContainer = styled.div`
min-width: 300px;
max-width: 400px;
min-height: 200px;
max-height: 300px;
display: flex;
justify-content: space-around;
> button{
    width: 80px;
    height: 30px;
    border: none;
    border-radius: 15px;
    background-color: var(--violet);
    color: var(--white);
}
`