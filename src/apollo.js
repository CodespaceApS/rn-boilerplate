import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://10.200.100.46:4000',
  request: (operation) => {
    const localState = { name: 'guest', token: '' }
    operation.setContext({
      headers: {
        authorization: localState.token,
      },
    })
  },
})
export default ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
)