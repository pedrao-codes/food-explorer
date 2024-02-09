import { 
    Container, List, Card, DishInfo, Price, Count, Profile, Controls 
} from "./styles";

import { 
    Heart, Minus, Pencil, Plus, CaretLeft, CaretRight  
} from "@phosphor-icons/react";

import { Button } from "../Button";
import { DynamicButton } from "../DynamicButton";
import { IconButton } from "../IconButton";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import useMediaQuery from "@mui/material/useMediaQuery";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function DishList({title, dishes}) {
    const navigate = useNavigate()
    const { user } = useAuth()
    const isAdmin = user && user.isAdmin
    const productPlaceholder = "../../../assets/food_placeholder.svg"
    
    const MDBreakpoint = useMediaQuery(`(max-width:${DEVICE_BREAKPOINTS.MD})`)

    const [showNavigationButtons, setShowNavigationButtons] = useState()
    const listRef = useRef(null)

    useEffect(() => {
        const container = listRef.current
        
        const resizeObserver = new ResizeObserver(entries => {
            for(const entry of entries) {
                const isOverflowing = 
                entry.target.clientWidth < entry.target.scrollWidth

                setShowNavigationButtons(isOverflowing)
            }
        })
  
        resizeObserver.observe(container)
    }, []) // O array vazio assegura que o useEffect seja executado apenas uma vez durante a montagem do componente

    function handleScrollList(action) {
        const container = listRef.current

        if(action === "+") {
            container.scrollLeft += 400
        } else {
            container.scrollLeft -= 400 
        }
    }

    function findImage(dish) {
        const productImgUrl = dish.image ? `${api.defaults.baseURL}/files/${dish.image}` : productPlaceholder

        return productImgUrl
    }

    function handleDishNavigate(productId) {
        navigate(`/dish/${productId}`)
    }

    function handleDishEdit(productId) {
        navigate(`/dish/edit/${productId}`)
    }

    return(
        <Container>
            <h1>{title}</h1>

                <List ref={listRef}>
                    {                   
                        showNavigationButtons && !MDBreakpoint && (
                            <div>
                                <IconButton
                                    icon={CaretLeft}
                                    iconSize={48}
                                    onClick={() => handleScrollList("-")}
                                    additionalStyles={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "2rem",
                                        zIndex: 1
                                    }}
                                />
                                <IconButton
                                    icon={CaretRight}
                                    iconSize={48}
                                    onClick={() => handleScrollList("+")}
                                    additionalStyles={{
                                        position: "absolute",
                                        top: "50%",
                                        right: "2rem",
                                        zIndex: 1
                                    }}
                                />
                            </div>
                        )
                    }
                    
                    <div className="cards-container">
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
                                            onClick={() => handleDishEdit(dish.product_id)}
                                        />

                                        <DishInfo>
                                            <img
                                                src={findImage(dish)}
                                                alt={dish.name}
                                            />

                                            <DynamicButton
                                                text={`${dish.name} >`}
                                                onClick={() => handleDishNavigate(dish.product_id)}
                                            />
                    
                                            <Price $isAdmin={isAdmin}>
                                                {dish.price}
                                            </Price>

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
                    </div>
                </List>
        </Container>
    )
}