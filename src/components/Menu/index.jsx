<<<<<<< HEAD
import { Container, Options, Navigation } from "./styles"

import { Header } from "../Header"
import { Footer } from "../Footer"
import { DynamicButton } from "../DynamicButton"
import { Input } from "../Input"

import { X, MagnifyingGlass } from "@phosphor-icons/react"

export function Menu({toggleMenu}) {
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
                        <li>Sair</li>
                    </ul>
                </Navigation>
            </Options>

            <Footer />
        </Container>
    )
=======
import { Container } from "./styles"

import { Header } from "../Header"
import { Footer } from "../Footer"
import { DynamicButton } from "../DynamicButton"

import { X } from "@phosphor-icons/react"

export function Menu() {
    return(
        <Container>
            <Header>
                <DynamicButton
                    icon={X} 
                    size={18}
                    text="Menu"
                    additionalStyles={{
                        fontSize: "2.1rem",
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: "400",
                        gap: "16px"
                    }}
                />
            </Header>

            <Footer />
        </Container>
    )
>>>>>>> 0b4351fb94805bd9fc9015640294948de6257008
}