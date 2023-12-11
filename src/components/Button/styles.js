import styled from "styled-components";
import theme from "../../styles/theme"

export const Container = styled.button`
    background: ${({theme}) => theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
    border: none;
    border-radius: 5px;

    width: 100%;
    padding: ${props => props.$padding};
`