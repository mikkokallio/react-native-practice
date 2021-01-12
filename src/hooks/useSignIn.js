import { useMutation } from '@apollo/react-hooks';
import { GET_ACCESS_TOKEN } from "../graphql/queries";
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';
import { useHistory } from "react-router-dom";

const useSignIn = () => {
    const authStorage = useContext(AuthStorageContext);
    const client = useApolloClient();
    let history = useHistory();

    const [mutate, result] = useMutation(GET_ACCESS_TOKEN);

    const signIn = async ({ username, password }) => {
        const { data } = await mutate({ variables: { username, password } });
        await authStorage.setAccessToken(data.authorize.accessToken);
        history.push("/");
        client.resetStore();
        return data;
    };

    return [signIn, result];
};

export default useSignIn;