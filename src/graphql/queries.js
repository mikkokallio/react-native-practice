import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
query {
    repositories {
        edges {
            node {
                id
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

export const GET_ONE_REPO = gql`
query GetOneRepo($id: ID!) {
    repository(id: $id) {
      id
      fullName
      url
      description
      language
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      ownerAvatarUrl
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
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