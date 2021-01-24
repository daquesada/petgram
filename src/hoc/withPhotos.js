import { gql } from '@apollo/client'

export const WITHPHOTOS = gql`
query getPhotos($categoryId:ID){
    photos(categoryId: $categoryId){
      id
      src
      likes
      categoryId
      likes
      liked
      userId
    }
  }
`
export const WITHPHOTO= gql`
query getPhoto($id: ID!){
  photo(id:$id){
    id
      src
      likes
      categoryId
      likes
      liked
      userId
  }
}
`