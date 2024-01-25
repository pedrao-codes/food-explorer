import useMediaQuery from "@mui/material/useMediaQuery";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

import { Requests, RequestsCount, HeaderComponentsWrapper } from "./styles";

import { Header } from "../Header";
import { DynamicButton } from "../DynamicButton";
import { LogoAdmin } from "../LogoAdmin";
import { Logo } from "../Logo";
import { Input } from "../Input";
import { Button } from "../Button";

import { List, Receipt, MagnifyingGlass, SignOut } from "@phosphor-icons/react";

import { useAuth } from "../../hooks/auth";

export function HeaderUser({toggleMenu}) {
    const MDBreakpoint = useMediaQuery(`(max-width:${DEVICE_BREAKPOINTS.MD})`)
    const LGBreakpoint = useMediaQuery(`(max-width:${DEVICE_BREAKPOINTS.LG})`)

    const { user } = useAuth()
    const isAdmin = user && user.isAdmin

    return(
        <Header>
            {
                MDBreakpoint &&
                <DynamicButton
                    icon={List} 
                    iconSize={24}
                    onClick={toggleMenu}
                />
            }
            
            {
                isAdmin 
                ? (<LogoAdmin width="auto" height="2.5rem" />)
                : (<Logo width="auto" height="2.5rem" />)
            }

            {
                !MDBreakpoint &&
                <HeaderComponentsWrapper>
                    <Input
                        icon={MagnifyingGlass}
                        type="text"
                        placeholder="Busque por pratos ou ingredientes"
                        maxWidth="5.5rem"
                    />

                    <Button
                        icon={Receipt}
                        text={`Pedidos (0)`}
                        padding="1.2rem 0"
                        maxWidth="15.2rem"
                    />

                    <DynamicButton
                        icon={SignOut}
                        iconSize={24}
                    />
                </HeaderComponentsWrapper>
            }

            {
                isAdmin || !MDBreakpoint
                ? null
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