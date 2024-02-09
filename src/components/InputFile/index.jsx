import { Container, Label, Wrapper } from "./styles"
import { UploadSimple } from "@phosphor-icons/react"
import { useState } from "react"

export function InputFile({label, placeholder}) {
    const [fileName, setFileName] = useState("")

    function handleChangeFileName(text) {
        setFileName(text)
    }

    return(
        <Container>
            <Label htmlFor={label}>{label}</Label>

            <Wrapper>
                <label htmlFor={label}>
                    <UploadSimple />
                    {fileName ? fileName : placeholder}
                </label>

                <input
                    id={label}
                    type="file"
                    placeholder={placeholder}
                    onChange={(event) => handleChangeFileName(event.target.files[0].name)}
                />
            </Wrapper>
        </Container>
    )
}