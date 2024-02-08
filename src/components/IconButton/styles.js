import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.button`
    background: rgba(0,47,98,.2);
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    border-radius: 50%;
    cursor: pointer;
    
    > svg {
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
`