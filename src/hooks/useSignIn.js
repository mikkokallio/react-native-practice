import { useMutation } from '@apollo/react-hooks';
import { GET_ACCESS_TOKEN } from "../graphql/queries";

//where result is the mutations result as it is returned by the useMutation hook 
//and signIn a function that runs the mutation with a { username, password } object argument. 

const useSignIn = () => {
    const [mutate, result] = useMutation(GET_ACCESS_TOKEN, {
        //
    });

    const signIn = async ({ username, password }) => {
        mutate({ variables: { username, password } })
        //console.log('result',result.client.data)
        return result;
    };

    return [signIn, result];
};

export default useSignIn;

//This exercise is completed once you can log the user's authorize mutations result after the sign in form has been submitted. 
//The mutation result should contain the user's access token.