import { Container, List, Card, DishInfo, Price, Count, Profile } from "./styles";

import { Heart, Minus, Plus } from "@phosphor-icons/react";

import { DynamicButton } from "../DynamicButton";
import { Button } from "../Button";

const dishes = [
    {
        name: "Salada Ravanello",
        price: "R$ 49,97",
        img: "../../../assets/foods/salad_2.svg",
        alt: "salada ravanello"
    },
    {
        name: "Spaguetti Gambe",
        price: "R$ 79,97",
        img: "../../../assets/foods/shrimp.svg",
        alt: "spaguetti de camarão"
    }
]

export function DishList({title, page}) {
    return(
        <Container>
            <h1>{title}</h1>

            <List>
                {
                    dishes.map((dish) => {
                        return(
                            <Card key={dish.name}>
                                <DynamicButton
                                    icon={Heart}
                                    iconSize={24}
                                    additionalStyles={{
                                        position: "absolute",
                                        top: "1.6rem",
                                        right: "1.6rem"
                                    }}
                                />

                                <DishInfo>
                                    <img src={dish.img} alt={dish.alt} />

                                    <Profile to={page}>
                                        <DynamicButton text={`${dish.name} >`} />
                                    </Profile>

                                    <Price>{dish.price}</Price>
                                    
                                    <Count>
                                        <DynamicButton 
                                            icon={Minus}
                                            iconSize={24}
                                        />
                                        01
                                        <DynamicButton 
                                            icon={Plus}
                                            iconSize={24}
                                        />
                                    </Count>
                                </DishInfo>
                                
                                <Button
                                    text="incluir"
                                    padding="1.2rem 0"
                                />
                            </Card>
                        )
                    })
                }
            </List>
        </Container>
    )
}