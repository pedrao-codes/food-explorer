import styled from "styled-components";
import theme from "../../styles/theme";
import { CaretDown } from "@phosphor-icons/react";

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
    > select {
        background-color: ${({theme}) => theme.COLORS.DARK_900};
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        background-image: url("../../../assets/caret-down.svg");
        background-repeat: no-repeat;
        background-size: 2.4rem;
        background-position: right 1.2rem top 50%;
        font: 1.8rem Roboto, sans-serif;
        font-size: 1.4rem;
        border: none;
        width: 100%;
        border-radius: .8rem;
        height: 4.8rem;
        padding: 1.2rem 1.6rem;
        overflow: hidden;
        appearance: none;
        cursor: pointer;
    }
`