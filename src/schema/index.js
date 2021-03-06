import { gql } from 'apollo-server-express';

import userSchema from './user';
import companySchema from './company';
import roomSchema from './room';

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, userSchema, companySchema, roomSchema];
