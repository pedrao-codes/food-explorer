import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const Requests = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    position: relative;
    width: 3.8rem;
    height: 100%;
`

export const RequestsCount = styled.div`
    background: ${({theme}) => theme.COLORS.TOMATO_100};
    border-radius: 50%;

    position: absolute;
    top: 0; right: 0;
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: 500;
`

export const Main = styled.main`
    margin-right: clamp(1.6rem, -4rem + 9vw, 12.4rem);
    margin-left: clamp(3.6rem, -4rem + 9vw, 12.4rem);
`

export const Banner = styled.section`
    background: ${({theme}) => theme.COLORS.GRADIENTS_100};
    border-radius: .8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;
    margin-top: clamp(4.4rem, 0.5rem + 12vw , 17.2rem);
    margin-bottom: 6.2rem;
    padding-left: clamp(15.3rem, 2.5rem + 33vw, 60rem);
    padding-right: 1.5rem;
    height: clamp(12rem, 1rem + 19vw, 26rem);

    > img {
        position: absolute;
        bottom: 0; left: -3rem;
        width: clamp(19.1rem, 0.5rem + 39vw, 63.2rem);
    }

    > h1, p {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    > h1 {
        font-size: clamp(1.8rem, 0.5rem + 3vw, 4rem);
        font-weight: 600;

        margin-bottom: .3rem;
    }

    > p {
        font-size: clamp(1.2rem, 0.5rem + 1vw, 1.6rem);
    }
`