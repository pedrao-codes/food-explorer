import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;

    width: ${(props) => props.width};
    height: ${(props) => props.height};
    filter: ${(props) => props.filter};
`