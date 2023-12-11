import { Container } from "./styles";

import { Logo } from "../Logo";

export function Footer() {
    return(
        <Container>
            <Logo 
                width="14.2rem" 
                height="1.8rem" 
                filter="invert(50%) grayscale(1)" 
            />
            <span>© 2023 - Todos os direitos reservados.</span>
        </Container>
    )
}