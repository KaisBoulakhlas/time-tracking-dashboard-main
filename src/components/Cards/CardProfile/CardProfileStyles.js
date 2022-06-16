import styled from "styled-components"
import { tablet,mobile } from "../../../responsive"


export const CardProfileContainer = styled.div`
    grid-column:1;
    display: flex;
    overflow: hidden;
    grid-row: span 2;
    flex-direction: column;
    background-color:var(--color-neutral-dark-blue);
    align-items: flex-start;
    border-radius: 0.5rem;
    ${tablet({ gridColumn: "span 3", gridRow: "1" })}
    ${mobile({ gridColumn: "1", gridRow: "1" })}


`
export const WrapperInfosReportedBy = styled.div`
    flex: 0.80;
    width:100%;
    display: flex;
    flex-direction: column;
    padding:1.25rem;
    background-color:var(--color-primary-blue);
    border-radius: 0 0 0.5rem 0.5rem;
    ${tablet({ flexDirection: "row" })}
    ${mobile({ flexDirection: "row", alignItems:"center", flex:"1" })}

`

export const ProfileImg = styled.img`
    border-radius:50%;
    max-width:35%;
    background-color: white;
    padding: 0.15rem;
    object-fit: cover;
    ${tablet({ maxWidth: "15%" })}
    ${mobile({ maxWidth: "25%" })}

`

export const ReportedByText = styled.span`
    font-size:0.85rem;
    font-weight:500;
    color:var(--color-primary-soft-blue);
`
export const FullName = styled.h1`
    display:block;
    font-weight:lighter;
    color:white;
    ${mobile({ fontSize: "1.75rem" })}

`

export const Wrapper = styled.div`
    margin: 2rem auto auto auto;
    ${tablet({ margin: "auto" })}
`

export const SwitchViewing = styled.div`
    flex: 0.20;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.25rem;
    ${tablet({ margin: "auto", flexDirection:"row", alignItems: "center" })}
    ${mobile({ gap: "3rem"})}
`

export const View = styled.span`
    font-size:0.85rem;
    cursor:pointer;
    transition:color 0.2s ease-in-out; 
    color: ${props => props.active ? "white" : "var(--color-primary-soft-blue)"};
    ${mobile({ fontSize:"1.25rem" })}


    &:hover {
        color:white;
    }
`