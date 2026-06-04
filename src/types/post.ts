import {PortableTextBlock} from 'next-sanity'

export type Post = {
  title: string;
  slug: string;
  summary: string;
  publishedAt: string;
  published: boolean;
  body?: PortableTextBlock[];
};