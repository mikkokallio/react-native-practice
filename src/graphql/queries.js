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

export const GET_ACCESS_TOKEN = gql`
mutation GetAccessToken($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`

export const GET_AUTHORIZED_USER = gql`
query {
    authorizedUser {
      id
      username
    }
  }
`