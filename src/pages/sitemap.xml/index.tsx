/* eslint-disable prettier/prettier */
import client from 'graphql/client';
import { GetPlacesQuery } from 'graphql/generated/graphql';
import { GET_PLACES } from 'graphql/queries';
import { GetServerSideProps } from 'next';
import { getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES);

  const fields = places.map(({ slug }) => ({
    loc: `${process.env.BASE_URL}${slug}`,
    lastmod: new Date().toISOString(),
  }));

  fields.unshift({
    loc: `${process.env.BASE_URL}about`,
    lastmod: new Date().toISOString(),
  });

  fields.unshift({
    loc: `${process.env.BASE_URL}`,
    lastmod: new Date().toISOString(),
  });

  return getServerSideSitemap(ctx, fields);
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => { };
