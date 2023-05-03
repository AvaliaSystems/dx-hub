import { useApi, fetchApiRef } from "@backstage/core-plugin-api";
import { useAsyncRetry } from "react-use";

export type Results = {
  documents: Pattern[];
}

export type Pattern = {
  _id: string;
  uid: string;
  __v: number;
  catalog: string;
  properties: Properties;
  srcUrl: string;
  summary: string;
  title: string;
  url: string;
}

export type Properties = {
  url: string;
  srcUrl: string;
  title: string;
  slug: string;
  version: number;
  submitted_by: string;
  published_date: Date;
  category: string;
  description: string;
  tags: string[];
  markdown: string;
  solution: string;
  sci_impact: string;
  assumptions: string;
  considerations: string;
  references: string;
}

const API_URL = 'https://dxhub-kb.avalia.io/api/patterns/random?number=1&filter={"catalog":"Green Software Patterns"}';

const useGreenSoftwarePattern = () => {
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

export default useGreenSoftwarePattern;