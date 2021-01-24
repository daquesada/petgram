import React from 'react'
import {PhotoCardWithQuery} from '../components/Container/PhotoCardWithQuery'

export function Detail({detailId}) {
    return (
        <PhotoCardWithQuery id={detailId} />
    )
}
