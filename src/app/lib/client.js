import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const clientConfig = {
  projectId: 'xw7d3imi',
  dataset: 'production',
};

export const client = createClient({
  projectId: clientConfig.projectId,
  dataset: clientConfig.dataset,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  apiVersion: '2021-10-21',
  useCdn: true,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);