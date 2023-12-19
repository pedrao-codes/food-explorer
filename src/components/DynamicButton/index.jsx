import { Container } from "./styles";

export function DynamicButton({icon: Icon, iconSize, text, additionalStyles, ...rest}) {
    return(
        <Container style={additionalStyles} {...rest}>
            {Icon && <Icon size={iconSize} />}
            {text}
        </Container>
    )
}