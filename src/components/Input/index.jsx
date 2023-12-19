<<<<<<< HEAD
import { Container, Content } from "./styles"

export function Input({icon: Icon, label, type, placeholder}) {
    return(
        <Container>
            {label ? <label>{label}</label> : null}
            
            <Content>
                {Icon ? <Icon /> : null}

                <input
                    type={type}
                    placeholder={placeholder}
                />
            </Content>
        </Container>
    )
=======
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
>>>>>>> 0b4351fb94805bd9fc9015640294948de6257008
}