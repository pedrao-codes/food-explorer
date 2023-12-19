<<<<<<< HEAD
import styled from "styled-components";
import theme from "../../styles/theme"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;

    > label, input {
        font: 1.6rem Roboto, sans-serif;
    }

    > label, svg {
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }
`

export const Content = styled.div`
    background: ${({theme}) => theme.COLORS.DARK_900};
    border-radius: .8rem;

    display: flex;
    align-items: center;
    gap: 1.4rem;
    height: 4.8rem;
    padding: 1.2rem 1.4rem;

    > input {
        color: ${({theme}) => theme.COLORS.LIGHT_500};
        background: transparent;
        border: none;
        outline: none;
        width: 100%;
    }

    > svg {
        width: 2.4rem;
        height: 2.4rem;
    }
=======
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
>>>>>>> 0b4351fb94805bd9fc9015640294948de6257008
`