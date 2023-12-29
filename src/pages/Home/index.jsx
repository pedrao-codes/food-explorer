import { Container, Banner } from "./styles";

import { useMenu } from "../../hooks/menu";

import { HeaderUser } from "../../components/HeaderUser";
import { Footer } from "../../components/Footer";
import { DishList } from "../../components/DishList";
import { Menu } from "../../components/Menu";

export function Home() {
    const {menu, toggleMenu} = useMenu()

    return(
        <Container>
            {menu && <Menu toggleMenu={toggleMenu} />}

            <HeaderUser toggleMenu={toggleMenu} />

            <Banner>
                <img src="../../../assets/colorful_cookies.png" alt="bolachas coloridas" />

                <h1>Sabores inigualáveis</h1>
                <p> Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </Banner>

            <DishList title="Refeições" page="/dish" />

            <Footer />
        </Container>
    )
}