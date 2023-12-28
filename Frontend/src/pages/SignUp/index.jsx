import { Container, Profile } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { DynamicButton } from "../../components/DynamicButton"
import { Logo } from "../../components/Logo"
import { Form } from "../../components/Form"

import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function SignUp() {
    const navigate = useNavigate()
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Por favor, preencha todos os campos!")
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso!")
                navigate("/")
            })
            .catch(error => {
                if(error.response) {
                    alert(error.response.data.message)
                } else {
                    alert("Não foi possível cadastrar.")
                }
            })
    }

    return(
        <Container>
            <Logo />

            <Form>
                <Input
                    label="Nome"
                    type="text"
                    placeholder="Exemplo: Maria da Silva"
                    onChange={event => setName(event.target.value)}
                />

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
                    text="Criar conta" 
                    padding="1.2rem 0"
                    onClick={handleSignUp}
                />

                <Profile to="/">
                    <DynamicButton
                        text="Já tenho uma conta"
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