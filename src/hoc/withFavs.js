import { gql } from '@apollo/client'

export const GETFAVS = gql`
query getFavs{
    favs{
        id
        categoryId
        src
        likes
        userId
    }
}
`