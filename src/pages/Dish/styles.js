import styled from "styled-components";
import theme from "../../styles/theme";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const Main = styled.main`
    display: grid;
    margin: 3.6rem clamp(5.6rem, 3rem + 6vw, 12.2rem);
    height: 100%;
    align-items: flex-start;

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}) {
        grid-template-areas: "button button"
                             "img info"
    };
`

export const WrapButton = styled.div`
    width: 100%;
    height: max-content;

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}) {
        grid-area: button;
    }
`

export const ProductImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.6rem 0;

    img {
        width: 26.4rem;
        height: max-content;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}) {
        grid-area: img;

        img {
            width: 39rem;
            padding-right: 4.7rem;
        }
    }
`

export const ProductInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 2.7rem;
    }

    p {
        font-size: 1.6rem;
        margin: 2.4rem 0;
        max-width: 44.8rem;
        text-align: center;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}) {
        grid-area: info;
        align-items: flex-start;

        h1 {
            font-size: 4rem;
        }

        p {
            font-size: 1.8rem;
            max-width: 100%;
            text-align: left;
        }
    }
`

export const Ingredients = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 0 2.9rem;
    gap: 2.4rem;

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}) {
        display: flex;
        gap: 1.2rem;
        padding: 0;
    }
`

export const Tag = styled.span`
    background: ${({theme}) => theme.COLORS.DARK_1000};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
    font-weight: 500;
    border-radius: 5px;

    width: max-content;
    padding: 4px 8px;
`

export const Request = styled.div`
    display: ${props => props.$isAdmin ? 'none' : 'flex'};
    justify-content: center;
    gap: 4rem;

    width: 100%;
    margin-top: 4.8rem;

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}) {
        justify-content: flex-start;
    }
`

export const Count = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;

    font-size: 2.2rem;
    font-family: Roboto, sans-serif;
    font-weight: 700;
`