import { gql } from '@apollo/client'

export const SIGNUP = gql`
mutation signup($input:UserCredentials!){
    signup(input:$input)
}
`

export const SIGNIN = gql`
mutation signin($input:UserCredentials!){
    login(input:$input)
}
`