import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
    }

    html, body {
        overflow-x: hidden;
        

    }

`;

export default GlobalStyle