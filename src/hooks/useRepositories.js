import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
    const [repositories, setRepositories] = useState();

    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
    });

    useEffect(() => {
        setRepositories(data);
        console.log(data);
    }, [data, loading, error]);

    return { repositories: data ? data.repositories : undefined, loading, error }
};

export default useRepositories;