import { useMutation } from '@apollo/client';

export const Mutation = (MUTATION)=>{
    const [addVariables, { data, loading, error }] = useMutation(MUTATION);

    return{
        addVariables,
        data,
        loading,
        error
    }

}