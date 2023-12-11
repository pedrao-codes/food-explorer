import { Container } from "./styles"

export function Input({label, type, placeholder}) {
    return(
        <Container>
            <label>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
            />
        </Container>
    )
}