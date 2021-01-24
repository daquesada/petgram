import {createGlobalStyle} from 'styled-components';

export const GlobalStyle= createGlobalStyle`
html{
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*:before, *after{
    box-sizing: inherit;
}
ul,li,h1,h2,h3,p,button{
    margin:0;
    padding:0;
}
ul{
    list-style:none;
}
button{
    background:transparent;
    border:0;
    outline:0;
}

body{
    height: 100vh;
    margin:0 auto;
    max-width: 500px;
    overscroll-behavior:none;
    width; 100%;
    background:#fefefe;
}
::-webkit-scrollbar {
    width: 3px;
}
 
::-webkit-scrollbar-track {
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .05); 
    border-radius: 5px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .05);
}
#app{
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    min-height: 100vh;
    overflow-x:hidden;
    padding-bottom: 10px;
}
`

