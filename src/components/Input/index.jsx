import { Container, Content } from "./styles"

export function Input({icon: Icon, label, type, placeholder, maxWidth, ...rest}) {
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