import React from 'react';
import useOneRepo from '../hooks/useOneRepo';
import RepositoryItem from './RepositoryItem';
import { useParams } from "react-router-dom";

const SingleRepo = () => {
    const { id } = useParams();
    const { repository } = useOneRepo(id);
    console.log('repo', repository);

    return (
        <RepositoryItem item={repository} single />
    );
};

export default SingleRepo;

/* 
The repository's URL is in the url field of the Repository type in the GraphQL schema. 

If you have trouble using the id as a variable in the query, take a moment to study the Apollo Client's documentation on queries.

To learn how to open a URL in a browser, read the Expo's Linking API documentation. 
You will need this feature while implementing the button for opening the repository in GitHub.
*/