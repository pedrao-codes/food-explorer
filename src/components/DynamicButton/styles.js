import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;
    
    > svg {
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
`