import { Container } from "./styles"

export function LogoAdmin({width="auto", height="auto", filter}) {
    return(
        <Container width={width} height={height} filter={filter}>
            <img src="../../../assets/food_explorer_logo.svg" alt="logo food explorer" />

            <span>admin</span>
        </Container>
    )
}