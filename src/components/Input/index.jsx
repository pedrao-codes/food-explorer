import { Container, Content } from "./styles"

export function Input({icon: Icon, label, type, placeholder, ...rest}) {
    return(
        <Container>
            {label ? <label>{label}</label> : null}
            
            <Content>
                {Icon ? <Icon /> : null}

                <input
                    type={type}
                    placeholder={placeholder}
                    {...rest}
                />
            </Content>
        </Container>
    )
}