import { useApi, fetchApiRef } from "@backstage/core-plugin-api";
import { useAsyncRetry } from "react-use";

export type Results = {
  documents: GlossaryTerm[];
}

export type GlossaryTerm = {
  _id: string;
  uid: string;
  __v: number;
  catalog: string;
  properties: Properties;
  summary: string;
  title: string;
}

export type Properties = {
  NakaGPT: any;
  url: string;
  srcUrl: string;
  title: string;
  status: string;
  category: string;
  tags: string[];
  markdown: string;
  what_it_is: string;
  problem_it_addresses: string;
  how_it_helps: string;
  slug: string;
}


// const API_URL = 'https://dxhub-kb.avalia.io/api/patterns/random?number=1&filter={"catalog":"CNCF Cloud Native Glossary"}';
const filter = {
  "catalog": "CNCF Cloud Native Glossary",
  "properties.NakaGPT": { "$exists": true },
}
const filterString = encodeURIComponent(JSON.stringify(filter));

const API_URL = `https://dxhub-kb.avalia.io/api/patterns/random?number=1&filter=${filterString}`;

export const useCNCFGlossary = () => {
  const { fetch } = useApi(fetchApiRef);

  return useAsyncRetry(async () => {
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
