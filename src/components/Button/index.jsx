import { Container } from "./styles"

export function Button({icon: Icon, text, padding, maxWidth, ...rest}) {
    return(
        <Container $maxWidth={maxWidth} $padding={padding} {...rest}>
            {Icon && <Icon />}
            {text}
        </Container>
    )
}