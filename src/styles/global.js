<<<<<<< HEAD
import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body, button {
        background: ${({theme}) => theme.COLORS.DARK_400};
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-family: Poppins, sans-serif;
    }
=======
import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body, button {
        background: ${({theme}) => theme.COLORS.DARK_400};
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-family: Poppins, sans-serif;
    }
>>>>>>> 0b4351fb94805bd9fc9015640294948de6257008
`