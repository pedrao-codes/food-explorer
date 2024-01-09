import { Requests, RequestsCount } from "./styles";

import { Header } from "../Header";
import { DynamicButton } from "../DynamicButton";
import { LogoAdmin } from "../LogoAdmin";
import { Logo } from "../Logo";

import { List, Receipt } from "@phosphor-icons/react";

import { useAuth } from "../../hooks/auth";

export function HeaderUser({toggleMenu}) {
    const { user } = useAuth()
    const isAdmin = user && user.isAdmin

    return(
        <Header>
            <DynamicButton 
                icon={List} 
                iconSize={24}
                onClick={toggleMenu}
            />

            {
                isAdmin 
                ? (<LogoAdmin width="auto" height="2.5rem" />)
                : (<Logo width="auto" height="2.5rem" />)
            }
            
            {
                isAdmin
                ? ( <div></div>) 
                : (
                    <Requests>
                        <DynamicButton icon={Receipt} iconSize={32} />
                        <RequestsCount>
                            0
                        </RequestsCount>
                    </Requests>
                )
            }
        </Header>
    )
}