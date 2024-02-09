import { Container, Content } from "./styles"

export function Input({icon: Icon, label, placeholder, maxWidth, ...rest}) {
    return(
        <Container>
            {label ? <label htmlFor={label}>{label}</label> : null}
            
            <Content>
                {Icon ? <Icon /> : null}

                <input
                    id={label}
                    placeholder={placeholder}
                    {...rest}
                />
            </Content>
        </Container>
    )
}