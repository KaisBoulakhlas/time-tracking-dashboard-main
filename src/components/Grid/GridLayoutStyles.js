import styled from "styled-components"
import { tablet,mobile } from "../../responsive";

export const DashboardGrid = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 200px);    
    grid-gap: 1.75rem;
    height:100%;
    grid-template-rows: repeat(2,190px);
    ${tablet({ gridTemplateColumns: "repeat(3,200px)", gridTemplateRows: "repeat(3,190px)" })}
    ${mobile({ 
        gridTemplateColumns: "1fr", 
        gridTemplateRows: "repeat(7,190px)", 
        height: "100vh" ,
        margin: "1rem"
    })}

`