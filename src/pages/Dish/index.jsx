import { useMenu } from "../../hooks/useMenu"

import { Container, Main, Ingredients, Tag, Request, Count, WrapButton } from "./styles";

import { HeaderUser } from "../../components/HeaderUser";
import { Menu } from "../../components/Menu";
import { DynamicButton } from "../../components/DynamicButton";
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer";

import { CaretLeft, Minus, Plus, Receipt } from "@phosphor-icons/react";

export function Dish() {
    const {menu, toggleMenu} = useMenu()

    return(
        <Container>
            {menu && <Menu toggleMenu={toggleMenu} />}

            <HeaderUser toggleMenu={toggleMenu} />

            <Main>
                <WrapButton>
                    <DynamicButton
                        icon={CaretLeft}
                        iconSize={32}
                        text="voltar"
                        additionalStyles={{fontSize: "2.4rem"}}
                    />
                </WrapButton>

                <img src="../../../assets/foods/salad_2.svg" alt="salada" />

                <h1>Salada Ravanello</h1>

                <p>
                    Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
                </p>

                <Ingredients>
                    <Tag>alface</Tag>
                    <Tag>cebola</Tag>
                    <Tag>pão naan</Tag>
                    <Tag>pepino</Tag>
                    <Tag>rabanete</Tag>
                    <Tag>tomate</Tag>
                </Ingredients>

                <Request>
                    <Count>
                        <DynamicButton
                            icon={Minus}
                            iconSize={27}
                        />
                        01
                        <DynamicButton
                            icon={Plus}
                            iconSize={27}
                        />
                    </Count>
                    
                    <Button
                        icon={Receipt}
                        text={`pedir ∙ R$ 25,00`}
                        padding="1.2rem 0"
                    />
                </Request>
            </Main>

            <Footer />
        </Container>
    )
}