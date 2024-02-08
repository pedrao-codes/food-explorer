import { Container } from "./styles";

export function IconButton({icon: Icon, iconSize, additionalStyles, ...rest}) {
    return(
        <Container style={additionalStyles} {...rest}>
            <Icon size={iconSize} />
        </Container>
    )
}