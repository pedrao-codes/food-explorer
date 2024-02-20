import styled from "styled-components"
import theme from "../../styles/theme"

export const Container = styled.div`

`

export const WrapButton = styled.div`
    width: 100%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding: 1.0rem 3.2rem 5.2rem;
    align-items: center;

    > h1 {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-size: 2.8rem;
        font-weight: 500;
    }
`

export const Controls = styled.div`
    display: flex;
    gap: 3.2rem;
`