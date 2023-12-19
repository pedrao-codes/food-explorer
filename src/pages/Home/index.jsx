<<<<<<< HEAD
import { useMenu } from "../../hooks/useMenu";

import { Container, Banner } from "./styles";

import { HeaderUser } from "../../components/HeaderUser";
import { Footer } from "../../components/Footer";
import { DishList } from "../../components/DishList";
import { Menu } from "../../components/Menu";

export function Home() {
    const {menu, toggleMenu} = useMenu()

    return(
        <Container>
            {menu && <Menu isOpen={menu} toggleMenu={toggleMenu} />}

            <HeaderUser toggleMenu={toggleMenu} />

            <Banner>
                <img src="../../../assets/colorful_cookies.png" alt="bolachas coloridas" />

                <h1>Sabores inigualáveis</h1>
                <p> Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </Banner>

            <DishList title="Refeições" />

            <Footer />
        </Container>
    )
=======
import { Container, Requests, RequestsCount, Banner } from "./styles";

import { Header } from "../../components/Header";
import { DynamicButton } from "../../components/DynamicButton";
import { Logo } from "../../components/Logo";
import { Footer } from "../../components/Footer";
import { DishList } from "../../components/DishList";
import { Menu } from "../../components/Menu"

import { List, Receipt } from "@phosphor-icons/react";


export function Home() {
    return(
        <Container>
            {/* <Menu /> */}

            <Header>
                <DynamicButton 
                    icon={List} 
                    size={24}
                />

                <Logo width="auto" height="2.5rem" />
    
                <Requests>
                    <DynamicButton icon={Receipt} size={32} />
                    <RequestsCount>
                        0
                    </RequestsCount>
                </Requests>
            </Header>

            <Banner>
                <img src="../../../assets/colorful_cookies.png" alt="bolachas coloridas" />

                <h1>Sabores inigualáveis</h1>
                <p> Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </Banner>

            <DishList title="Refeições" />

            <Footer />
        </Container>
    )
>>>>>>> 0b4351fb94805bd9fc9015640294948de6257008
}