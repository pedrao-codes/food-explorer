import { 
    Container, Main, Ingredients, Tag, Request, Count, WrapButton,
    ProductImageWrapper, ProductInfoWrapper
} from "./styles";

import { useMenu } from "../../hooks/menu";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { HeaderUser } from "../../components/HeaderUser";
import { Menu } from "../../components/Menu";
import { DynamicButton } from "../../components/DynamicButton";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import { CaretLeft, Minus, Plus, Receipt } from "@phosphor-icons/react";

export function Dish() {
    const {menu, toggleMenu} = useMenu()
    const [product, setProduct] = useState({})
    const [tags, setTags] = useState([])
    const navigate = useNavigate()
    const params = useParams()
    
    const productPlaceholder = "../../../assets/food_placeholder.svg"
    const productImgUrl = product.image ? `${api.defaults.baseURL}/files/${product.image}` : productPlaceholder

    const { user } = useAuth()
    const isAdmin = user && user.isAdmin

    function handleBack() {
        navigate("/")
    }

    useEffect(() => {
        async function fetchProduct() {
            const response = await api.get(`/products/${params.id}`, {})
            setProduct(response.data)
        }
    
        fetchProduct()
    }, [])

    useEffect(() => {
        setTags(product.tags)
    })
    
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
                        onClick={handleBack}
                        additionalStyles={{fontSize: "2.4rem"}}
                    />
                </WrapButton>

                <ProductImageWrapper>
                    <img src={productImgUrl} alt={product.name} />
                </ProductImageWrapper>

                <ProductInfoWrapper>
                    <h1>{product.name}</h1>

                    <p>{product.description}</p>

                    {
                        tags && tags.length > 0 &&
                        <Ingredients>
                            {
                                tags.map(tag => (
                                    <Tag key={String(tag.id)}>
                                        {tag.name}
                                    </Tag>
                                ))
                            }
                        </Ingredients>
                    }

                    {
                        isAdmin ? (
                            <Button
                                text="Editar prato"
                                padding="1.2rem 0"
                                $margin="4.8rem 0 0 0"
                            />
                        ) : (
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
                                    text={`pedir ∙ R$ ${product.price}`}
                                    padding="1.2rem 0"
                                    maxWidth="16.2rem"
                                />
                            </Request>
                        )
                    }
                </ProductInfoWrapper>
            </Main>

            <Footer />
        </Container>
    )
}