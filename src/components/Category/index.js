import React from 'react'
import {Link, Image} from './styles'
const DEFAULT_IMGAE = 'https://upload.wikimedia.org/wikipedia/commons/6/64/Collage_of_Six_Cats-02.jpg'

const index=({cover = DEFAULT_IMGAE, path='#', emoji='?'}) => (
    <Link to={path}>
        <Image src={cover}></Image>
        {emoji}
    </Link>
)


export default index;