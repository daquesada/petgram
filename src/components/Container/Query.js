import { useQuery } from '@apollo/client'

export function Querys(QUERY,variables={}) {
    const { data = [], loading, error } = useQuery(QUERY, variables)
    
    return {data, loading, error}
}
