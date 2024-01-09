import { Container, Profile } from "./styles"

import { useState } from "react"
import { useAuth } from "../../hooks/auth"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { DynamicButton } from "../../components/DynamicButton"
import { Logo } from "../../components/Logo"
import { Form } from "../../components/Form"

export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()

    function handleSignIn() {
        signIn({ email, password })
    }

    return(
        <Container>
            <Logo height="4.7rem" />

            <Form>
                <Input
                    label="E-mail"
                    type="text"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    onChange={event => setEmail(event.target.value)}
                />

                <Input
                    label="Senha"
                    type="password"
                    placeholder="No mínimo 6 caracteres"
                    onChange={event => setPassword(event.target.value)}
                />

                <Button 
                    text="Entrar"
                    padding="1.2rem 0"
                    onClick={handleSignIn}
                />

                <Profile to="/register">
                    <DynamicButton
                        text="Criar uma conta"
                        additionalStyles={{
                            fontWeight: "500",
                            fontSize: "1.4rem"
                        }}
                    />
                </Profile>
            </Form>
        </Container>
    )
}