import styled from "styled-components";

export const Section = styled.section`
width: 100%;
display: flex;
justify-content: space-between;
padding: 0 40px;
gap: 50px;
background-color: transparent;
> div{
    margin: 50px auto;
}
@media (max-width: 1024px) {
    flex-direction: column;
    padding: 0;
    justify-content: center;
}
`
export const Aside = styled.aside`
display: block;
max-width: fit-content;
`