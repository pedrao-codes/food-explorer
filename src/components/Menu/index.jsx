import { Container, Options, Navigation } from "./styles"

import { Header } from "../Header"
import { Footer } from "../Footer"
import { DynamicButton } from "../DynamicButton"
import { Input } from "../Input"

import { X, MagnifyingGlass } from "@phosphor-icons/react"

import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"

export function Menu({toggleMenu}) {
    const { signOut } = useAuth()
    const navigate = useNavigate()

    function handleSignOut() {
        toggleMenu()
        signOut()
        navigate("/")
    }

    return(
        <Container>
            <Header>
                <DynamicButton
                    icon={X} 
                    iconSize={18}
                    text="Menu"
                    onClick={toggleMenu}
                    additionalStyles={{
                        fontSize: "2.1rem",
                        fontFamily: "Roboto, sans-serif",
                        gap: "1.6rem"
                    }}
                />
            </Header>

            <Options>
                <Input 
                    icon={MagnifyingGlass}
                    type="text"
                    placeholder="Busque por pratos ou ingredientes"
                />

                <Navigation>
                    <ul>
                        <li onClick={handleSignOut}>Sair</li>
                    </ul>
                </Navigation>
            </Options>

            <Footer />
        </Container>
    )
}