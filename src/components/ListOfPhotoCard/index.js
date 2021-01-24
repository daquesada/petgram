import React from 'react'
import { PhotoCard } from '../PhotoCard'

import { WITHPHOTOS } from '../../hoc/withPhotos'
import { Querys } from '../Container/Query'

export const ListOfPhotoCards = ({categoryId}) => {
    const { data, loading } = Querys(WITHPHOTOS, { variables: { categoryId } });
    return (
        <ul>
            {
                !loading &&
                data.photos.map(item =>
                    <PhotoCard key={item.id} {...item}/>
                )
            }
        </ul>
    )
}
