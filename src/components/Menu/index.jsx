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
}