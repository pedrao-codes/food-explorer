import { Container, Banner } from "./styles";

import { useMenu } from "../../hooks/menu";
import { useProducts } from "../../hooks/products";

import { HeaderUser } from "../../components/HeaderUser";
import { Footer } from "../../components/Footer";
import { DishList } from "../../components/DishList";
import { Menu } from "../../components/Menu";

export function Home() {
    const { menu, toggleMenu } = useMenu()
    const { products } = useProducts()
    const categoriesSet = new Set()

    Object.values(products).map(product => {
        categoriesSet.add(product.category)
    })

    const categories = Array.from(categoriesSet)
    
    return(
        <Container>
            {menu && <Menu toggleMenu={toggleMenu} />}

            <HeaderUser toggleMenu={toggleMenu} />

            <Banner>
                <img src="../../../assets/colorful_cookies.png" alt="bolachas coloridas"/>

                <h1>Sabores inigualáveis</h1>
                <p> Sinta o cuidado do preparo com ingredientes selecionados</p>
            </Banner>

            {
                categories.map(category => {
                    const productsByCategory = 
                        Object.values(products).filter(product => (
                            product.category == category
                        ))

                    return <DishList key={category} title={category} dishes={productsByCategory} />
                })
            }

            <Footer />
        </Container>
    )
}