import styled from "styled-components"
export const Inner = styled.div
`
display:flex;
align-items: center;
flex-direction ${({direction})=>
direction};
justify-conttent: space_between;
max-width: 1000px
margin : auto;
width : 100%;

@media (max-width: 1000px){
    flex-direction : column;
}`

export const Container = styled.div`
`