import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Img, ImgWrapper, Article } from './styles'
import { FavButton } from '../FavButton'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import {Mutation} from '../Container/Mutation'
import {WITHLIKES} from '../../hoc/withLikes'
import { Link } from '@reach/router'

const DEFAULTIMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

export const PhotoCard = ({ id, likes = 0, src = DEFAULTIMAGE, liked }) => {
    const [show, element] = useNearScreen()
    const {addVariables} = Mutation(WITHLIKES)
    const handleFavClick = () => {
        addVariables({ variables: { input: { id } } }).catch((e)=>{
            sessionStorage.removeItem('token');
            location.href = '/user';            
        });
    };

    return (
        <Article ref={element}>
            {
                show &&
                <Fragment>
                    <Link to={'/detail/' + id}>
                        <ImgWrapper>
                            <Img src={src}></Img>
                        </ImgWrapper>
                    </Link>
                    <FavButton likes={likes} onClick={handleFavClick} liked={liked} />
                </Fragment>
            }
        </Article>
    )
}
