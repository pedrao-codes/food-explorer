import { Container } from "./styles"

export function Button({icon: Icon, text, padding}) {
    return(
        <Container $padding={padding}>
            {Icon && <Icon />}
            {text}
        </Container>
    )

}