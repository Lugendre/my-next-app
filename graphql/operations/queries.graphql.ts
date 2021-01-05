import gql from 'graphql-tag';

export const UserQuery = gql`
  query User {
    user {
      email
      id
      name
      role
    }
  }
`;