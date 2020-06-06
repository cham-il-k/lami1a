import { ApolloClient } from "apollo-client";
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink} from 'apollo-link-http'
import { queries } from './queries'

const link = new HttpLink({
    uri: 'http://localhost:4111/graphiql'
})
const cache = InMemoryCache()


const client = new ApolloClient({
    link,
    cache
})

export default client