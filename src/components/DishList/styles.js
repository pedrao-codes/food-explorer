import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
    position: relative;
    margin-bottom: 2.4rem;

    > h1 {
        font-size: 1.8rem;
        font-weight: 500;
        margin: 0 0 2.4rem 2.4rem;
    }
`

export const List = styled.div`
    display: flex;
    padding: 0 2.4rem;
    overflow: auto;
    gap: 1.6rem;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const Card = styled.div`
    background: ${({theme}) => theme.COLORS.DARK_200};
    border: 1px solid ${({theme}) => theme.COLORS.DARK_300};
    border-radius: .8rem;

    position: relative;
    padding: 2.4rem;
    min-width: 21rem;
`

export const DishInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

    > img {
        width: 8.8rem;
        height: 8.8rem;
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