import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.footer`
    background: ${({theme}) => theme.COLORS.DARK_600};

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    padding: 3rem clamp(2.4rem, 0.3rem + 5vw, 14.3rem);
    
    > span {
        font-size: 1.2rem;
    }
`