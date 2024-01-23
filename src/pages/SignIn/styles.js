import styled from "styled-components"
import { Link } from "react-router-dom"
import { DEVICE_BREAKPOINTS } from "../../styles/devideBreakpoints"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 9.5rem clamp(5.6rem, 1rem + 8vw, 20.5rem);

    h1 {
        display: none;
        font-size: 3.2rem;
        font-weight: 500;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        display: grid;
        grid-template-areas: "a b";
        
        > form {
            background: ${({theme}) => theme.COLORS.DARK_700};
            padding: 6.4rem;
            border-radius: 1.6rem;
            margin-top: 0;
        }

        h1 {
            display: block;
        }
    }
`

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Profile = styled(Link)`
    text-decoration: none;
`