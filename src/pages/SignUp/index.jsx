import { Container } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { DynamicButton } from "../../components/DynamicButton"
import { Logo } from "../../components/Logo"

export function SignUp() {
    return(
        <Container>
            <Logo />
            
            <form>
                <Input
                    label="Nome"
                    type="text"
                    placeholder="Exemplo: Maria da Silva"
                />

                <Input
                    label="E-mail"
                    type="text"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                />

                <Input
                    label="Senha"
                    type="password"
                    placeholder="No mínimo 6 caracteres"
                />

                <Button 
                    text="Criar conta" 
                    padding="1.2rem 0"
                />

                <DynamicButton 
                    text="Criar uma conta" 
                    additionalStyles={{
                        fontWeight: "500",
                        fontSize: "1.4rem"
                    }}
                />
            </form>
        </Container>
    )
}