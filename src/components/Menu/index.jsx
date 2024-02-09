import { Container, Options, Navigation } from "./styles"

import { Header } from "../Header"
import { Footer } from "../Footer"
import { DynamicButton } from "../DynamicButton"
import { Input } from "../Input"

import { X, MagnifyingGlass } from "@phosphor-icons/react"

import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"

export function Menu({toggleMenu}) {
    const navigate = useNavigate()
    const { signOut, user } = useAuth()
    const isAdmin = user && user.isAdmin

    function handleSignOut() {
        toggleMenu()
        signOut()
        navigate("/")
    }

    function handleCreateDish() {
        toggleMenu()
        navigate("/dish/create")
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
                        {
                            isAdmin 
                            ? <li onClick={handleCreateDish}>Novo prato</li> 
                            : null
                        }

                        <li onClick={handleSignOut}>Sair</li>
                    </ul>
                </Navigation>
            </Options>

            <Footer />
        </Container>
    )
}