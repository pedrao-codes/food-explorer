import styled from "styled-components";
import { Link } from "react-router-dom";

import theme from "../../styles/theme";

export const Container = styled.div``

export const Main = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;

    position: relative;
    margin: 3.6rem 5.6rem;

    img {
        width: 26.4rem;
        height: 26.4rem;
        margin: 1.6rem 0;
    }

    h1 {
        font-size: 2.7rem;
    }

    p {
        font-size: 1.6rem;
        text-align: center;
        margin: 2.4rem 0;
    }
`

export const WrapButton = styled.div`
    width: 100%;
`

export const Ingredients = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 0 2.9rem;
    gap: 2.4rem;
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
    display: flex;
    gap: 1.6rem;

    width: 100%;
    margin-top: 4.8rem;
`

export const Count = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;

    font-size: 2.2rem;
    font-family: Roboto, sans-serif;
    font-weight: 700;
`

export const Profile = styled(Link)`
    text-decoration: none;
`