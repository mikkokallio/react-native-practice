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