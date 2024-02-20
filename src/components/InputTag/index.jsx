import { Container, Label, Wrapper, Tag, TagAdd } from "./styles"
import { X } from "@phosphor-icons/react"
import { useState } from "react"

export function InputTag({label}) {
    const [inputTag, setInputTag] = useState(false)

    function handleInputTag() {
        
    }

    return(
        <Container>
            <Label htmlFor={label}>{label}</Label>

            <Wrapper>
                <Tag>
                    Pão Naan
                    <X />
                </Tag>

                <TagAdd>
                    Adicionar +
                </TagAdd>

                <input
                    id={label}
                    type="text"
                />
            </Wrapper>
        </Container>
    )
}