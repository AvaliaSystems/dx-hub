import { useApi, fetchApiRef } from "@backstage/core-plugin-api";
import { useAsync } from "react-use";

export type Results = {
  documents: Pattern[];
}

export type Pattern = {
  _id: string;
  uid: string;
  __v: number;
  catalog: string;
  properties: Properties;
  summary: string;
  title: string;
}

export type Properties = {
  url: string;
  stage: string;
  markdown: string;
  title: string;
  patlet: string;
  problem: string;
  story: string;
  context: string;
  forces: string;
  sketch: string;
  solution: string;
  resulting_context: string;
  rationale: string;
  known_instances: string;
  status: string;
  authors: string;
  acknowledgements: string;
  slug: string;
}


const API_URL = 'https://dxhub-kb.avalia.io/api/patterns/random?number=1&filter={"catalog":"InnerSource Patterns", "properties.stage":"2-structured"}';

const useInnerSourcePattern = () => {
  const { fetch } = useApi(fetchApiRef);

  return useAsync(async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const results = data as Results;
    if (results.documents.length < 1) {
      throw new Error('Could not find any pattern');
    }
    const pattern = results.documents[0];
    return pattern;
  });

};

export default useInnerSourcePattern;