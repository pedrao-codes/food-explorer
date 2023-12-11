import styled from "styled-components";
import theme from "../../styles/theme"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;

    > label, input {
        font: 1.6rem Roboto, sans-serif;
    }

    > label {
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

    > input {
        background: ${({theme}) => theme.COLORS.DARK_900};
        color: ${({theme}) => theme.COLORS.LIGHT_500};

        height: 4.8rem;
        padding: 1.2rem 1.4rem;

        border-radius: 8px;
        border: none;
    }
`