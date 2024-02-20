import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    width: 100%;
    max-width: 55rem;

    > label, textarea {
        font: 1.6rem Roboto, sans-serif;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

    > label {
        width: max-content;

        display: flex;
        align-items: center;
        gap: 1.4rem;
    }

    > textarea {
        color: ${({theme}) => theme.COLORS.LIGHT_500};
        background: ${({theme}) => theme.COLORS.DARK_900};
        border: none;
        border-radius: .8rem;
        resize: none;
        width: 100%;
        height: 17.2rem;
        padding: 1.2rem 1.4rem;
    }
`