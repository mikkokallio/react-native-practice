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
        //return mutate({ variables: { username, password } });
        const { data } = await mutate({ variables: { username, password } });
        console.log(data.authorize.accessToken);
        await authStorage.setAccessToken(data.authorize.accessToken);
        history.push("/");
        client.resetStore();
        return data;
    };

    return [signIn, result];
};

export default useSignIn;

//Improve the useSignIn hook so that it stores the user's access token retrieved from the authorize mutation. 
//The return value of the hook should not change. 





//React Context effectively to find out how to combine the useReducer hook with the context to implement state management.
// You might find a way to use this knowledge in the upcoming exercises.

//The only change you should make to the SignIn component is that you should redirect the user to 
//the reviewed repositories list view after a successful sign in. You can achieve this by using the useHistory hook and the history's push method.

//After the authorize mutation has been executed and you have stored the user's access token to the storage, you should reset the Apollo Client's store.
// This will clear the Apollo Client's cache and re-execute all active queries. You can do this by using the Apollo Client's resetStore method. 
