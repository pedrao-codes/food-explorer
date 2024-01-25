import styled from "styled-components"
import theme from "../../styles/theme";

export const Requests = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    position: relative;
    width: 3.8rem;
    height: 100%;
`

export const RequestsCount = styled.div`
    background: ${({theme}) => theme.COLORS.TOMATO_100};
    border-radius: 50%;

    position: absolute;
    top: 0; right: 0;
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: 500;
`

export const HeaderComponentsWrapper = styled.div`
    display: flex;
    justify-content: right;
    gap: 3.2rem;
    width: 100%;
`