import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(process.env.GRAPHQL_ENDPOINT || '', {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
  },
});

export default client;
