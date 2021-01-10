import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ONE_REPO } from '../graphql/queries';

const useOneRepo = async (id) => {
    console.log('useonerepo', id)
    const [repo, setRepo] = useState();

    const { data, error, loading } = useQuery(GET_ONE_REPO, {
        fetchPolicy: 'cache-and-network',
        variables: { id }
    });

    console.log('data', data)

    useEffect(() => {
        setRepo(data);
        console.log(data);
    }, [data, loading, error]);

    return { repository: data ? data.repository : undefined, loading, error }
};

export default useOneRepo;