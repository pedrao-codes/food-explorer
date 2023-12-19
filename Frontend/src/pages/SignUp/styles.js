import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
    padding: 15.8rem 5.6rem 10rem 5.6rem;

    > form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.2rem;

        margin-top: 7.3rem;
        text-align: justify;
    }
`

export const Profile = styled(Link)`
    text-decoration: none;
`