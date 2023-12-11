import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${({theme}) => theme.COLORS.DARK_700};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    
    padding: 5.6rem 2.8rem 2.4rem 2.8rem;
`