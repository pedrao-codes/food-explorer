import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;

    width: ${(props) => props.width};
    height: ${(props) => props.height};

    > span {
        color: ${({theme}) => theme.COLORS.CAKE_200};
        font-family: Roboto, sans-serif;
        font-size: 1.2rem;

        align-self: center;
        margin-left: 8px;
    }
`