import { Container } from "./styles";

export function DynamicButton({icon: Icon, text, size, additionalStyles}) {
    return(
        <Container style={additionalStyles}>
            {Icon && <Icon size={size} />}
            {text}
        </Container>
    )
}