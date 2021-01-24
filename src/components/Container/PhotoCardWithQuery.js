import React, { Fragment } from 'react'
import { PhotoCard } from '../PhotoCard';
import {Querys} from './Query'
import { WITHPHOTO } from '../../hoc/withPhotos'
import { Loading } from '../Loading'
export function PhotoCardWithQuery({ id }) {
    const { data = [],loading } = Querys(WITHPHOTO, { variables: { id } });
    const { photo = {}} = data
    return (
        <Fragment>
            {
                !loading 
                ?
                <PhotoCard {...photo}/>
                :
                <Loading/>
            }
        </Fragment>
        
    )
}
