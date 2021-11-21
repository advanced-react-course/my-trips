import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';
import LinkWrapper from 'components/LinkWrapper';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('components/Map'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const places = [
    {
      id: '1',
      name: 'Porto Alegre, RS',
      slug: 'poa',
      location: {
        latitude: -30.1084987,
        longitude: -51.3172258,
      },
    },
    {
      id: '2',
      name: 'Florianópolis, SC',
      slug: 'floripa',
      location: {
        latitude: -27.5707056,
        longitude: -48.7504644,
      },
    },
  ];

  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
