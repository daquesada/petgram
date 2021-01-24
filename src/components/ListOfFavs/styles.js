import styled from 'styled-components';
import {Link as RouterLink} from '@reach/router'

export const Link = styled(RouterLink)`
border-radius:8px;
box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
margin: 1%;
display: inline-block;
overflow: hidden;
position: relative;
width:31%;
&:after{
    content:'';
    display:block;
    padding-bottom:100%;
}
`

export const Grid = styled.div`
padding-top:32px;
`

export const Image = styled.img`
object-fit: cover;
heigth: 100%;
width:100%;
position: absolute;
`