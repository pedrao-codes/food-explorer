import { Container, WrapButton, Form, Controls } from "./styles";
import theme from "../../styles/theme";

import { Menu } from "../../components/Menu";
import { HeaderUser } from "../../components/HeaderUser";
import { DynamicButton } from "../../components/DynamicButton";
import { Input } from "../../components/Input";
import { InputFile } from "../../components/InputFile";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import { CaretLeft } from "@phosphor-icons/react"

import { useMenu } from "../../hooks/menu";
import { useNavigate } from "react-router-dom";

export function DishForm({ create=true }) {
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
                
                {
                    create
                    ? <h1>Novo prato</h1> 
                    : <h1>Editar prato</h1>
                }

                <InputFile 
                    label="Imagem do prato"
                    placeholder={
                        create
                        ? "Selecione imagem"
                        : "Selecione imagem para alterá-la"
                    }
                />

                <Input 
                    label="Nome"
                    type="text"
                    placeholder="Ex.: Salada Ceasar"
                />

                <Select
                    label="Categoria"
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
                        !create &&
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