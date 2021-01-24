import React, { Fragment, useContext, useEffect } from 'react';
import { Querys } from '../Container/Query'
import { GETFAVS } from '../../hoc/withFavs'
import { Grid, Image, Link } from './styles'
import { Context } from '../../Context'
export const ListOfFavs = () => {
    const { data, loading, error } = Querys(GETFAVS, { fetchPolicy: "network-only" });
    const { removeAuth } = useContext(Context)
    if (error) {
        removeAuth();
        return <></>
    }

    return <Grid>
        {
            !loading && data.favs.map((photo) =>
                <Link key={photo.id} to={'/detail/' + photo.id}>
                    <Image {...photo} />
                </Link>
            )
        }
    </Grid>
}