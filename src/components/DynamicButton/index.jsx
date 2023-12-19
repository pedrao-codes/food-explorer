<<<<<<< HEAD
import { Container } from "./styles";

export function DynamicButton({icon: Icon, iconSize, text, additionalStyles, ...rest}) {
    return(
        <Container style={additionalStyles} {...rest}>
            {Icon && <Icon size={iconSize} />}
            {text}
        </Container>
    )
=======
import { Container } from "./styles";

export function DynamicButton({icon: Icon, text, size, additionalStyles}) {
    return(
        <Container style={additionalStyles}>
            {Icon && <Icon size={size} />}
            {text}
        </Container>
    )
>>>>>>> 0b4351fb94805bd9fc9015640294948de6257008
}