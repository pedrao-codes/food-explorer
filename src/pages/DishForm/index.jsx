import { Container, WrapButton, Form, Controls } from "./styles";
import theme from "../../styles/theme";

import { Menu } from "../../components/Menu";
import { HeaderUser } from "../../components/HeaderUser";
import { DynamicButton } from "../../components/DynamicButton";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import { CaretLeft, UploadSimple } from "@phosphor-icons/react"

import { useMenu } from "../../hooks/menu";
import { useNavigate } from "react-router-dom";

export function DishForm({ formType="criar" }) {
    const { menu, toggleMenu } = useMenu()
    const navigate = useNavigate()

    function handleBack() {
        navigate("/")
    }

    return(
        <Container>
            {menu && <Menu toggleMenu={toggleMenu} />}

            <HeaderUser toggleMenu={toggleMenu} />

            <Form>
                <WrapButton>
                        <DynamicButton
                            icon={CaretLeft}
                            iconSize={32}
                            text="voltar"
                            onClick={handleBack}
                            additionalStyles={{
                                fontSize: "1.6rem",
                            }}
                        />
                </WrapButton>
                
                {formType === "criar" && <h1>Novo prato</h1>}
                
                {formType === "editar" && <h1>Editar prato</h1>}

                <Input 
                    icon={UploadSimple}
                    label="Imagem do prato"
                    type="file"
                    placeholder=""
                />

                <Input 
                    label="Nome"
                    type="text"
                    placeholder="Ex.: Salada Ceasar"
                />

                <Input 
                    label="Categoria"
                    type="text"
                    placeholder="Refeição"
                />

                <Input 
                    label="Ingredientes"
                    type="text"
                    placeholder="Pão Naan | Adicionar +"
                />

                <Input 
                    label="Preço"
                    type="text"
                    placeholder="R$ 00,00"
                />

                <Input 
                    label="Descrição"
                    type="text"
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    width="14.4rem"
                />

                <Controls>
                    {
                        formType == "editar" &&
                        <Button
                            text="Excluir prato"
                            padding="1.2rem 0"
                            $background={theme.COLORS.DARK_800}
                        />
                    }

                    <Button
                        text="Salvar alterações"
                        padding="1.2rem 0"
                    />
                </Controls>
            </Form>

            <Footer />
        </Container>
    )
}