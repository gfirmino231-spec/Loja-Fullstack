import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Color: {
        // a mesma cor (ex: "Azul") é compartilhada entre produtos no banco,
        // mas a imagem retornada é específica de cada produto. Sem isso, o
        // Apollo normaliza por id e mistura a imagem entre produtos diferentes.
        keyFields: false,
      },
    },
  }),
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
