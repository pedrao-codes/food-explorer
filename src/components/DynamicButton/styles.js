import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.button`
    background: transparent;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-family: Poppins, sans-serif;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
    
    > svg {
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
`