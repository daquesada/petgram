import styled from 'styled-components';

export const Form = styled.form`
padding: 16px 0;
margin-bottom: 60px;
`

export const Input = styled.input`
border: 1px solid #ccd;
border-radius: 15px;
margin-bottom: 8px;
padding: 8px 4px;
display: block;
width: 100%;
align-items:center;
&:focus{
    border-color:blue;
    border-radius: 15px;
}
&:[disable]{
    opacity: .3;
}
`

export const Title = styled.h2`
font-size:16px;
font-weight: 500;
padding: 8px 0;
text-align: center;
`

export const Error = styled.span`
color:red;
font-size: 20px;
text-align: center;
`