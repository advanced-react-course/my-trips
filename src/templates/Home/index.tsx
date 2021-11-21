import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';
import LinkWrapper from 'components/LinkWrapper';
import { MapProps } from 'components/Map';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('components/Map'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show my favorite spots in the world"
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}`}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
