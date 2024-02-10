import { Container, Label, Wrapper } from "./styles";
import { api } from "../../services/api";
import { useState, useEffect } from "react";

export function Select({label}) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function fetchProduct() {
            const response = await api.get(`/categories`, {})
            setCategories(response.data)
        }
    
        fetchProduct()
    }, [])

    return(
        <Container>
            <Label htmlFor={label}>{label}</Label>

            <Wrapper>
                <label htmlFor={label} />
                <select name={label}>
                    {
                        categories.map(category => {
                            return(
                                <option key={category.id} value={category.id}>
                                    {category.category}
                                </option>
                            )
                        })
                    }
                </select>
            </Wrapper>
        </Container>
    )
}