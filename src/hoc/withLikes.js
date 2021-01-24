import { gql } from '@apollo/client'

export const WITHLIKES = gql`
mutation likePhoto($input:LikePhoto!){
    likePhoto(input:$input){
      id,
      likes,
      liked,
    }
  }
`