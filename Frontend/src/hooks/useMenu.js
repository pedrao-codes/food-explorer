import { useState } from "react"

export function useMenu() {
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        const overflow = menu ? 'auto' : 'hidden'
        document.body.style.overflow = overflow
        setMenu(!menu)
    }

    return({menu, toggleMenu})
}