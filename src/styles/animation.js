import {css, keyframes} from 'styled-components'

const fadeIndKeyFrames = keyframes`
from{
    filter: blur(5px);
    opacity:0;
}
to{
    filter: blur(0);
    opacity:1;
}
`
export const FadeIn =({time='1s',type='ease'}={})=>
css`animation: ${time} ${fadeIndKeyFrames} ${type};`