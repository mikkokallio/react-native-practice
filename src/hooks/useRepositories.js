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

/*
This can be achieved using the useQuery hook. The gql template literal tag can be imported from the Apollo Boost as instructed earlier.
Consider using the structure recommended earlier for the GraphQL related code.
To avoid future caching issues, use the cache-and-network fetch policy in the query. It can be used with the useQuery hook like this:


The changes in the useRepositories hook should not affect the RepositoryList component in any way.
*/