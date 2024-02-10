import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    width: 100%;
    max-width: 55rem;
`

export const Label = styled.label`
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    font: 1.6rem Roboto, sans-serif;
    width: max-content;
`

export const Wrapper = styled.div`
    background: ${({theme}) => theme.COLORS.DARK_900};
    border-radius: .8rem;
    height: 4.8rem;

    > label {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1.4rem;
        padding: 1.2rem 3.2rem;
        overflow: hidden;
        cursor: pointer;

        > svg {
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            min-width: 2.4rem;
            height: auto;
        }
    }

    > input {
        display: none;
    }
`