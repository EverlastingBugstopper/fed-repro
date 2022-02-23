import { composeServices, CompositionResult } from "@apollo/composition";
import { ServiceDefinition } from "@apollo/federation-internals";
import { gql } from "graphql-tag";

function main(): CompositionResult {
  let subgraph_a: ServiceDefinition = {
    typeDefs: gql`
      extend type Query {
        fieldA: Uri
      }
    `,
    name: "a",
  };
  let subgraph_b: ServiceDefinition = {
    typeDefs: gql`
      extend type Query {
        fieldB: Uri
      }

      scalar Uri
    `,
    name: "b",
  };
  return composeServices([subgraph_a, subgraph_b]);
}

console.log(main());
