import { CloseOutline } from '@styled-icons/evaicons-outline';
import LinkWrapper from 'components/LinkWrapper';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import * as S from './styles';

export type ImageProps = {
  url: string;
  width: number;
  height: number;
};

export type PlaceTemplateProps = {
  place: {
    slug: string;
    name: string;
    description?: {
      html: string;
      text: string;
    };
    gallery: Array<ImageProps>;
  };
};

export default function PlaceTemplate({ place }: PlaceTemplateProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <>Loading...</>;
  }

  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={place.description?.text}
        canonical="https://my-trips.magnobiet.com"
      />

      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map"></CloseOutline>
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={80}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
