import styled, {createGlobalStyle} from 'styled-components';


export const Container = styled.div`
position: sticky;
top: 80px; 
width: 100%;



`;

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
}

body {
    font-family:'Poppins', 'sans-serif';
    font-size: 1rem;
    margin: 0;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(52,0,0,1) 12%, rgba(115,0,0,1) 62%);
}

p {
    line-height: 1.5;
    
}
 `;

export default GlobalStyle;