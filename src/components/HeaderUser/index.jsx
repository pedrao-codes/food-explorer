import { Container, Requests, RequestsCount } from "./styles";

import { DynamicButton } from "../DynamicButton";
import { Logo } from "../Logo";

import { List, Receipt } from "@phosphor-icons/react";

export function HeaderUser({toggleMenu}) {
    return(
        <Container>
            <DynamicButton 
                icon={List} 
                iconSize={24}
                onClick={toggleMenu}
            />

            <Logo width="auto" height="2.5rem" />

            <Requests>
                <DynamicButton icon={Receipt} iconSize={32} />
                <RequestsCount>
                    0
                </RequestsCount>
            </Requests>
        </Container>
    )
}