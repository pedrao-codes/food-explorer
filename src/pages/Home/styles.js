<<<<<<< HEAD
import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    
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

export const Banner = styled.section`
    background: ${({theme}) => theme.COLORS.GRADIENTS_100};
    border-radius: .3rem;

    position: relative;
    margin: 4.4rem 1.6rem 6.2rem 3.6rem;
    padding-left: 15.3rem;
    height: 12rem;

    > img {
        position: absolute;
        bottom: 0; left: -30px;
    }

    > h1, p {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    > h1 {
        font-size: 1.8rem;
        font-weight: 600;

        padding: 3.6rem 0 .3rem;
    }

    > p {
        font-size: 12px;
    }
=======
import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    
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

export const Banner = styled.section`
    background: ${({theme}) => theme.COLORS.GRADIENTS_100};
    border-radius: .3rem;

    position: relative;
    margin: 4.4rem 1.6rem 6.2rem 3.6rem;
    padding-left: 15.3rem;
    height: 12rem;

    > img {
        position: absolute;
        bottom: 0; left: -30px;
    }

    > h1, p {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    > h1 {
        font-size: 1.8rem;
        font-weight: 600;

        padding: 3.6rem 0 .3rem;
    }

    > p {
        font-size: 12px;
    }
>>>>>>> 0b4351fb94805bd9fc9015640294948de6257008
`