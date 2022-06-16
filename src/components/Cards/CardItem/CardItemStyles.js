import styled from "styled-components"
import { mobile } from "../../../responsive"


export const CardContainer = styled.div`
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-position: top -12% right 10%;
    background-color: ${props => props.backgroundColor}; 
    border-radius: 0.5rem;
    overflow: hidden;
    grid-column: ${props => props.column};
    grid-row: ${props => props.row};
    ${mobile({ backgroundPosition:"top -2% right 10%" })}
`

export const WrapperInfos = styled.div`
    background-color:var(--color-neutral-dark-blue);
    border-radius: 0.5rem 0.5rem 0 0;
    height: 80%;
    margin-top: 20%;
    cursor:pointer;
    padding: 1.5rem;
    ${mobile({ marginTop:"15%" })}

    &:hover{
        background-color:var(--color-neutral-desatured-blue);
    }
`
export const WrapperTitleCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const TitleCard = styled.h3`
    color:white;
`
export const IconEllipsis = styled.img`
    cursor: pointer;
`

export const WrapperTime = styled.div`
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    ${mobile({ alignItems:"center", flexDirection:"row", justifyContent: "space-between" })}

`

export const Time = styled.span`
    font-size: 2.5rem;
    color: white;
`
export const LastTime = styled.span`
    font-size: 0.85rem;
    color:var(--color-primary-soft-blue);

`