import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://campigliamarittima.stepzen.net/api/undercooked-cardinal/__graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      'Apikey campigliamarittima::stepzen.net+1000::9ac8dfbed83d4c1604c884aacf678494247d1eb24dd19e014127ad37ed7b52d5',
  },
});

export default client;
