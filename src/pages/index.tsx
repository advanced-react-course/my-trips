import dynamic from 'next/dynamic';

const Map = dynamic(() => import('components/Map'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return <Map />;
}
