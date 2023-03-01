
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ehbn9tb1",
  dataset: "production",
  apiVersion: "2023-02-28",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);