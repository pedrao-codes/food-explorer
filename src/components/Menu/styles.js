import styled from "styled-components";
import theme from "../../styles/theme"

export const Container = styled.div`
    background: ${({theme}) => theme.COLORS.DARK_400};

    position: fixed;
    transform: translateX(-100vw);
    z-index: 1;
    width: 100vw;
    height: 100vh;
`