import styled from "styled-components";
import theme from "../../styles/theme";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${({theme}) => theme.COLORS.DARK_700};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    padding: 5.6rem 2.8rem 2.4rem 2.8rem;

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 2.4rem clamp(2.8rem, 0.2rem + 7vw, 12.3rem);
        gap: 3.2rem;
    }
`