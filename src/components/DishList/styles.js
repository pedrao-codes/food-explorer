import styled from "styled-components";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";

export const Container = styled.section`
    position: relative;
    margin-bottom: 2.4rem;

    > h1 {
        font-size: 1.8rem;
        font-weight: 500;
        margin: 0 0 2.4rem 2.4rem;
    }

    .cards-container {
        display: flex;
        gap: 1.6rem;
        padding-right: 2.4rem;
    }
`

export const List = styled.div`
    display: flex;
    overflow: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const Card = styled.div`
    background: ${({theme}) => theme.COLORS.DARK_200};
    border: 1px solid ${({theme}) => theme.COLORS.DARK_300};
    border-radius: .8rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    position: relative;
    padding: 2.4rem;
    min-width: 21rem;
`

export const DishInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: 1.2rem;

    > img {
        width: 8.8rem;
        height: 8.8rem;
        border-radius: 50%;
    }

    > h2 {
        font-size: 1.4rem;
        font-weight: 500;
    }

    > span {
        font-family: Roboto, sans-serif;
        font-size: 1.6rem;
    }
`

export const Price = styled.span`
    color: ${({theme}) => theme.COLORS.CAKE_200};
    margin-bottom: ${props => props.$isAdmin ? '7rem' : '0'};
`

export const Controls = styled.div`
    display: ${props => props.$isAdmin ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1.2rem;

    > span {
        font-family: Roboto, sans-serif;
        font-size: 1.6rem;
    }
`

export const Count = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 10rem;
    padding: 4px 0;

    color: ${({theme}) => theme.COLORS.LIGHT_300};
`

export const Profile = styled(Link)`
    text-decoration: none;
`