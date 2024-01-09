import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.footer`
    background: ${({theme}) => theme.COLORS.DARK_600};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    padding: 3rem 2.4rem;
    
    > span {
        font-size: 1.2rem;
    }
`