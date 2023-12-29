import { Container } from "./styles"

export function Button({icon: Icon, text, padding, ...rest}) {
    return(
        <Container $padding={padding} {...rest}>
            {Icon && <Icon />}
            {text}
        </Container>
    )
}