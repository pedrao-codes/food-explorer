import { Container } from "./styles"

export function TextArea({label, placeholder, ...rest}) {
    return(
        <Container>
            {label ? <label htmlFor={label}>{label}</label> : null}
            
            <textarea
                id={label}
                placeholder={placeholder}
                {...rest}
            />
        </Container>
    )
}