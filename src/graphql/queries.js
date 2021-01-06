import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
query {
    repositories {
        edges {
            node {
                fullName
                description
                language
                stargazersCount
                forksCount
                reviewCount
                ratingAverage
                ownerAvatarUrl
            }
        }
    }
}
`;

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

export const GET_ACCESS_TOKEN = gql`
mutation GetAccessToken($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`