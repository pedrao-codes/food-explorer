import styled from "styled-components";
import theme from "../../styles/theme"

export const Container = styled.div`
    background: ${({theme}) => theme.COLORS.DARK_400};

    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    
    position: absolute;
    z-index: 1;
`

export const Options = styled.div`
    padding: 3.6rem 2.8rem 1.4rem 2.8rem;
`

export const Navigation = styled.nav`
  
    > ul {
        display: flex;
        flex-direction: column;
        margin-top: 3.6rem;

        list-style: none;

        > li {
            font-size: 2.4rem;
            font-weight: 300;
            padding: 1rem;
            width: 100%;
            border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};
        }
    }
`