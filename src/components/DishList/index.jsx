import { 
    Container, List, Card, DishInfo, Price, Count, Profile, Controls 
} from "./styles";

import { Heart, Minus, Pencil, Plus } from "@phosphor-icons/react";

import { DynamicButton } from "../DynamicButton";
import { Button } from "../Button";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function DishList({title, dishes}) {
    const { user } = useAuth()
    const isAdmin = user && user.isAdmin

    const productPlaceholder = "../../../assets/food_placeholder.svg"

    function findImage(dish) {
        const productImgUrl = dish.image ? `${api.defaults.baseURL}/files/${dish.image}` : productPlaceholder

        return productImgUrl
    }

    return(
        <Container>
            <h1>{title}</h1>

            <List>
                {
                    dishes.map(dish => {
                        return(
                            <Card key={dish.product_id}>
                                <DynamicButton
                                    icon={isAdmin ? Pencil : Heart}
                                    iconSize={24}
                                    additionalStyles={{
                                        position: "absolute",
                                        top: "1.6rem",
                                        right: "1.6rem"
                                    }}
                                />

                                <DishInfo>
                                    <img
                                        src={findImage(dish)}
                                        alt={dish.name}
                                    />

                                    <Profile to={`/dish/${dish.product_id}`}>
                                        <DynamicButton 
                                            text={`${dish.name} >`} 

                                        />
                                    </Profile>
                                    
                                    <Price $isAdmin={isAdmin}>{dish.price}</Price>

                                    <Controls $isAdmin={isAdmin}>
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
                                        <Button
                                            text="incluir"
                                            padding="1.2rem 0"
                                        />
                                    </Controls>
                                </DishInfo>
                                

                            </Card>
                        )
                    })
                }
            </List>
        </Container>
    )
}