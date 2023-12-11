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
}