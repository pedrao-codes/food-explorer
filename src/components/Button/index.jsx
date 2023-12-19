<<<<<<< HEAD
import { Container } from "./styles"

export function Button({icon: Icon, text, padding}) {
    return(
        <Container $padding={padding}>
            {Icon && <Icon />}
            {text}
        </Container>
    )
=======
import { Container } from "./styles"

export function Button({text, padding}) {
    return(
        <Container $padding={padding}>
            {text}
        </Container>
    )
>>>>>>> 0b4351fb94805bd9fc9015640294948de6257008
}