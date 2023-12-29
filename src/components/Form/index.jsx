import { Container } from "./styles";

export function Form({children, ...rest}) {
    function handleSubmit (event) {
        event.preventDefault()
    }

    return(
        <Container onSubmit={handleSubmit}>
            {children}
        </Container>
    )
}