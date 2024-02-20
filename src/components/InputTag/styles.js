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
    display: flex;
    gap: 1.6rem;
    background: ${({theme}) => theme.COLORS.DARK_900};
    font: 1.6rem Roboto, sans-serif;
    border-radius: .8rem;
    height: 4.8rem;
    padding: .8rem;

    > input {
        color: ${({theme}) => theme.COLORS.LIGHT_500};
        font: 1.6rem Roboto, sans-serif;
        width: 100%;
        background: transparent;
        border: none;
        outline: none;
    }
`

export const Tag = styled.span`
    display: flex;
    align-items: center;
    gap: .4rem;
    background: ${({theme}) => theme.COLORS.LIGHT_600};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    border-radius: .8rem;
    min-width: max-content;
    height: 3.2rem;
    padding: .8rem 1.6rem;
    cursor: pointer;

    > svg {
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
`

export const TagAdd = styled.span`
    display: flex;
    align-items: center;
    gap: .4rem;
    background: transparent;
    color: ${({theme}) => theme.COLORS.LIGHT_500};
    border: 1px dashed ${({theme}) => theme.COLORS.LIGHT_500};
    border-radius: .8rem;
    min-width: max-content;
    height: 3.2rem;
    padding: .8rem 1.6rem;
    cursor: pointer;

    > svg {
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
`