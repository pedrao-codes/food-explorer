import styled from "styled-components";
import theme from "../../styles/theme"

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    background: ${({theme}) => theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
    border: none;
    border-radius: 5px;
    width: 100%;
    padding: ${props => props.$padding};
    transition: transform 200ms;
    &:hover {
        transform: scale(1.05);
    }
    > svg {
        width: 2.1rem;
        height: auto;
    }
`