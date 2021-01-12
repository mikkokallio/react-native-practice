import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ONE_REPO } from '../graphql/queries';

const useOneRepo = (id) => {
    const [repo, setRepo] = useState();

    const { data, error, loading } = useQuery(GET_ONE_REPO, {
        fetchPolicy: 'cache-and-network',
        variables: { id }
    });

    useEffect(() => {
        setRepo(data);
        console.log(data);
    }, [data, loading, error]);

    return { repository: data ? data.repository : undefined, loading, error }
};

export default useOneRepo;