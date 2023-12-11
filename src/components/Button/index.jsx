import { Container } from "./styles"

export function Button({text, padding}) {
    return(
        <Container $padding={padding}>
            {text}
        </Container>
    )
}