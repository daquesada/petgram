import styled from 'styled-components'

export const Button = styled.button`
background: #908bfe;
border-radius: 30px;
color:#fff;
height:32px;
display:block;
width:100%;
text-align: center;
&:[disable]{
    opacity: .3;
}
&:hover{
    background: #444
}
`