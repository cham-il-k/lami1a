import client from './client'
import { queries } from "./queries";
import { gql } from 'graphql-tag'
//const {allUsers, allPrograms} = queries
client.query({
  query : gql`{
  allUsers {
    users {
      name
    }
  }}
  `}).then(result => 
  {
 console.log(`From apollo client`)
    console.log(result)
  }
  )

  