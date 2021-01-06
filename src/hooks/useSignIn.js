import { useMutation } from '@apollo/react-hooks';
import { GET_ACCESS_TOKEN } from "../graphql/queries";

const useSignIn = () => {
    const [mutate, result] = useMutation(GET_ACCESS_TOKEN);

    const signIn = async ({ username, password }) => {
        return mutate({ variables: { username, password } });
    };

    return [signIn, result];
};

export default useSignIn;